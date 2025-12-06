"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function RosePetals() {
  const [petals, setPetals] = useState([]);
  useEffect(() => {
    const arr = new Array(24).fill(0).map((_,i)=>({id:i,left: Math.random()*100, delay: Math.random()*5, spin: Math.random()*360}));
    setPetals(arr);
  },[]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-[920]">
      {petals.map(p=>(
        <motion.div key={p.id}
          initial={{ y: '-10%', opacity: 0, rotate: p.spin }}
          animate={{ y: ['-10%','120%'], opacity: [0,1,1,0], rotate: [p.spin, p.spin+360] }}
          transition={{ duration: 10 + Math.random()*6, repeat: Infinity, delay: p.delay, ease: 'linear' }}
          style={{ left: `${p.left}%` }}
          className="absolute text-2xl select-none">
          🌸
        </motion.div>
      ))}
    </div>
  );
}
