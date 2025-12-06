"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function FinalCelebration({ show }) {
  if (!show) return null;

  useEffect(() => {
    const burst = () => {
      confetti({ particleCount: 200, spread: 150 });
      confetti({ particleCount: 150, spread: 180, scalar: 1.2 });
    };
    burst();
    const interval = setInterval(burst, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=\"fixed inset-0 bg-black/70 backdrop-blur-xl z-[99999] flex flex-col items-center justify-center text-white\">
      <motion.h1 initial={{scale:0.5, opacity:0}} animate={{scale:1, opacity:1}}
        transition={{duration:1.5}}
        className=\"text-5xl font-bold text-center mb-4\">
        Nabila said YES! 💍❤️
      </motion.h1>
      <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}
        transition={{duration:2}} className=\"text-xl max-w-lg text-center\">
        This moment is ours forever.  
        I love you, Nabila. 💖
      </motion.p>
    </div>
  );
}
