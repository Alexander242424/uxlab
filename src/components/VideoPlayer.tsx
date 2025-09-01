'use client';

import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { useIsMobile } from '@/hooks/useIsMobile';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  autoPlay?: boolean;
  onError?: () => void;
}

export default function VideoPlayer({ src, poster, className = '', onError, controls = false, loop = true, muted = true, autoPlay = true }: VideoPlayerProps) {
  const isMobile = useIsMobile();
  
  // Detect iOS Safari
  const isIOSSafari = () => {
    if (typeof window === 'undefined') return false;
    const userAgent = window.navigator.userAgent;
    return /iPad|iPhone|iPod/.test(userAgent) && /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
  };

  // Safari on iOS has restrictions: autoplay only works with muted videos
  const isIOS = isIOSSafari();
  
  // Handle iOS Safari restrictions
  const shouldMute = muted || (isIOS && autoPlay); // Force mute only if autoplay is requested on iOS
  const shouldAutoPlay = autoPlay; // Keep autoplay as requested, but it won't work on iOS without user interaction
  const shouldShowControls = controls; // Respect the controls prop - don't force show on iOS

  return (
    <MediaPlayer
      className={`w-full ${className}`}
      title="Video Player"
      aspectRatio="16 / 9"
      controls={shouldShowControls}
      src={src}
      poster={poster}
      preload="auto"
      autoPlay={shouldAutoPlay}
      muted={shouldMute}
      loop={loop}
      onError={onError}
      playsInline={isIOS} // Required for iOS
    >
      <MediaProvider />
    </MediaPlayer>
  );
}