"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const OurProductsSection = () => {
  useEffect(() => {
    // Swiper auto init
  }, []);

  const products = [
    {
      name: "Metro",
      price: "$89.00",
      href: "/products/blunt-metro",
      colorClass: "bg-[#354156]",
      colorName: "Midnight Navy",
      img: "//bluntumbrellas.com/cdn/shop/files/ProductCard_Template_Metro_0024_Metro_side_Navy.png?v=1689228239&width=1200",
      imgHover:
        "//bluntumbrellas.com/cdn/shop/files/ProductCardHover_Template_Metro_0024_Metro_Top_navy_f4615b73-0926-4064-bb7b-771d530e9cd2.png?v=1689742336&width=1200",
    },
    {
      name: "Classic",
      price: "$99.00",
      href: "/products/blunt-classic",
      colorClass: "bg-[#354156]",
      colorName: "Midnight Navy",
      img: "//bluntumbrellas.com/cdn/shop/files/PRD969_1.png?v=1689228099&width=1200",
      imgHover:
        "//bluntumbrellas.com/cdn/shop/files/ProductCardHover_Template_Classic_0011_Classic_top_navy_87f80852-2aaf-460f-80ad-8050dbe19dfb.png?v=1689742336&width=1200",
    },
    {
      name: "Exec",
      price: "$129.00",
      href: "/products/blunt-exec",
      colorClass: "bg-[#354156]",
      colorName: "Midnight Navy",
      img: "//bluntumbrellas.com/cdn/shop/files/ProductCard_Template_Exec_0001_Exec_side_navy.png?v=1689228193&width=1200",
      imgHover:
        "//bluntumbrellas.com/cdn/shop/files/ProductCardHover_Template_Exec_0001_Exec_top_navy_5e894753-655f-490b-8f67-59d5ee42688e.png?v=1689742337&width=1200",
    },
  ];

  return (
    <section className="py-[80px] bg-white font-[Blunt,sans-serif]">
      <div className="w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 px-8">
          <h4 className="text-4xl font-bold">Our Products</h4>
          <a
            href="/collections/core-range"
            className="px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition text-lg"
          >
            Shop Collection
          </a>
        </div>

        {/* Products Carousel */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={3}
          navigation={false}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1280: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="w-full px-8"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} className="relative">
              <motion.div
                className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md flex flex-col justify-between h-[560px] w-full overflow-hidden transition-all duration-300"
                whileHover={{ scale: 1.01 }}
              >
                {/* Top Info */}
                <div className="flex justify-between items-start p-6 pt-5">
                  <div>
                    <h5 className="text-2xl font-semibold">{product.name}</h5>
                    <p className="text-lg">{product.price}</p>
                  </div>
                  <span
                    className={`w-4 h-4 rounded-full ${product.colorClass}`}
                    aria-label={product.colorName}
                  ></span>
                </div>

                {/* Image */}
                <div className="relative flex justify-center items-center px-8 py-6 h-[400px] group">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="absolute max-h-[480px] object-contain transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={product.imgHover}
                    alt={`${product.name} Hover`}
                    className="absolute max-h-[480px] object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>

                {/* Add to Bag (always visible like screenshot) */}
                <div className="border-t border-gray-200 p-5 bg-[#fafafa] text-center">
                  <button className="text-lg font-medium text-[#1a1a1a] hover:underline">
                    Add to Bag
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurProductsSection;
