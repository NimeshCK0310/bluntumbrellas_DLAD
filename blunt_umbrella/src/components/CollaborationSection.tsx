"use client";

import React from "react";

interface CollaborationItem {
  title: string;
  subtitle?: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  backgroundColor: string;
  textColor: string;
}

const collaborations: CollaborationItem[] = [
  {
    title: "Outdoor & Leisure Club",
    subtitle: "Style that serves",
    text: "Step into the world of sporting and sideline sophistication with the BLUNT Outdoor & Leisure Club Collection. Inspired by the golden age of racquet sports and Country Club culture, these umbrellas channel the spirit of timeless sporting style.",
    buttonText: "Shop Collection",
    buttonLink: "/collections/outdoor-and-leisure-club",
    image:
      "https://bluntumbrellas.com/cdn/shop/files/Outdoor_and_Leisure_Club_B_WINDOW_DESKTOP_1.jpg?v=1748396350",
    backgroundColor: "bg-[#264236]",
    textColor: "text-white",
  },
  {
    title: "Introducing Bonnie Brown",
    subtitle: "Collaboration Artist",
    text: "Artist Bonnie Brown, the creative force behind Studio Bon, brings her signature bold colour and playful charm to our latest limited edition BLUNT Umbrella. It's a little bit cheeky, think '5+ a day' meets childhood nostalgia, like stealing lemons from a neighbour's tree or trusting an honesty box on a country road.",
    buttonText: "Shop Collection",
    buttonLink: "/collections/studio-bon",
    image:
      "https://bluntumbrellas.com/cdn/shop/files/Studio_Bon_B_Window_Desktop.jpg?v=1741777767",
    backgroundColor: "bg-[#30261f]",
    textColor: "text-black",
  },
  {
    title: "UV Coastal Collection",
    subtitle: "Rain or shine",
    text: "Close your eyes and transport yourself to a sun-kissed beach. Our UV Coastal Collection comes in two new coastal-inspired colours: Spritz and Seagrass. Additionally, an effortlessly cool check pattern in shades of the sea, called Rockpool, is exclusively available on the Metro model.",
    buttonText: "Explore Collection",
    buttonLink: "/collections/uv-coastal-collection",
    image:
      "https://bluntumbrellas.com/cdn/shop/files/Cocoa_B_Window_Desktop.jpg?v=1747274001",
    backgroundColor: "bg-[#e1a3b6]",
    textColor: "text-white",
  },
  {
    title: "Houndstooth Candy",
    subtitle: "Bold & Playful",
    text: "Candy takes the classic black-and-white contrast and dials up the energy, mixing punchy pink and orange for a playful yet polished edge.",
    buttonText: "Shop Now",
    buttonLink: "/products/candy-metro",
    image:
      "https://bluntumbrellas.com/cdn/shop/files/Candy_B_Window_Desktop.jpg?v=1747274002",
    backgroundColor: "bg-[#b7a98e]",
    textColor: "text-white",
  },
  {
    title: "Karen Walker",
    subtitle: "Filigree Collection",
    text: "Turn grey days golden with the BLUNT x Karen Walker Filigree umbrella, featuring her iconic jewellery inspired print. A whimsical, stylish essential for weathering adventures near and far.",
    buttonText: "Shop Now",
    buttonLink: "/products/karen-walker-filigree-metro",
    image:
      "https://bluntumbrellas.com/cdn/shop/files/B_Window_Karen_Walker_Filigree_Desktop_1.jpg?v=1744236827",
    backgroundColor: "bg-[#b3ccea]",
    textColor: "text-black",
  },
  {
    title: "Serpentine",
    subtitle: "Symbols of Fortune",
    text: "The striking black canopy features intricate snake and floral illustrations, symbols of transformation, renewal, and good fortune, inspired by Chinese folklore and nature.",
    buttonText: "Shop Collection",
    buttonLink: "/collections/serpentine",
    image:
      "https://bluntumbrellas.com/cdn/shop/files/B_Window_Serpentine_Desktop.jpg?v=1736215641",
    backgroundColor: "bg-[#770510]",
    textColor: "text-white",
  },
  {
    title: "Lemon & Honey",
    subtitle: "Gingham Charm",
    text: "Featuring the beloved yellow gingham pattern, it's sure to brighten up any wardrobe and make sure you're setting trends wherever you go.",
    buttonText: "Shop Collection",
    buttonLink: "/collections/lemon-honey",
    image:
      "https://bluntumbrellas.com/cdn/shop/files/Lemon_Honey_Desktop.jpg?v=1713411894",
    backgroundColor: "bg-[#906a4b]",
    textColor: "text-black",
  },
  {
    title: "Forest & Bird",
    subtitle: "Artist Collaboration",
    text: "Renowned Kiwi artist Erin Forsyth lends her creative touch to this stunning design. The design features winged species including the tauhou silver eye, kahukura red admiral butterfly and pūriri moth.",
    buttonText: "Shop Now",
    buttonLink: "/products/forest-bird-metro-erin-forsyth",
    image:
      "https://bluntumbrellas.com/cdn/shop/files/Bwindow-_F_B_Forest_desktop.jpg?v=1710297699",
    backgroundColor: "bg-[#475538]",
    textColor: "text-white",
  },
];

export default function CollaborationSection() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % collaborations.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + collaborations.length) % collaborations.length
    );
  const goToSlide = (index: number) => setCurrentSlide(index);

  const currentItem = collaborations[currentSlide];

  const bgColorMap: Record<string, string> = {
    "bg-[#264236]": "#264236",
    "bg-[#30261f]": "#30261f",
    "bg-[#e1a3b6]": "#e1a3b6",
    "bg-[#b7a98e]": "#b7a98e",
    "bg-[#b3ccea]": "#b3ccea",
    "bg-[#770510]": "#770510",
    "bg-[#906a4b]": "#906a4b",
    "bg-[#475538]": "#475538",
};
  const frameFill = bgColorMap[currentItem.backgroundColor] || "";

  return (
    <div className="w-full overflow-hidden relative">
      <div className="relative w-full h-[600px] lg:h-[700px] xl:h-[800px]">
        {/* Left Side - Image */}
        <div className="absolute inset-0 w-full lg:w-1/2">
          <div
            className="w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out relative"
            style={{ backgroundImage: `url(${currentItem.image})` }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/5"></div>
            {/* Frame SVG */}
            <svg
              viewBox="0 0 2013 2280"
              className="absolute inset-0 w-full h-[620px] lg:h-[720px] xl:h-[820px] z-10"
              preserveAspectRatio="none"
            >
              <path
                fill={frameFill}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2013 0H906.198C1306.83 0 1598.76 243.355 1598.76 577.543C1598.76 678.568 1569.8 772.262 1502.05 890.453C1487.57 915.665 1479.52 944.989 1479.52 972.346C1479.52 1010.97 1499.9 1046.55 1538.7 1075.52C1779.86 1255.04 1873 1399.16 1873 1599.06C1873 1989.04 1573.91 2234 1097.66 2234H0V2280H2013V0Z"
              />
            </svg>
          </div>
        </div>

        {/* Right Side - Text */}
        <div
          className={`absolute inset-0 lg:left-1/2 transition-all duration-700 ease-in-out ${currentItem.backgroundColor}`}
        >
          <div className="h-full flex items-center justify-center lg:justify-start p-8 lg:p-16 lg:pl-24">
            <div className="max-w-lg lg:max-w-xl">
              <div
                className={`transition-all duration-500 ${currentItem.textColor}`}
              >
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
                  {currentItem.title}
                </h2>
                {currentItem.subtitle && (
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-light mb-6 lg:mb-8 opacity-90">
                    {currentItem.subtitle}
                  </h3>
                )}
                <p className="text-base lg:text-lg xl:text-xl mb-8 lg:mb-12 leading-relaxed opacity-95 font-light max-w-md">
                  {currentItem.text}
                </p>
                <div className="mb-8 lg:mb-12">
                  <a
                    href={currentItem.buttonLink}
                    className={`inline-block px-8 py-4 lg:px-10 lg:py-5 rounded-full font-semibold text-base lg:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                      currentItem.textColor === "text-white"
                        ? "bg-white text-black hover:bg-gray-100"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    {currentItem.buttonText}
                  </a>
                </div>
                <div className="flex justify-between items-center max-w-md">
                  <button
                    onClick={prevSlide}
                    className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                      currentItem.textColor === "text-white"
                        ? "text-white/70 hover:text-white hover:bg-white/10"
                        : "text-black/70 hover:text-black hover:bg-black/10"
                    }`}
                    aria-label="Previous collaboration"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <div className="flex gap-3">
                    {collaborations.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          idx === currentSlide
                            ? currentItem.textColor === "text-white"
                              ? "bg-white scale-110"
                              : "bg-black scale-110"
                            : currentItem.textColor === "text-white"
                            ? "bg-white/40 hover:bg-white/70"
                            : "bg-black/40 hover:bg-black/70"
                        }`}
                        aria-label={`Go to collaboration ${idx + 1}: ${
                          collaborations[idx].title
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextSlide}
                    className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                      currentItem.textColor === "text-white"
                        ? "text-white/70 hover:text-white hover:bg-white/10"
                        : "text-black/70 hover:text-black hover:bg-black/10"
                    }`}
                    aria-label="Next collaboration"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}