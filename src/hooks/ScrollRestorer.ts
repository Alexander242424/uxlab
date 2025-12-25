"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY_PREFIX = "scroll-pos:";
const FORCE_TOP_KEY = "force-scroll-top-next";

function isFiniteNumber(n: any) {
  return typeof n === "number" && Number.isFinite(n);
}

function isHome(pathname: string) {
  return pathname === "/";
}

function isCasePageDOM() {
  // важно: проверяем уже отрендеренный DOM страницы
  return !!document.querySelector('[data-page="case"]');
}

function getPathFromHref(href: string) {
  try {
    return new URL(href, window.location.origin).pathname || "/";
  } catch {
    return null;
  }
}

export default function ScrollRestorer() {
  const pathname = usePathname();

  // отключаем дефолтный restoration
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // ловим клики по ссылкам и решаем: форс топ или нет
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

      // если ссылка помечена как "следующая страница должна быть сверху"
      if (a.getAttribute("data-scroll") === "top") {
        sessionStorage.setItem(FORCE_TOP_KEY, "1");

        const nextPath = getPathFromHref(href);
        if (nextPath) {
          // чтобы никогда не восстанавливалось “где-то внизу”
          sessionStorage.removeItem(`${STORAGE_KEY_PREFIX}${nextPath}`);
        }
      }
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  // на переходе применяем позицию
  useLayoutEffect(() => {
    const storageKey = `${STORAGE_KEY_PREFIX}${pathname}`;

    const forceTop = sessionStorage.getItem(FORCE_TOP_KEY) === "1";
    if (forceTop) {
      sessionStorage.removeItem(FORCE_TOP_KEY);
      window.scrollTo(0, 0);
      requestAnimationFrame(() => window.scrollTo(0, 0));
      return;
    }

    // если это кейс-страница — всегда вверх
    // (важно: проверка DOM после рендера страницы)
    if (!isHome(pathname) && isCasePageDOM()) {
      // на всякий случай грохнем сохранение для этого пути
      sessionStorage.removeItem(storageKey);
      window.scrollTo(0, 0);
      requestAnimationFrame(() => window.scrollTo(0, 0));
      return;
    }

    // восстанавливаем ТОЛЬКО на главной
    if (isHome(pathname)) {
      const saved = sessionStorage.getItem(storageKey);
      if (saved != null) {
        const y = Number(saved);
        if (isFiniteNumber(y)) {
          window.scrollTo(0, y);
          requestAnimationFrame(() => window.scrollTo(0, y));
        }
      }
    } else {
      // остальные страницы по умолчанию — вверх
      window.scrollTo(0, 0);
      requestAnimationFrame(() => window.scrollTo(0, 0));
    }
  }, [pathname]);

  // сохраняем скролл ТОЛЬКО на главной
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
