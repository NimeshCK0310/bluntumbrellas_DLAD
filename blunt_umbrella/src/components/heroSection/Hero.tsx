"use client";

import { animated, useSpring } from "@react-spring/web";
import React, { useEffect, useState } from "react";

function HeroImage() {
  const [scrollY, setScrollY] = useState(0);

  const imageSpring = useSpring({
    transform: `translateY(${Math.min(scrollY * -0.2, 0)}px)`,
    config: { mass: 1, tension: 120, friction: 30 },
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const product = {
    image:
      "https://bluntumbrellas.com/cdn/shop/files/Woodland_Camo_Classic_Product_hero.png",
    title: "Woodland Camo Classic",
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-[#324621] via-[#495c32] to-[#697e4b]">
      {/* Hero content */}
      <div className="sticky top-0 flex flex-col items-center justify-center min-h-screen pt-4 z-10">
        <h1 className="text-white font-blunt font-[530] text-center mb-0
                       tracking-wide leading-[155px] pt-28 text-[170px]">
          Woodland Camo
        </h1>

        <animated.img
          src={product.image}
          alt={product.title}
          style={imageSpring}
          className="w-[1100px] sm:w-[1200px] md:w-[1300px] object-contain mx-auto -mt-18 pt-1 pr-0"
        />
      </div>

      {/* Spacer to allow scroll */}
      <div className="h-[50vh]"></div>
    </div>
  );
}

export default HeroImage;
