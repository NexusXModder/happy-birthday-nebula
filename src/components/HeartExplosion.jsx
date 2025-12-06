"use client";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useEffect } from "react";

export default function HeartExplosion() {
  useEffect(() => {
    confetti({ particleCount: 200, spread: 180, origin: { y: 0.6 } });
    confetti({ particleCount: 150, spread: 130, origin: { y: 0.3 } });
  }, []);

  const hearts = new Array(25).fill(0);

  return (
    <div className="pointer-events-none fixed inset-0 flex overflow-hidden z-[9999]">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "110%", opacity: 0 }}
          animate={{
            y: "-20%",
            opacity: [0, 1, 0],
            x: Math.random() * 200 - 100,
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 0.5,
          }}
          className="absolute text-4xl select-none"
          style={{ left: `${Math.random() * 100}%` }}
        >
          💖
        </motion.div>
      ))}
    </div>
  );
}
