"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    audio.volume = 0.4;

    // Show the notification after a short delay
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 1500);

    const handleTimeUpdate = () => {
      if (audio.duration && audio.currentTime >= audio.duration - 0.2) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      }
    };
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      clearTimeout(timer);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const enableAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
    setShowNotification(false);
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(error => {
        console.error("Audio playback failed:", error);
      });
      setIsPlaying(true);
    }
    setShowNotification(false);
  };

  return (
    <>
      {/* Notification Toast */}
      <AnimatePresence>
        {showNotification && !isPlaying && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed bottom-24 right-6 z-[100] bg-charcoal/95 backdrop-blur-md text-cream p-4 rounded-2xl shadow-2xl border border-white/10 flex flex-col gap-3 w-72"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2 text-[var(--forest)]">
                <Music size={18} />
                <h4 className="font-medium text-sm text-cream">Immersive Experience</h4>
              </div>
              <button 
                onClick={() => setShowNotification(false)} 
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Dismiss"
              >
                <X size={16} />
              </button>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              For the best experience, we recommend exploring our farm stay with background sound.
            </p>
            <div className="flex gap-2 mt-2">
              <button 
                onClick={enableAudio}
                className="flex-1 bg-[var(--forest)] hover:bg-opacity-80 text-cream text-xs font-medium py-2 rounded-lg transition-colors"
              >
                Enable Sound
              </button>
              <button 
                onClick={() => setShowNotification(false)}
                className="flex-1 bg-white/10 hover:bg-white/20 text-cream text-xs font-medium py-2 rounded-lg transition-colors"
              >
                Stay Silent
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 z-[100] flex items-center space-x-3">
        <audio 
          ref={audioRef} 
          src="/audio/bg-audio.mpeg" 
          loop 
          preload="auto"
        />
        
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
      </div>
    </>
  );
}
