"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Howl } from "howler";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    const isMutedPref = typeof window !== 'undefined' && sessionStorage.getItem("audioMuted") === "true";

    // Initialize Howler
    const sound = new Howl({
      src: ['/audio/bg-audio.mp3'],
      loop: true,
      volume: 0.4,
      preload: true,
      html5: true, // Forces HTML5 Audio, bypassing Web Audio API limits on large files
      onloaderror: (id, err) => console.error("Howler load error:", err),
      onplayerror: (id, err) => {
        console.error("Howler play error:", err);
        sound.once('unlock', () => {
          sound.play();
        });
      }
    });
    
    soundRef.current = sound;

    const handleEnterSite = () => {
      setShowToggle(true);
      if (!isMutedPref) {
        sound.play();
        setIsPlaying(true);
      }
    };

    if (sessionStorage.getItem("introSeen") === "true") {
      setShowToggle(true);
      if (!isMutedPref) {
        sound.play();
        setIsPlaying(true);
      }
    } else {
      window.addEventListener("enterSite", handleEnterSite);
    }

    // Backup unlocker just in case Howler's native unlocker misses the custom wrapper
    const unlockHowler = () => {
      if (!isMutedPref && !sound.playing()) {
        sound.play();
        setIsPlaying(true);
      }
      document.removeEventListener('touchstart', unlockHowler);
      document.removeEventListener('click', unlockHowler);
    };
    
    document.addEventListener('touchstart', unlockHowler, { passive: true });
    document.addEventListener('click', unlockHowler, { passive: true });

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (sound.playing()) {
          sound.pause();
          (sound as any)._wasPlaying = true;
        }
      } else {
        if ((sound as any)._wasPlaying) {
          sound.play();
          (sound as any)._wasPlaying = false;
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("enterSite", handleEnterSite);
      document.removeEventListener('touchstart', unlockHowler);
      document.removeEventListener('click', unlockHowler);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      sound.unload();
    };
  }, []);

  const toggleAudio = () => {
    if (!soundRef.current) return;
    
    if (isPlaying) {
      soundRef.current.pause();
      setIsPlaying(false);
      sessionStorage.setItem("audioMuted", "true");
    } else {
      soundRef.current.play();
      setIsPlaying(true);
      sessionStorage.setItem("audioMuted", "false");
    }
  };

  return (
    <AnimatePresence>
      {showToggle && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="fixed bottom-24 right-6 z-[100] flex items-center space-x-3"
        >
          <motion.button
            onClick={toggleAudio}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-cream/90 backdrop-blur-md flex items-center justify-center text-charcoal shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:bg-[var(--forest)] hover:text-cream transition-colors focus:outline-none border border-charcoal/10 group"
            aria-label={isPlaying ? "Mute background music" : "Play background music"}
          >
            {isPlaying ? (
              <Volume2 size={20} strokeWidth={1.5} className="group-hover:animate-pulse" />
            ) : (
              <VolumeX size={20} strokeWidth={1.5} />
            )}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
