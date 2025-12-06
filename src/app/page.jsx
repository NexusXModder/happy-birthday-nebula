"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import LoaderScreen from "@/components/screens/LoaderScreen";
import IntroScreen from "@/components/screens/IntroScreen";
import CakeScreen from "@/components/screens/CakeScreen";
import PhotosScreen from "@/components/screens/PhotosScreen";
import MessageScreen from "@/components/screens/MessageScreen";

import JourneyTimeline from "@/components/JourneyTimeline";
import PhotoSlideshow from "@/components/PhotoSlideshow";
import RosePetals from "@/components/RosePetals";

import ProposeButton from "@/components/ProposeButton";
import ProposalModal from "@/components/ProposalModal";
import FinalCelebration from "@/components/FinalCelebration";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  const [step, setStep] = useState(0);
  const [proposalOpen, setProposalOpen] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  const next = () => setStep((prev) => prev + 1);

  return (
    <>
      <MusicPlayer />

      <main className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black text-white">

        <RosePetals />

        <AnimatePresence mode="wait">
          {step === 0 && <LoaderScreen onFinish={next} />}
          {step === 1 && <IntroScreen onNext={next} />}
          {step === 2 && <CakeScreen onNext={next} />}
          {step === 3 && <PhotosScreen onNext={next} />}
          {step === 4 && <MessageScreen onNext={next} />}
          {step === 5 && <JourneyTimeline onNext={next} />}
          {step === 6 && <PhotoSlideshow onNext={next} />}
          {step === 7 && (
            <div className="flex flex-col items-center gap-4">
              <ProposeButton onClick={() => setProposalOpen(true)} />
            </div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3, transition: { delay: 1 } }}
          className="fixed bottom-4 right-4 text-sm text-white/40 pointer-events-none z-50 font-light"
        >
          @starry_araf_
        </motion.div>

        <ProposalModal
          open={proposalOpen}
          onClose={() => {
            setProposalOpen(false);
            setCelebrate(true);
          }}
        />

        <FinalCelebration show={celebrate} />
      </main>
    </>
  );
}
