"use client";
import { useEffect, useRef } from 'react';
export default function Calligraphy(){ 
  const ref = useRef();
  useEffect(()=>{
    const paths = ref.current?.querySelectorAll('path');
    if(!paths) return;
    paths.forEach(p=>{
      const len = p.getTotalLength();
      p.style.strokeDasharray = len;
      p.style.strokeDashoffset = len;
      p.getBoundingClientRect();
      p.style.transition = 'stroke-dashoffset 4s ease';
      p.style.strokeDashoffset = '0';
    });
  },[]);
  return (
    <div className="max-w-xl mx-auto p-4">
      <svg ref={ref} viewBox="0 0 600 120" className="w-full h-24">
        <path d="M10 80 Q150 10 290 80 T570 80" fill="none" stroke="#ffd1dc" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    </div>
  );
}
