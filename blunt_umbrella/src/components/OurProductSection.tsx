"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const OurProductsSection = () => {
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
        <div className="flex justify-between items-center mb-12 px-8">
          <h4 className="text-4xl font-bold">Our Products</h4>
          <a
            href="/collections/core-range"
            className="px-3 py-2 border border-zinc-200 text-black hover:bg-black hover:text-white transition text-sm"
          >
            Shop Collection
          </a>
        </div>

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
              <div className="bg-[#f5f5f5] border border-gray-100 rounded-2xl shadow-sm flex flex-col justify-between h-[560px] w-full overflow-hidden group transition-all duration-500">
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

                <div className="relative flex justify-center items-center px-8 py-6 h-[400px] bg-[#f5f5f5] group">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="absolute max-h-[520px] object-contain transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    src={product.imgHover}
                    alt={`${product.name} Hover`}
                    className="absolute max-h-[520px] object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>

                <div className="flex justify-center pb-6 bg-[#f5f5f5]">
                  <button className="bg-white text-sm font-medium text-[#1a1a1a] w-[520px] h-[55px] rounded-lg transition-all duration-500 group-hover:bg-black group-hover:text-white">
                    Add to Bag
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurProductsSection;
