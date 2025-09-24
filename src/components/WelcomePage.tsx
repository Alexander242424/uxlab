"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WelcomePageProps {
  onAnimationStart: () => void;
}

export default function WelcomePage({ onAnimationStart }: WelcomePageProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the welcome page after 2.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Trigger main content rendering when animation starts
      onAnimationStart();
    }, 1700);

    return () => clearTimeout(timer);
  }, [onAnimationStart]);

  const words = ["Welcome", "to", "UXLAB"];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-white z-[999999] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "100%",
            transition: { 
              duration: 0.8, 
              ease: "easeInOut" 
            }
          }}
        >
          <div className="text-center overflow-hidden">
            <div
              className="text-black flex flex-wrap justify-center gap-2 hoves-h5-med"
            >
              {words.map((word, index) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.0,
                    ease: "easeInOut",
                    delay: 0.5 + index * 0.2,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
