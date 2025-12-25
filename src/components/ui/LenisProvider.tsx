"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { setLenis } from "@/lib/lenis";

type Props = { children: React.ReactNode };

const LenisProvider: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });
    setLenis(lenis);

    let frameId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default LenisProvider;
