"use client";

import { animated, useSpring } from "@react-spring/web";
import React, { useEffect, useState } from "react";

function HeroImage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const product = {
    image:
      "https://bluntumbrellas.com/cdn/shop/files/Woodland_Camo_Classic_Product_hero.png",
    title: "Woodland Camo Classic",
  };

 
  const imageSpring = useSpring({
    transform: `translateY(${Math.min(scrollY * -0.2, 0)}px)`,
    config: { mass: 1, tension: 80, friction: 20 }, 
  });

  
  const textSpring = useSpring({
    opacity: scrollY < 50 ? 1 : Math.max(1 - (scrollY - 50) / 150, 0),
    config: { mass: 1, tension: 120, friction: 28 }, 
  });

  return (
    <div className="relative w-full bg-gradient-to-b from-[#324621] via-[#495c32] to-[#6b7c52]">
     
      <div className="sticky top-0 flex flex-col items-center justify-center h-[30vh] z-10 pt-158">
        <div className="main-product__heading text-center pt-[90px]">
          <span className="block text-white tracking-widest leading-[140px] text-[180px] sm:text-[140px] md:text-[130px] lg:text-[170px] font-blunt">
            Woodland Camo
          </span>
        </div>

        <animated.img
          src={product.image}
          alt={product.title}
          style={imageSpring}
          className="w-[1200px] sm:w-[1300px] md:w-[1400px] object-contain mx-auto -mt-16"
        />
      </div>

      <div className="relative w-full mt-1 flex items-center">
     
        <animated.div
          className="flex flex-col justify-center absolute left-0 pl-8 pr-25 pb-80 z-20"
          style={textSpring}
        >
          <p className="text-white font-normal text-lg sm:text-lg md:text-lg leading-relaxed mb-4 max-w-md pr-18 tracking-wide">
            A universal print, camouflage has transcended its stealth roots to
            become a classic emblem of style. The iconic blend of greens and
            blacks seamlessly integrates into everyday fashion.
          </p>
          <span className="text-white font-semibold text-xl sm:text-xl md:text-xl tracking-wider">
            $114.00
          </span>
        </animated.div>

       
        <animated.div
          style={textSpring}
          className="flex flex-col justify-center items-start absolute right-0 pr-4 top-1/2 transform -translate-y-1/2 z-20 text-left pb-70"
        >
          <div className="flex items-center gap-2 mb-2 pl-17">
            <svg
              width="26"
              height="32"
              viewBox="0 0 26 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.4603 13.8639C21.4402 15.1254 20.1805 17.3072 20.0987 19.688C20.0312 21.6406 17.94 22.8487 16.2148 21.9302C14.113 20.8126 11.5918 20.8126 9.48998 21.9302C7.76479 22.8487 5.6736 21.6406 5.60608 19.688C5.52435 17.3089 4.26288 15.1254 2.24454 13.8639C0.586863 12.8281 0.586863 10.4153 2.24454 9.37947C4.26466 8.118 5.52435 5.9362 5.60608 3.5554C5.6736 1.60279 7.76479 0.394627 9.48998 1.31319C11.5918 2.43074 14.113 2.43074 16.2148 1.31319C17.94 0.394627 20.0312 1.60279 20.0987 3.5554C20.1805 5.93442 21.4419 8.118 23.4603 9.37947C25.118 10.4153 25.118 12.8281 23.4603 13.8639Z"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M24.7014 28.001H1"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3.60511 31.0268L1.29716 28.7188C0.900948 28.3226 0.900948 27.6812 1.29716 27.285L3.60511 24.9771"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M22.0965 31.0268L24.4044 28.7188C24.8007 28.3226 24.8007 27.6812 24.4044 27.285L22.0965 24.9771"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>

            <span className="text-white font-semibold text-lg ">47.2 in</span>
          </div>
          <p className="text-white font-normal text-sm sm:text-sm md:text-sm leading-relaxed mb-4 max-w-md pr-8 pl-17 tracking-wide text-justify">
            This iconic, full-length stick umbrella can withstand all elements,
            day in, day out. Engineered with every element considered, the
            Classic is designed to endure and be handed down through
            generations.
          </p>

          <div className="flex gap-4 max-w-[400px] pl-17">
            <a
              href="#"
              className="flex-1 h-[48px] w-[420px] flex items-center justify-center rounded font-blunt font-medium text-white text-sm bg-white/20 hover:bg-gray-200 hover:text-black transition-all duration-500"
            >
              Size Guide
            </a>
            <a
              href="#"
              className="flex-1 h-[48px] w-[420px] flex items-center justify-center gap-2 rounded font-blunt font-medium text-white text-sm bg-white/20 hover:bg-gray-200 hover:text-black transition-all duration-500"
            >
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5625"
                  y="3.52686"
                  width="8.375"
                  height="6.5"
                  rx="0.5"
                  fill="currentColor"
                  stroke="currentColor"
                ></rect>
                <rect
                  x="3.0625"
                  y="1.02686"
                  width="8.375"
                  height="6.5"
                  rx="0.5"
                  stroke="currentColor"
                ></rect>
              </svg>
              View Gallery
            </a>
          </div>
        </animated.div>
      </div>

     
      <div className="h-[30vh]"></div>
    </div>
  );
}

export default HeroImage;
