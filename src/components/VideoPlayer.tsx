"use client";

import React, { useMemo } from "react";
import { MediaPlayer, MediaProvider } from "@vidstack/react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;

  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  autoPlay?: boolean;

  onError?: () => void;

  /**
   * Vidstack ожидает строку типа "16/9" или "1".
   * В твоём коде часто прилетает "" — это ломать не должно.
   */
  aspectRatio?: string;
}

function isIOSSafari() {
  if (typeof window === "undefined") return false;
  const ua = window.navigator.userAgent;
  return (
    /iPad|iPhone|iPod/.test(ua) &&
    /Safari/.test(ua) &&
    !/CriOS|Chrome|FxiOS|EdgiOS/.test(ua)
  );
}

export default function VideoPlayer({
  src,
  poster,
  className = "",
  controls = false,
  loop = true,
  muted = true,
  autoPlay = true,
  onError,
  aspectRatio = "",
}: VideoPlayerProps) {
  const iosSafari = useMemo(isIOSSafari, []);

  // iOS autoplay почти всегда требует muted + playsInline
  const shouldAutoPlay = autoPlay && !controls;
  const shouldMute = muted || (iosSafari && shouldAutoPlay);

  // если прилетела пустая строка — подставляем дефолт
  const resolvedAspectRatio =
    typeof aspectRatio === "string" && aspectRatio.trim().length > 0
      ? aspectRatio.trim()
      : "";

  return (
    <MediaPlayer
      key={src} 
      className={`w-full h-full ${className}`}
      title="Video Player"
      src={src}
      poster={poster}
      aspectRatio={resolvedAspectRatio}
      controls={controls}
      loop={loop}
      muted={shouldMute}
      autoPlay={shouldAutoPlay}
      playsInline
      preload="metadata" // не качаем весь файл сразу
      onError={onError as any}
    >
      <MediaProvider className="w-full h-full video-player-provider" />
    </MediaPlayer>
  );
}
