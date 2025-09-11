"use client";

import Image from "next/image";
import React from "react";

function ProductDescription() {
  return (
    <div className="relative z-20 bg-white">
      <div className="w-full py-10 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,1px)_1fr] gap-12">
          <div className="lg:sticky lg:top-24 self-start lg:pl-20">
            <h3 className="text-[36px] leading-[40px] font-semibold mb-6 lg:hidden">
              Built to last
            </h3>

            <div className="space-y-4 flex flex-col items-start text-left w-full ml-0 pl-0">
              <h3 className="hidden lg:block text-[72px] leading-[67px] font-semibold mb-12">
                Built to last
              </h3>

              <Image
                src="https://bluntumbrellas.com/cdn/shop/files/PDP_Intro__Woodland_Camp_3.jpg?v=1731013357&width=700"
                alt="Woodland Camo Classic"
                width={450}
                height={500}
                priority
                className="block w-[380px] h-[500px] mb-[30px] object-cover"
              />
            </div>
          </div>

          <div className="hidden lg:block w-px bg-gray-200"></div>

          <div className="lg:pr-20 flex flex-col space-y-10 text-left">
            <div className="leading-relaxed font-medium text-gray-800 border-gray-200 space-y-5 border-b pb-10 pl-8 text-xl">
              <p>
                When rain clouds threaten, and you have places to be, carry the
                Classic. Offering full coverage in a refined style, the Classic
                protects against wind, rain and shine, and tucks comfortably
                under your arm when there&apos;s a break in the weather.
              </p>
              <p>
                The Classic’s high-tensioned canopy provides full comfort and
                shelter, even during those all day downpours.
              </p>
              <p>
                Please note, due to the nature of the UV fabric on our Classic
                UV models, creasing does occur.
              </p>
              <p>
                We are in the process of updating our tip pocket colors. If you
                have any questions with your order and specific color, feel free
                to reach out to our customer service team.
              </p>
            </div>

            <ul className="space-y-6 max-w-[700px] mx-auto">
              <li className="p-6 flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-x-66">
                <div className="mb-4 lg:mb-0">
                  <h6 className="font-semibold mb-2">Use</h6>
                </div>

                <div className="flex flex-col lg:items-start space-y-4">
                  <p className="text-lg text-gray-600">
                    Ideal for one but can fit another small human (or pet)
                    under.
                  </p>
                  <Image
                    src="https://bluntumbrellas.com/cdn/shop/files/Classic-new.svg?v=1689581177"
                    alt="Classic Use"
                    width={450}
                    height={400}
                    className="mx-auto lg:mx-0"
                  />
                </div>
              </li>

              <li className="p-6 flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-x-56">
                <div className="mb-4 lg:mb-0">
                  <h6 className="font-semibold mb-2">Coverage</h6>
                </div>

                <div className="flex flex-col lg:items-start space-y-2">
                  <p className="text-lg text-gray-600 ">
                    47.2in <br />
                    Serious protection for one, just enough for two.
                  </p>
                </div>
              </li>

              <li className="p-6 flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-x-66 ">
                <div className="mb-4 lg:mb-0">
                  <h6 className="font-semibold mb-2">Specs</h6>
                </div>

                <div className="grid grid-cols-2 gap-y-2 gap-x-8 text-lg text-gray-600 lg:w-[70%]">
                  <span className="font-medium">Open Diameter</span>
                  <span>47.2 in</span>

                  <span className="font-medium">Closed Length</span>
                  <span>33.1 in</span>

                  <span className="font-medium">Weight</span>
                  <span>23.3 oz</span>
                </div>
              </li>
            </ul>

            <div className="flex items-center justify-center gap-8 bg-gray-100 p-4 rounded-md border-b border-gray-200 ">
              <div className="flex-shrink-0">
                <svg
                  width="34"
                  height="30"
                  viewBox="0 0 34 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.7165 20.5753H16.4616C14.7734 20.5753 13.3997 19.2016 13.3997 17.5134V3.411C13.3997 2.727 12.8427 2.16806 12.1568 2.16806H7.22294C6.72084 2.16806 6.31348 1.76069 6.31348 1.25859C6.31348 0.756487 6.72084 0.349121 7.22294 0.349121H12.1568C13.845 0.349121 15.2187 1.7228 15.2187 3.411V17.5153C15.2187 18.1993 15.7757 18.7583 16.4616 18.7583H32.7165C33.2186 18.7583 33.6259 19.1656 33.6259 19.6677C33.6259 20.1698 33.2186 20.5753 32.7165 20.5753Z"
                    fill="#484646"
                  />
                  <path
                    d="M9.74244 8.21054H5.24248C4.74037 8.21054 4.33301 7.80317 4.33301 7.30107C4.33301 6.79897 4.74037 6.3916 5.24248 6.3916H9.74244C10.2445 6.3916 10.6519 6.79897 10.6519 7.30107C10.6519 7.80317 10.2445 8.21054 9.74244 8.21054Z"
                    fill="#484646"
                  />
                </svg>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-700 leading-snug">
                  Free shipping over $180 in the U.S*. <br />
                  <a
                    href="/pages/shipping-and-returns-2"
                    className="underline underline-offset-2 text-gray-700"
                  >
                    See shipping for more info.
                  </a>
                </p>
              </div>
            </div>

            <div className=" pb-10 pt-[84px] max-w-[740px] mx-auto overflow-hidden">
              <div className="w-full flex justify-center">
                <Image
                  src="https://bluntumbrellas.com/cdn/shop/files/Classic_-_Open_-_IN.svg?v=1689655690"
                  alt="Classic Open Illustration"
                  width={600}
                  height={620}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex justify-center mb-[100px]">
              <button className="w-[400px] h-[55px] bg-black text-white  font-medium text-lg rounded-md hover:bg-gray-800 transition-colors">
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
