"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function FinalCelebration({ show }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-xl z-[99999] flex flex-col items-center justify-center text-white">
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-5xl font-bold text-center mb-4"
      >
        Nabila said YES! ❤️
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.5 }}
        className="text-2xl text-center"
      >
        This moment is forever ours.
      </motion.p>
    </div>
  );
}
