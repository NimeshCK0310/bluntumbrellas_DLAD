"use client";

import { useEffect, useState } from "react";

const items = [
  {
    name: "Canopy",
    img: "https://bluntumbrellas.com/cdn/shop/files/canopy_91c47e7d-ea22-4052-b159-224dbd3d12e8.svg?v=1689537903",
    text: "The canopy is simply attached to the frame with Velcro tabs, allowing it to slip off with ease once detached from the six BLUNT tips. This makes for easy removal when remedying wear and tear.",
  },
  {
    name: "Frame",
    img: "https://bluntumbrellas.com/cdn/shop/files/frame_ab519f0b-a0b4-41d7-a19f-94d7bd9c94d5.svg?v=1689735147",
    text: "The frame is the most complex part of the umbrella, with multiple components. Think of building blocks seamlessly fitting together in harmony, clicking into place to create a sturdy, reliable structure.",
  },
  {
    name: "Shaft",
    img: "https://bluntumbrellas.com/cdn/shop/files/shaft_07c3d6ca-0ef5-4db2-a933-b728d3def243.svg?v=1689735147",
    text: "The shaft is the central point of connection within the umbrella framework, acting as an anchor to bring all of the modular components together.",
  },
  {
    name: "Handle",
    img: "https://bluntumbrellas.com/cdn/shop/files/handle_6f2b1605-2239-4854-a6bb-79013e951bb7.svg?v=1689735147",
    text: "Like a bayonet fitting on a lightbulb, the handle can be removed and attached by pushing down and gently turning while keeping the umbrella shaft still.",
  },
];

export default function ModularUmbrella() {
  const [index, setIndex] = useState(0);

  // Automatic change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000); // changed back to 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleClick = (i: number) => {
    setIndex(i);
  };

  return (
    <section className="bg-[#183a5f] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-8xl font-bold mb-6">Made to be modular</h2>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Each BLUNT Umbrella is made up of four primary modular components – the canopy, frame,
            shaft and handle. This thoughtful and innovative design allows for easy repair and
            maintenance.
          </p>
        </div>

        {/* Main Content - Image with menu & text overlay */}
        <div className="relative flex justify-center">
          {/* Umbrella Image */}
          <div className="w-full max-w-5xl h-[600px] lg:h-[800px] relative">
            <img
              src={items[index].img}
              alt={items[index].name}
              className="w-full h-full object-contain"
            />

            {/* Menu + Text Overlay at bottom */}
            <div className="absolute bottom-8 left-0 right-0 flex flex-col lg:flex-row items-start justify-between px-8 lg:px-16 gap-12">
              {/* Left - Menu */}
              <div className="flex flex-col space-y-4 text-left">
                {items.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleClick(i)}
                    className={`text-2xl font-medium transition-all duration-200 ${
                      i === index
                        ? "text-white opacity-100"
                        : "text-gray-400 opacity-70 hover:text-gray-200 hover:opacity-90"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Right - Text */}
              <div className="max-w-md text-left pl-35">
                <p className="text-lg text-gray-300 leading-relaxed">{items[index].text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
