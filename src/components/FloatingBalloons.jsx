"use client";
import { motion } from 'framer-motion';
export default function FloatingBalloons(){ const balloons = ['🎈','🎈','🎈','💗','💛','💙']; return (<div className="pointer-events-none fixed inset-0 overflow-hidden z-[890]">{balloons.map((b,i)=> <motion.div key={i} initial={{y:'120%', opacity:0}} animate={{y:'-10%', opacity:[0,1,1,0]}} transition={{duration:10+Math.random()*6, repeat: Infinity, delay: Math.random()*3}} className="absolute text-5xl" style={{left:`${Math.random()*100}%`}}>{b}</motion.div>)}</div>); }
