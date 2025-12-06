"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import HeartExplosion from "@/components/HeartExplosion";

export default function ProposalModal({ open, onClose }) {
  const [exploded, setExploded] = useState(false);

  if (!open) return null;

  function handleYes() {
    setExploded(true);
    setTimeout(() => { onClose(); }, 4000);
  }

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        className="relative z-50 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-2xl p-8 max-w-xl mx-4 shadow-2xl">
        <h2 className="text-2xl font-bold mb-4">Hey love 💖</h2>
        <p className="mb-4">I made this just for you… Will you spend forever with me?</p>
        <div className="flex gap-3 justify-end">
          <button className="px-4 py-2 rounded-md bg-gray-200" onClick={onClose}>Maybe later</button>
          <button className="px-4 py-2 rounded-md bg-pink-500 text-white" onClick={handleYes}>Yes, forever ❤️</button>
        </div>
      </motion.div>
      {exploded && <HeartExplosion />}
    </div>
  );
}