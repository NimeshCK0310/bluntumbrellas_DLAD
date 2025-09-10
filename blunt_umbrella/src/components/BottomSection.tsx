// components/PdpHero.js
"use client";

import Image from "next/image";

export default function PdpHero() {
  return (
    <section className="relative w-full">
      <div className="rounded-t-[45px] overflow-hidden relative">
        {/* Background Image */}
        <div className="relative w-full h-[880px] md:h-[600px] lg:h-[700px]">
          <Image
            src="https://bluntumbrellas.com/cdn/shop/files/Blunt_HandleImage_web_2e9bd08b-bd95-455e-9dc1-2446d25e44a0.png?v=1718763518"
            alt="Embrace the rain."
            fill
            className="object-cover"
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute top-4 md:top-8 right-4 md:right-12 text-white pt-10 pr-20">
          <h4 className="text-xl md:text-3xl lg:text-4xl font-medium">
            Embrace the <br />rain.
          </h4>
        </div>
      </div>
    </section>
  );
}
