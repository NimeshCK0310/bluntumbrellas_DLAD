"use client";

import React, { useState } from "react";

interface Variant {
  id: number;
  label: string;
  image: string;
  price: string;
  inStock: boolean;
}

interface VariantBarProps {
  title: string;
  variants: Variant[];
}

const VariantBar: React.FC<VariantBarProps> = ({ title, variants }) => {
  const [activeVariant, setActiveVariant] = useState<Variant>(variants[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleSelectVariant = (variant: Variant) => {
    setActiveVariant(variant);
    setShowDropdown(false);
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1000px] z-50 pb-5">
      <div className="bg-white rounded-xl shadow-[0_2px_20px_rgba(0,0,0,0.25)] h-18 flex items-center px-6 font-blunt font-medium text-gray-800 overflow-hidden ">
    
        <div className="flex-shrink-0 mr-8">
          <h6 className="text-lg sm:text-xl md:text-2xl">{title}</h6>
        </div>

       
        <div className="flex items-center overflow-x-auto flex-1 relative">
          {variants.slice(0, 1).map((variant) => (
            <div
              key={variant.id}
              className="flex items-center cursor-pointer mr-6 space-x-3"
              onClick={toggleDropdown}
            >
          
              <span
                className={`w-8 h-8 rounded-full border align-center justify-center items-center ${
                  activeVariant.id === variant.id
                    ? "border-gray-800"
                    : "border-gray-300"
                } bg-cover bg-center`}
                style={{ backgroundImage: `url(${variant.image})` }}
              />

            
              <div className="flex flex-col">
                <label className="text-sm sm:text-base md:text-lg font-semibold">
                  {variant.label}
                </label>

             
                <div className="flex items-center mt-1">
                  {/* <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 12 7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.5L5.29289 5.79289C5.68342 6.18342 6.31658 6.18342 6.70711 5.79289L11 1.5"
                      stroke="#262525"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span className="ml-1 text-xs text-gray-600">
                    +{variants.length - 1} Colors
                  </span> */}
                </div>
              </div>
            </div>
          ))}

        
          {showDropdown && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg py-2 z-50 w-60 max-h-64 overflow-y-auto">
              {variants.map((variant) => (
                <div
                  key={variant.id}
                  className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelectVariant(variant)}
                >
                  <span
                    className="w-10 h-10 rounded-full border border-gray-300 bg-cover bg-center"
                    style={{ backgroundImage: `url(${variant.image})` }}
                  />
                  <label className="ml-2 text-sm">{variant.label}</label>
                  <span className="ml-auto text-sm font-semibold">
                    {variant.price}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

       
        <div className="flex-shrink-0 ml-6">
          {activeVariant.inStock ? (
            <button className="bg-black text-white px-6 py-3 rounded-sm text-base sm:text-lg font-semibold hover:bg-gray-800 transition w-72 flex justify-between items-center">
              <span>Add to Bag</span>
              <span>{activeVariant.price}</span>
            </button>
          ) : (
            <button className="bg-gray-300 text-gray-600 px-6 py-3 rounded-xl text-base sm:text-lg font-semibold cursor-not-allowed w-72 flex justify-between items-center">
              <span>Out of Stock</span>
              <span>{activeVariant.price}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VariantBar;
