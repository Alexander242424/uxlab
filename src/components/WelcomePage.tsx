"use client";
import { motion, AnimatePresence } from "framer-motion";

interface WelcomePageProps {
  isVisible: boolean;
}

export default function WelcomePage({ isVisible }: WelcomePageProps) {
  const words = ["Welcome", "to", "UXLAB"];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-white z-[999999] flex items-center justify-center pointer-events-none"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            y: "100%",
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
        >
          <div className="text-center overflow-hidden">
            <div className="text-black flex flex-wrap justify-center gap-2 font-tt-hoves text-[1.5rem] leading-[3rem] sm:text-[2.1rem] sm:leading-[6.6938rem] tracking-[-0.0315rem]">
              {words.map((word, index) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.2,
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
