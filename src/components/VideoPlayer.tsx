'use client';

import { MediaPlayer, MediaProvider } from '@vidstack/react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  autoPlay?: boolean;
  onError?: () => void;
  /** CSS aspect-ratio, например "16/9", "4/3", "9/16" */
  aspectRatio?: string;
}

export default function VideoPlayer({
                                      src,
                                      poster,
                                      className = '',
                                      onError,
                                      controls = false,
                                      loop = true,
                                      muted = true,
                                      autoPlay = true,
                                      aspectRatio = '1', // 👈 дефолт
                                    }: VideoPlayerProps) {
  // Detect iOS Safari
  const isIOSSafari = () => {
    if (typeof window === 'undefined') return false;
    const userAgent = window.navigator.userAgent;
    return /iPad|iPhone|iPod/.test(userAgent) && /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
  };

  const isIOS = isIOSSafari();

  const shouldMute = muted || (isIOS && autoPlay);
  const shouldAutoPlay = autoPlay;
  const shouldShowControls = controls;

  return (
      <MediaPlayer
          className={`w-full h-full ${className}`}
          title="Video Player"
          aspectRatio={aspectRatio}        // 👈 сюда из пропса
          controls={shouldShowControls}
          src={src}
          poster={poster}
          preload="auto"
          autoPlay={shouldAutoPlay}
          muted={shouldMute}
          loop={loop}
          onError={onError}
          playsInline
      >
        <MediaProvider className="w-full h-full video-player-provider" />
      </MediaPlayer>
  );
}
