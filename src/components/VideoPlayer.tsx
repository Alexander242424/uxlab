'use client';

import { MediaPlayer, MediaProvider } from '@vidstack/react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function VideoPlayer({ src, poster, className = '' }: VideoPlayerProps) {
  return (
    <MediaPlayer
      className={`w-full ${className}`}
      title="Video Player"
      aspectRatio="16 / 9"
      controls={false}
      src={src}
      poster={poster}
      preload = "auto"
      autoPlay
      muted
      loop
    >
      <MediaProvider />
    </MediaPlayer>
  );
}