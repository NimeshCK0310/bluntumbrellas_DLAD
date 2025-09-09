import Image from "next/image";
import React from "react";

function ProductDescription() {
  return (
    <div className="bg-[#f5f5f5] z-10">
      <div className="mx-[20px] pt-[30px] pb-[20px]">
        {/* Heading */}
        <h3 className="lg:text-[64px] lg:leading-[67px] font-semibold mb-[70px] text-5xl">
          Built to last
        </h3>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          {/* Left side - Image */}
          <div className="flex-1 flex justify-start pt-[40px]">
            <Image
              src="/images/PDP_Intro__Woodland_Camp_3.webp"
              alt="Sustainability"
              width={300}
              height={100}
              className="rounded-2xl object-cover"
              priority
            />
          </div>

          {/* Right side - Scrollable Text (Scrollbar hidden) */}
          <div className="flex-[1.4] max-w-[600px] h-[700px] overflow-y-auto pr-20 text-left self-start scrollbar-hide">
            <p className="text-base leading-[26px] font-normal mb-4">
              When rain clouds threaten, and you have places to be, carry the
              Classic. Offering full coverage in a refined style, the Classic
              protects against wind, rain and shine, and tucks comfortably under
              your arm when there&apos;s a break in the weather.
            </p>
            <p className="text-base leading-[26px] font-normal mb-4">
              The Classic&apos;s high-tensioned canopy provides full comfort and
              shelter, even during those all day downpours.
            </p>
            <p className="text-base leading-[26px] font-normal mb-4">
              Please note, due to the nature of the UV fabric on our Classic UV
              models, creasing does occur.
            </p>
            <p className="text-base leading-[26px] font-normal mb-8">
              We are in the process of updating our tip pocket colors. If you
              have any questions with your order and specific color, feel free
              to reach out to our customer service team.
            </p>

            {/* --- Use Section --- */}
            <div className="mb-10">
              <h2 className="text-base font-semibold mb-2">Use</h2>
              <p className="text-sm text-gray-600 mb-4">
                Ideal for one but can fit another small human (or pet) under.
              </p>
              <div className="flex gap-6">
                <Image
                  src="/images/Classic-new.svg"
                  alt="Umbrella open"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* --- Coverage Section --- */}
            <div className="mb-10">
              <h2 className="text-base font-semibold mb-2">Coverage</h2>
              <p className="text-sm text-gray-600">
                47.2in <br /> Serious protection for one, just enough for two.
              </p>
            </div>

            {/* --- Specs Section --- */}
            <div className="mb-10">
              <h2 className="text-base font-semibold mb-2">Specs</h2>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  <span className="font-medium">Open Diameter:</span> 47.2 in
                </li>
                <li>
                  <span className="font-medium">Closed Length:</span> 33.1 in
                </li>
                <li>
                  <span className="font-medium">Weight:</span> 23.3 oz
                </li>
              </ul>
            </div>

            {/* --- Shipping Info --- */}
            <div className="bg-gray-50 border rounded-lg p-4 flex items-center gap-3 mb-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 7h18M3 12h18M3 17h18"
                />
              </svg>
              <p className="text-sm text-gray-700">
                Free shipping over $180 in the U.S*.{" "}
                <a href="#" className="underline">
                  See shipping for more info.
                </a>
              </p>
            </div>

            {/* --- Illustration Section --- */}
            <div className="text-center mb-12">
              <p className="text-sm text-gray-600 mb-2">47.2in</p>
              <Image
                src="/images/Classic_-_Open_-_IN.svg"
                alt="Umbrella with person illustration"
                width={300}
                height={300}
                className="mx-auto"
              />
            </div>

            {/* --- Compare Button --- */}
            <div className="text-center">
              <button className="bg-black text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition">
                Compare with other sizes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
