"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface VideoModalContextType {
  isModalOpen: boolean;
  videoSrc: string;
  openModal: (src: string) => void;
  closeModal: () => void;
}

const VideoModalContext = createContext<VideoModalContextType | undefined>(undefined);

export function VideoModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  const openModal = (src: string) => {
    setVideoSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoSrc('');
  };

  return (
    <VideoModalContext.Provider value={{ isModalOpen, videoSrc, openModal, closeModal }}>
      {children}
    </VideoModalContext.Provider>
  );
}

export function useVideoModal() {
  const context = useContext(VideoModalContext);
  if (context === undefined) {
    throw new Error('useVideoModal must be used within a VideoModalProvider');
  }
  return context;
}
