"use client";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useState } from "react";

export default function ProposeButton({ onClick }) {
  const [popped, setPopped] = useState(false);

  function handleClick() {
    confetti({ particleCount: 120, spread: 160 });
    confetti({ particleCount: 60, spread: 40, gravity: 0.6 });
    setPopped(true);
    if (onClick) onClick();
  }

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className={
        "px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white font-semibold shadow-xl" +
        (popped ? " ring-4 ring-pink-300/40" : "")
      }
    >
      {popped ? "💖 Sent!" : "Open Surprise 💌"}
    </motion.button>
  );
}