"use client";
import { useEffect, useState } from "react";
import WelcomePage from "./WelcomePage";

interface AppWrapperProps {
  children: React.ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowPreloader(false), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {children}
      <WelcomePage isVisible={showPreloader} />
    </>
  );
}
