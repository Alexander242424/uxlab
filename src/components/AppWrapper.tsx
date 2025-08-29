"use client";
import { useState } from "react";
import WelcomePage from "./WelcomePage";

interface AppWrapperProps {
  children: React.ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  const [shouldRenderContent, setShouldRenderContent] = useState(false);

  const handleAnimationStart = () => {
    setShouldRenderContent(true);
  };

  return (
    <>
      <WelcomePage onAnimationStart={handleAnimationStart} />
      {shouldRenderContent && children}
    </>
  );
}
