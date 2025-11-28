import type { ReactNode } from "react";
import WelcomeOverlay from "./WelcomeOverlay";

interface AppWrapperProps {
  children: ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  return (
    <>
      <WelcomeOverlay />
      {children}
    </>
  );
}
