import { useState, useEffect } from 'react';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      // Check screen width
      const isMobileByWidth = window.innerWidth <= 768;
      
      // Check user agent for additional mobile detection
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileByUserAgent = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      
      setIsMobile(isMobileByWidth || isMobileByUserAgent);
    };

    // Check on mount
    checkIsMobile();

    // Add event listener for resize
    window.addEventListener('resize', checkIsMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
}
