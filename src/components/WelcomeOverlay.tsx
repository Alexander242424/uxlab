// src/components/WelcomeOverlay.tsx
"use client";

import { useState } from "react";
import WelcomePage from "./WelcomePage";

export default function WelcomeOverlay() {
  const [visible, setVisible] = useState(true);

  const handleAnimationStart = () => {
    // когда анимация/интро заканчивается – скрываем оверлей
    setVisible(false);
  };

  if (!visible) return null;

  return <WelcomePage onAnimationStart={handleAnimationStart} />;
}
