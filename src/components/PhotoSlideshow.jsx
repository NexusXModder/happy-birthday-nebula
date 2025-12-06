"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function PhotoSlideshow({ images=[], auto=true, interval=3500 }) {
  const [idx, setIdx] = useState(0);
  useEffect(()=>{
    if(!auto || images.length===0) return;
    const t = setInterval(()=> setIdx(i=> (i+1)%images.length), interval);
    return ()=> clearInterval(t);
  },[auto, images, interval]);

  if(images.length===0) return null;
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-3xl relative">
        {images.map((src,i)=> (
          <motion.img key={i} src={src} alt="mem"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={ i===idx ? { opacity:1, scale:1 } : { opacity:0, scale:0.95 } }
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-96 object-cover rounded-2xl shadow-lg"
            style={{ display: i===idx ? 'block' : 'none' }}
          />
        ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_,i)=> <button key={i} className={`w-2 h-2 rounded-full ${i===idx? 'bg-white':'bg-white/40'}`} onClick={()=>setIdx(i)} />)}
        </div>
      </div>
    </div>
  );
}
