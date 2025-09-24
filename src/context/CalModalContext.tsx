"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CalModalContextType {
  isModalOpen: boolean;
  calUrl: string;
  openModal: (url: string) => void;
  closeModal: () => void;
}

const CalModalContext = createContext<CalModalContextType | undefined>(undefined);

export function CalModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [calUrl, setCalUrl] = useState('');

  const openModal = (url: string) => {
    setCalUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCalUrl('');
  };

  return (
    <CalModalContext.Provider value={{ isModalOpen, calUrl, openModal, closeModal }}>
      {children}
    </CalModalContext.Provider>
  );
}

export function useCalModal() {
  const context = useContext(CalModalContext);
  if (context === undefined) {
    throw new Error('useCalModal must be used within a CalModalProvider');
  }
  return context;
}
