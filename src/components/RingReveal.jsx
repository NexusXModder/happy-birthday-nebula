"use client";
import { motion } from 'framer-motion';
export default function RingReveal(){ 
  return (
    <div className="flex items-center justify-center">
      <motion.div initial={{ scale: 0, rotate: -45 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 1.2 }} className="p-6 rounded-full bg-white/5">
        <div className="text-6xl">💍</div>
        <div className="text-center mt-3 font-semibold">Forever Begins Now</div>
      </motion.div>
    </div>
  );
}
