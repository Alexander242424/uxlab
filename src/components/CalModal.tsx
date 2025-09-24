"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useCalModal } from "@/context/CalModalContext";

export default function CalModal() {
  const { isModalOpen, calUrl, closeModal } = useCalModal();
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen && !isAnimating) {
        handleClose();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      setIsLoading(true);
      setIsAnimating(false);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, isAnimating]);

  useEffect(() => {
    if (isModalOpen && modalRef.current && backdropRef.current) {
      setIsAnimating(true);
      
      // Анімація заднього фону
      gsap.fromTo(backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      
      // Анімація модалки
      gsap.fromTo(modalRef.current,
        {
          opacity: 0,
          scale: 0.9,
          y: 20,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
          onComplete: () => setIsAnimating(false)
        }
      );
    }
  }, [isModalOpen]);

  const handleClose = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (modalRef.current && backdropRef.current) {
      // Анімація модалки
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.95,
        y: 10,
        duration: 0.3,
        ease: "power2.in"
      });
      
      // Анімація заднього фону
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setIsAnimating(false);
          closeModal();
        }
      });
    } else {
      closeModal();
    }
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  if (!isModalOpen) return null;

  return (
    <div 
      ref={backdropRef}
      className="fixed inset-0 bg-black/40 z-[999999] flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div 
        ref={modalRef}
        className="bg-black rounded-lg w-full max-w-[90dvw] h-[70dvh] md:max-w-[70dvw] md:h-[80vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 z-10 w-9 h-9 cursor-pointer bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center shadow-lg transition-colors backdrop-blur-sm"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-text-500 hover:text-text-700"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Loading spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black rounded-lg z-20">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
              <p className="text-white text-sm">Loading...</p>
            </div>
          </div>
        )}

        {/* Iframe with padding */}
        <div className="pt-8 px-2 h-full rounded-[16px] border border-border-50">
          <iframe
            ref={iframeRef}
            src={calUrl}
            className="w-full h-full"
            title="Cal.com Booking"
            allow="camera; microphone; fullscreen"
            onLoad={handleIframeLoad}
          />
        </div>
      </div>
    </div>
  );
}
