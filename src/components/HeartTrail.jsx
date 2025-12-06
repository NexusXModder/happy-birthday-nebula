"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
export default function HeartTrail(){ 
  const [hearts, setHearts] = useState([]);
  function add(e){
    const rect = document.body.getBoundingClientRect();
    setHearts(h=>[...h, {id:Date.now()+Math.random(), x: e.clientX, y: e.clientY}].slice(-30));
  }
  return (
    <div onClick={add} className="fixed inset-0 z-[940] pointer-events-auto">
      {hearts.map(h=> (
        <motion.div key={h.id} initial={{opacity:1, y:0}} animate={{opacity:0, y:-120}} transition={{duration:1.2}} style={{left:h.x, top:h.y}} className="absolute text-2xl">💗</motion.div>
      ))}
    </div>
  );
}
