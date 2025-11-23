"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

type Props = {
  children: React.ReactNode;
};

const LenisProvider: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05, // 0–1, чем меньше — тем более "вязкий" скролл
    });

    let frameId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default LenisProvider;
