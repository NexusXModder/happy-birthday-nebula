"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import LoaderScreen from "@/components/screens/LoaderScreen"
import IntroScreen from "@/components/screens/IntroScreen"
import CakeScreen from "@/components/screens/CakeScreen"
import PhotosScreen from "@/components/screens/PhotosScreen"
import MessageScreen from "@/components/screens/MessageScreen"\nimport FinalCelebration from "@/components/FinalCelebration";\nimport useAudioPulse from "@/components/useAudioPulse";\nimport HeartTrail from "@/components/HeartTrail";\nimport Calligraphy from "@/components/Calligraphy";\nimport Sparkles from "@/components/Sparkles";\nimport RingReveal from "@/components/RingReveal";\nimport JourneyTimeline from "@/components/JourneyTimeline";\nimport PhotoSlideshow from "@/components/PhotoSlideshow";\nimport RosePetals from "@/components/RosePetals";

// Added (1)
import ProposeButton from "@/components/ProposeButton"
import ProposalModal
import FinalCelebration from "@/components/FinalCelebration" from "@/components/ProposalModal"
import MusicPlayer from "@/components/MusicPlayer"

export default function HomePage() {
  const [currentScreen, setCurrentScreen] = useState(0)\n  const audioRef = useRef(null);
  const [celebrate, setCelebrate] = useState(false)

  // Added (2)
  const [proposalOpen, setProposalOpen] = useState(false)\n  useAudioPulse(audioRef);

  const screens = [
    <LoaderScreen key="loader" onDone={() => setCurrentScreen(1)} />,
    <IntroScreen key="intro" onNext={() => setCurrentScreen(2)} />,
    <CakeScreen key="cake" onNext={() => setCurrentScreen(3)} />,
    <PhotosScreen key="photos" onNext={() => setCurrentScreen(4)} />,
    <MessageScreen key="message" onNext={() => setCurrentScreen(5)} />,
  ]

  return (
    <>
      {/* Added (3) Music Player */}
      <MusicPlayer />

      {/* Added bg-animated (6) */}
      <main className="min-h-screen bg-animated overflow-hidden relative dream-filter">\n        <RosePetals />\n        <FloatingBalloonsPlaceholder />\n        <Sparkles />\n        <HeartTrail />\n

        <div className="relative z-10 flex min-h-screen items-center justify-center p-4 md:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
              exit={{ opacity: 0, transition: { duration: 0.8 } }}
              transition={{ duration: 0.8 }}
              className={`w-full ${currentScreen === 4 ? "max-w-7xl" : "max-w-3xl md:max-w-4xl"}`}
            >
              {screens[currentScreen]}\n              {currentScreen===5 && <div className="mt-8"><Calligraphy /><JourneyTimeline items={[{title:"First Meet", date:"2020-01-01", desc:"When we first met..."},{title:"First Date", date:"2020-03-12", desc:"Our first date..."}]} /></div>}\n              {currentScreen===4 && <PhotoSlideshow images={["/gifs/intro.gif","/gifs/gift.gif","/gifs/surprise.gif"]} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Added (4) Propose Button */}
        <div className="fixed bottom-20 right-5 z-50">
          <ProposeButton onClick={() => setProposalOpen(true)} />
        </div>

        {/* Watermark */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="fixed bottom-4 right-4 text-sm text-white/40 pointer-events-none z-50 font-light"
        >
          @starry_araf_
        </motion.div>

        {/* Added (5) Proposal Modal */}
        <ProposalModal open={proposalOpen} onClose={() => { setProposalOpen(false); setCelebrate(true); }} />

        <FinalCelebration show={celebrate} />
    </main>
    </>
  )
}