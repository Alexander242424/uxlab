"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

import Icon1 from "@/assets/FeatureEng/feature_logo1.svg";
import Icon2 from "@/assets/FeatureEng/feature_logo2.svg";
import Icon3 from "@/assets/FeatureEng/feature_logo3.svg";
import Icon4 from "@/assets/FeatureEng/feature_logo4.svg";
import Icon5 from "@/assets/FeatureEng/feature_logo5.svg";
import Icon6 from "@/assets/FeatureEng/feature_logo6.svg";
import Icon7 from "@/assets/FeatureEng/feature_logo7.svg";
import Icon8 from "@/assets/FeatureEng/feature_logo8.svg";
import Icon9 from "@/assets/FeatureEng/feature_logo9.svg";
import Icon10 from "@/assets/FeatureEng/feature_logo10.svg";
import Icon11 from "@/assets/FeatureEng/feature_logo11.svg";
import Icon12 from "@/assets/FeatureEng/feature_logo12.svg";
import Icon13 from "@/assets/FeatureEng/feature_logo13.svg";
import Icon14 from "@/assets/FeatureEng/feature_logo14.svg";
import Icon15 from "@/assets/FeatureEng/feature_logo15.svg";
import Icon16 from "@/assets/FeatureEng/feature_logo16.svg";

type SvgComp = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const ALL: SvgComp[] = [
    Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8,
    Icon9, Icon10, Icon11, Icon12, Icon13, Icon14, Icon15, Icon16
];

const VISIBLE = 8;

// Один слот за тик, но слот выбираем рандомно
const STEP_MS = 1520;
const FADE_MS = 1520;

type Slot = {
    cur: number;
    nxt: number;
    t: 0 | 1;
};

function mod(n: number, m: number) {
    return ((n % m) + m) % m;
}

// нормальный рандом-инт
function randInt(max: number) {
    return Math.floor(Math.random() * max);
}

export default function FeatureEngagemant() {
    const len = ALL.length;

    const [slots, setSlots] = useState<Slot[]>(
        Array.from({ length: VISIBLE }, (_, i) => ({
            cur: i % len,
            nxt: i % len,
            t: 0
        }))
    );

    const poolRef = useRef(VISIBLE);          // если хочешь “как будто из пула” — оставим
    const slotsStateRef = useRef(slots);
    const lastSlotRef = useRef<number>(-1);   // чтобы не бить один и тот же слот подряд

    useEffect(() => {
        slotsStateRef.current = slots;
    }, [slots]);

    useEffect(() => {
        let alive = true;

        const pickRandomSlot = () => {
            if (VISIBLE <= 1) return 0;
            // избегаем повторения того же слота подряд
            let s = randInt(VISIBLE);
            if (s === lastSlotRef.current) s = (s + 1 + randInt(VISIBLE - 1)) % VISIBLE;
            lastSlotRef.current = s;
            return s;
        };

        const pickNextUniqueRandomIcon = (changingSlot: number) => {
            const used = new Set<number>();

            // В "используемых" считаем всё, что может быть видно:
            // - cur всегда
            // - nxt только если слот в фазе t=1 (идёт фейд)
            slotsStateRef.current.forEach((s) => {
                used.add(s.cur);
                if (s.t === 1) used.add(s.nxt);
            });

            // Дополнительно: запретим выбрать ту же иконку, что уже стоит в меняемом слоте
            used.add(slotsStateRef.current[changingSlot]?.cur);

            // Быстрые случайные попытки
            for (let i = 0; i < 24; i++) {
                const c = randInt(len);
                if (!used.has(c)) return c;
            }

            // Fallback по пулу (гарантия найти при len=16, VISIBLE=8)
            for (let guard = 0; guard < len + 2; guard++) {
                const candidate = mod(poolRef.current, len);
                poolRef.current = candidate + 1;
                if (!used.has(candidate)) return candidate;
            }

            // Крайний случай (не должен случиться)
            return randInt(len);
        };


        const tick = () => {
            if (!alive) return;

            const slot = pickRandomSlot();
            const nextIdx = pickNextUniqueRandomIcon(slot);

            // старт кроссфейда на выбранном рандомном слоте
            setSlots(prev => {
                const next = prev.slice();
                const s = next[slot];
                next[slot] = { cur: s.cur, nxt: nextIdx, t: 1 };
                return next;
            });

            // фиксация через FADE_MS
            const finalizeId = window.setTimeout(() => {
                if (!alive) return;
                setSlots(prev => {
                    const next = prev.slice();
                    const s = next[slot];
                    if (s.t !== 1) return prev;
                    next[slot] = { cur: s.nxt, nxt: s.nxt, t: 0 };
                    return next;
                });
            }, FADE_MS);

            // следующий тик
            const nextTickId = window.setTimeout(tick, STEP_MS);

            // на случай если компонент размонтируют между таймерами — подчистим
            return () => {
                clearTimeout(finalizeId);
                clearTimeout(nextTickId);
            };
        };

        const start = window.setTimeout(() => {
            // запускаем цепочку
            tick();
        }, 400);

        return () => {
            alive = false;
            clearTimeout(start);
        };
    }, [len]);

    const rendered = useMemo(
        () =>
            slots.map(s => ({
                Cur: ALL[s.cur],
                Nxt: ALL[s.nxt],
                t: s.t
            })),
        [slots]
    );

    return (
        <section className="feature_engagemant_section mt-[160px] mx-4">
            <div className="container-fluid">
                <div className="row mx-0">
                    <div className="col-12 text-center mb-8">
                        <h2 className="t-p1">Feature Engagemant</h2>
                    </div>

                    {rendered.map(({ Cur, Nxt, t }, i) => (
                        <div key={i}  className={`col-6 col-md-3 text-center feature_item`}>
                            <div
                                className="icon_box"
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        opacity: 1 - t,
                                        transform: `scale(${t ? 0.98 : 1}) translateY(${t ? -6 : 0}px)`,
                                        filter: `blur(${t ? 2 : 0}px)`,
                                        transition: `opacity ${FADE_MS}ms ease, transform ${FADE_MS}ms ease, filter ${FADE_MS}ms ease`,
                                        willChange: "opacity, transform, filter"
                                    }}
                                    aria-hidden
                                >
                                    <Cur />
                                </div>

                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        opacity: t,
                                        transform: `scale(${t ? 1 : 0.96}) translateY(${t ? 0 : 6}px)`,
                                        filter: `blur(${t ? 0 : 2}px)`,
                                        transition: `opacity ${FADE_MS}ms ease, transform ${FADE_MS}ms ease, filter ${FADE_MS}ms ease`,
                                        willChange: "opacity, transform, filter"
                                    }}
                                    aria-hidden
                                >
                                    <Nxt />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
