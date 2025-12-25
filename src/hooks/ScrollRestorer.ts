"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToY } from "@/lib/lenis";

const STORAGE_KEY_PREFIX = "scroll-pos:";
const FORCE_TOP_KEY = "force-scroll-top-next";

function isFiniteNumber(n: any) {
  return typeof n === "number" && Number.isFinite(n);
}

function isHome(pathname: string) {
  return pathname === "/";
}

function getPathFromHref(href: string) {
  try {
    return new URL(href, window.location.origin).pathname || "/";
  } catch {
    return null;
  }
}

// добиваем несколько кадров, чтобы Lenis/лейаут не отыграл назад
function forceTopHard() {
  scrollToY(0, true);
  requestAnimationFrame(() => scrollToY(0, true));
  requestAnimationFrame(() => requestAnimationFrame(() => scrollToY(0, true)));
  requestAnimationFrame(() => requestAnimationFrame(() => requestAnimationFrame(() => scrollToY(0, true))));
  setTimeout(() => scrollToY(0, true), 0);
  setTimeout(() => scrollToY(0, true), 50);
}


export default function ScrollRestorer() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // помечаем переходы, которые должны быть сверху
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const a = (e.target as HTMLElement | null)?.closest("a") as HTMLAnchorElement | null;
      if (!a) return;

      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      if (a.target === "_blank") return;
      if (a.hasAttribute("download")) return;

      if (a.getAttribute("data-scroll") === "top") {
        sessionStorage.setItem(FORCE_TOP_KEY, "1");

        const nextPath = getPathFromHref(href);
        if (nextPath) {
          sessionStorage.removeItem(`${STORAGE_KEY_PREFIX}${nextPath}`);
        }
      }
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  // применяем скролл на новом pathname
  useLayoutEffect(() => {
    const storageKey = `${STORAGE_KEY_PREFIX}${pathname}`;

    const forceTop = sessionStorage.getItem(FORCE_TOP_KEY) === "1";
    if (forceTop) {
      sessionStorage.removeItem(FORCE_TOP_KEY);
      sessionStorage.removeItem(storageKey);
      forceTopHard();
      return;
    }

    // home: восстановление
    if (isHome(pathname)) {
      const saved = sessionStorage.getItem(storageKey);
      if (saved != null) {
        const y = Number(saved);
        if (isFiniteNumber(y)) {
          scrollToY(y, true);
          requestAnimationFrame(() => scrollToY(y, true));
        }
      }
      return;
    }

    // все остальные страницы всегда вверх (включая кейсы)
    sessionStorage.removeItem(storageKey);
    forceTopHard();
  }, [pathname]);

  // сохраняем скролл только на home
  useEffect(() => {
    if (!isHome(pathname)) return;

    const storageKey = `${STORAGE_KEY_PREFIX}${pathname}`;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        sessionStorage.setItem(storageKey, String(window.scrollY));
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}
