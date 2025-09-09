"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const HERO_SLIDES = [
  {
    id: "woodland-camo",
    title: "Woodland Camo Classic",
    subtitle:
      "A universal print, camouflage has transcended its stealth roots to become a classic emblem of style.",
    image:
      "http://bluntumbrellas.com/cdn/shop/files/Woodland_Camo_Classic_Product_hero.png",
    color: "#2d3a2d",
    buttonText: "Shop Now",
  },
  {
    id: "clubhouse-red",
    title: "Clubhouse Red Classic",
    subtitle:
      "A rich burgundy with varsity flair. Bold, confident, and effortlessly cool.",
    image:
      "http://bluntumbrellas.com/cdn/shop/files/Clubhouse_Red_Classic_Hero_Image.png",
    color: "#8b1538",
    buttonText: "Explore",
  },
  {
    id: "fairway-green",
    title: "Fairway Green Classic",
    subtitle: "A classic forest green with country club credentials.",
    image:
      "http://bluntumbrellas.com/cdn/shop/files/Fairway_Green_Classic_Hero_Image_f4effd87-c221-45b4-96f7-c9f4405372a6.png",
    color: "#2d5016",
    buttonText: "Discover",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentSlideData = HERO_SLIDES[currentSlide];

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background */}
      <AnimatePresence mode="wait">
        <m.div
          key={currentSlide}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src={currentSlideData.image}
            alt={currentSlideData.title}
            fill
            className="object-contain object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </m.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatePresence mode="wait">
          <m.div
            key={currentSlide}
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <m.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {currentSlideData.title}
            </m.h1>

            <m.p
              className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              {currentSlideData.subtitle}
            </m.p>

            <m.div
              className="pt-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <m.button
                aria-label={currentSlideData.buttonText}
                className="group inline-flex items-center px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{ boxShadow: `0 10px 40px ${currentSlideData.color}40` }}
              >
                {currentSlideData.buttonText}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </m.button>
            </m.div>
          </m.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <m.div
          className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentSlide
                  ? "bg-black scale-125"
                  : "bg-gray-400 hover:bg-gray-600"
              )}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              }}
            />
          ))}
        </m.div>
      </div>

      {/* Scroll Indicator */}
      <m.button
        aria-label="Scroll down to explore content"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-black hover:text-gray-600 transition-colors duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        onClick={scrollToContent}
        whileHover={{ y: -2 }}
      >
        <span className="text-sm font-medium mb-2">Scroll to explore</span>
        <m.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6" />
        </m.div>
      </m.button>
    </section>
  );
}
