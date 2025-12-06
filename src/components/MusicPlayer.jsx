"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [play, setPlay] = useState(false);

  function toggleMusic() {
    if (!play) { audioRef.current.play(); setPlay(true); }
    else { audioRef.current.pause(); setPlay(false); }
  }

  return (
    <>
      <audio ref={audioRef} src="/music/love-theme.mp3" loop />
      <motion.button
        onClick={toggleMusic}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed top-5 right-5 z-[200] p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg"
      >
        {play ? <Volume2 size={22} /> : <VolumeX size={22} />}
      </motion.button>
    </>
  );
}