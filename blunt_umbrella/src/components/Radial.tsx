"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import React, { useEffect, useRef } from "react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};


function useDelayedLoop(
  videoRef: React.RefObject<HTMLVideoElement | null>,
  delay = 3000
) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setTimeout(() => {
        video.play();
      }, delay);
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [videoRef, delay]);
}

export default function RadialTensioning() {

  const video1 = useRef<HTMLVideoElement | null>(null);
  const video2 = useRef<HTMLVideoElement | null>(null);
  const video3 = useRef<HTMLVideoElement | null>(null);
  const video4 = useRef<HTMLVideoElement | null>(null);

 
  useDelayedLoop(video1, 3000);
  useDelayedLoop(video2, 3000);
  useDelayedLoop(video3, 3000);
  useDelayedLoop(video4, 3000);

  return (
    <section className="bg-[#f5f5f5] py-20 px-6 lg:px-20">
    
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="grid lg:grid-cols-2 gap-8 mb-16"
      >
        <h3 className="text-4xl lg:text-6xl font-semibold">
          Radial Tensioning System
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          A system of individually engineered hardware components – frame, tip
          and canopy – working in harmony to create a high-performing,
          aerodynamic structure.
        </p>
      </motion.div>

   
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
     
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="relative rounded-2xl overflow-hidden shadow-lg lg:col-span-2"
        >
          <div className="aspect-video w-full">
            <video
              ref={video1}
              src="https://bluntumbrellas.com/cdn/shop/videos/c/vp/4c8d22d113994f598eeea73457ba9e4b/4c8d22d113994f598eeea73457ba9e4b.HD-1080p-4.8Mbps-16319553.mp4?v=0"
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

    
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="relative rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="aspect-video w-full">
            <video
              ref={video2}
              src="https://bluntumbrellas.com/cdn/shop/videos/c/vp/a9fa2f0b437c4dbdbb3245d57310698f/a9fa2f0b437c4dbdbb3245d57310698f.HD-1080p-7.2Mbps-16319666.mp4?v=0"
              autoPlay
              muted
              playsInline
              className="w-full h-[600px] object-cover"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 text-white">
            <h5 className="text-xl font-semibold mb-2">Frame</h5>
            <p className="text-sm lg:text-base">
              The BLUNT Umbrella frame features a unique strut mechanism that
              stresses the ribs, creating an effortless outward tension in the
              canopy as the umbrella is opened.
            </p>
          </div>
        </motion.div>

  
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="relative rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="aspect-video w-full">
            <video
              ref={video3}
              src="https://bluntumbrellas.com/cdn/shop/videos/c/vp/b9ff180b2d744c4fbf9e5521ee4a6d86/b9ff180b2d744c4fbf9e5521ee4a6d86.HD-1080p-7.2Mbps-16319038.mp4?v=0"
              autoPlay
              muted
              playsInline
              className="w-full h-[600px] object-cover"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 text-white">
            <h5 className="text-xl font-semibold mb-2">Canopy</h5>
            <p className="text-sm lg:text-base">
              The iconic and uniquely shaped canopy is the cumulative effect of
              our six patented BLUNT tips. The canopy’s tautness – especially at
              the edge – provides a rigid wing-like surface that withstands all
              wind conditions.
            </p>
          </div>
        </motion.div>

    
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="relative rounded-2xl overflow-hidden shadow-lg lg:col-span-2"
        >
          <div className="aspect-video w-full">
            <video
              ref={video4}
              src="https://bluntumbrellas.com/cdn/shop/videos/c/vp/c38c0b6aa21d4b4aab0d41f06bd88fa1/c38c0b6aa21d4b4aab0d41f06bd88fa1.HD-1080p-7.2Mbps-16319673.mp4?v=0"
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 text-white">
            <h5 className="text-xl font-semibold mb-2">Tip</h5>
            <p className="text-sm lg:text-base">
              BLUNT Umbrellas are safer and more robust thanks to patented tips
              which act like mini umbrellas at the edge of the canopy. This
              evenly distributes tension from the frame into the canopy edge,
              eliminating the need for sharp points.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
