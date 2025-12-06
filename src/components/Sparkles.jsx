"use client";
export default function Sparkles(){ 
  const dots = new Array(18).fill(0);
  return (
    <div className="pointer-events-none fixed inset-0 z-[930] overflow-hidden">
      {dots.map((_,i)=> <div key={i} className="absolute sparkle" style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%` }} />)}
      <style>{` .sparkle{ width:8px;height:8px;background:radial-gradient(circle,#fff,#ffd1dc);border-radius:50%;opacity:0.9;animation: sparkleAnim 4s linear infinite;} @keyframes sparkleAnim{0%{transform:translateY(0) scale(0.6);opacity:0}10%{opacity:1}50%{transform:translateY(-20px) scale(1)}100%{opacity:0}} `}</style>
    </div>
  );
}
