"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY_PREFIX = "scroll-pos:";
const FORCE_TOP_KEY = "force-scroll-top-next";

const ScrollRestorer = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Отключаем стандартное восстановление скролла браузером
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const storageKey = `${STORAGE_KEY_PREFIX}${pathname}`;

    // ✅ 0) Если пришли по клику из last_link_section — ВСЕГДА вверх
    const forceTop = sessionStorage.getItem(FORCE_TOP_KEY) === "1";
    if (forceTop) {
      sessionStorage.removeItem(FORCE_TOP_KEY);

      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      });

      // не восстанавливаем сохранённую позицию
      return;
    }

    // 1) При монтировании пытаемся восстановить позицию (как было у тебя)
    const saved = sessionStorage.getItem(storageKey);
    if (saved) {
      const y = parseFloat(saved);
      requestAnimationFrame(() => {
        window.scrollTo({ top: y, behavior: "auto" });
      });
    }

    // 2) Сохраняем позицию при скролле
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
