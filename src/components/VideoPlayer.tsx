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
}

export default function VideoPlayer({ src, poster, className = '', onError, controls = false, loop = true, muted = true, autoPlay = true }: VideoPlayerProps) {
  return (
    <MediaPlayer
      className={`w-full ${className}`}
      title="Video Player"
      aspectRatio="16 / 9"
      controls={controls}
      src={src}
      poster={poster}
      preload = "auto"
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      onError={onError}
    >
      <MediaProvider />
    </MediaPlayer>
  );
}