"use client";
import { useEffect } from 'react';
export default function useAudioPulse(audioRef){ 
  useEffect(()=>{
    if(!audioRef?.current) return;
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const src = ctx.createMediaElementSource(audioRef.current);
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 256;
    src.connect(analyser);
    analyser.connect(ctx.destination);
    const data = new Uint8Array(analyser.frequencyBinCount);
    let raf;
    const loop = ()=>{
      analyser.getByteFrequencyData(data);
      let sum=0; for(let i=0;i<data.length;i++) sum+=data[i];
      const avg = sum/data.length/255;
      document.documentElement.style.setProperty('--music-pulse', avg.toString());
      raf = requestAnimationFrame(loop);
    };
    loop();
    return ()=> { cancelAnimationFrame(raf); analyser.disconnect(); src.disconnect(); ctx.close(); };
  },[audioRef]);
}
