"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface SlideshowBoxProps {
  images: string[];
  delay?: number;
}

function SlideshowBox({ images, delay = 0 }: SlideshowBoxProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -6, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)" }}
      className="relative w-full h-full rounded-[28px] md:rounded-[32px] overflow-hidden bg-forest/5 cursor-pointer shadow-lg transition-shadow duration-500"
    >
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05, zIndex: 10 }}
          animate={{ opacity: 1, scale: isHovered ? 1.03 : 1, zIndex: 10 }}
          exit={{ opacity: 1, zIndex: 0 }}
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" },
            scale: { duration: 1.5, ease: "easeOut" }
          }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[currentIndex]}
            alt="Zadokz Farm Stay"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

interface MasonryGalleryProps {
  images: string[];
}

export default function MasonryGallery({ images }: MasonryGalleryProps) {
  // Ensure we have enough images. If exactly 6, we can split them 2,2,2.
  // We'll just distribute them evenly.
  const leftImages = images.filter((_, i) => i % 3 === 0); // 0, 3
  const topRightImages = images.filter((_, i) => i % 3 === 1); // 1, 4
  const bottomRightImages = images.filter((_, i) => i % 3 === 2); // 2, 5

  return (
    <div className="w-full flex flex-col md:flex-row gap-4 md:gap-[16px] lg:gap-[20px] h-[70vh] md:h-[600px] lg:h-[700px]">
      {/* Left Column (approx 65%) */}
      <div className="w-full md:w-[65%] h-1/2 md:h-full relative">
        <SlideshowBox images={leftImages} delay={0} />
      </div>

      {/* Right Column (approx 35%) */}
      <div className="w-full md:w-[35%] h-1/2 md:h-full flex flex-col gap-4 md:gap-[16px] lg:gap-[20px]">
        <div className="w-full h-1/2 relative">
          <SlideshowBox images={topRightImages} delay={0.15} />
        </div>
        <div className="w-full h-1/2 relative">
          <SlideshowBox images={bottomRightImages} delay={0.3} />
        </div>
      </div>
    </div>
  );
}
