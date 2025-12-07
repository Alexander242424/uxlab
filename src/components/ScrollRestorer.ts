"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY_PREFIX = "scroll-pos:";

const ScrollRestorer = () => {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window === "undefined") return;

        // Отключаем стандартное восстановление скролла браузером
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        const storageKey = `${STORAGE_KEY_PREFIX}${pathname}`;

        // 1. При монтировании пытаемся восстановить позицию
        const saved = sessionStorage.getItem(storageKey);
        if (saved) {
            const y = parseFloat(saved);
            // Немного ждём, чтобы DOM и Lenis успели инициализироваться
            requestAnimationFrame(() => {
                window.scrollTo({ top: y, behavior: "auto" });
            });
        }

        // 2. Сохраняем позицию при скролле
        const handleScroll = () => {
            sessionStorage.setItem(storageKey, String(window.scrollY));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [pathname]);

    return null;
};

export default ScrollRestorer;
