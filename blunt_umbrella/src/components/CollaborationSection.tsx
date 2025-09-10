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
    image: "https://bluntumbrellas.com/cdn/shop/files/Outdoor_and_Leisure_Club_B_WINDOW_DESKTOP_1.jpg?v=1748396350",
    backgroundColor: "bg-green-800",
    textColor: "text-white"
  },
  {
    title: "Introducing Bonnie Brown",
    subtitle: "Collaboration Artist",
    text: "Artist Bonnie Brown, the creative force behind Studio Bon, brings her signature bold colour and playful charm to our latest limited edition BLUNT Umbrella. It's a little bit cheeky, think '5+ a day' meets childhood nostalgia, like stealing lemons from a neighbour's tree or trusting an honesty box on a country road.",
    buttonText: "Shop Collection",
    buttonLink: "/collections/studio-bon",
    image: "https://bluntumbrellas.com/cdn/shop/files/Studio_Bon_B_Window_Desktop.jpg?v=1741777767",
    backgroundColor: "bg-yellow-400",
    textColor: "text-black"
  },
  {
    title: "UV Coastal Collection",
    subtitle: "Rain or shine",
    text: "Close your eyes and transport yourself to a sun-kissed beach. Our UV Coastal Collection comes in two new coastal-inspired colours: Spritz and Seagrass. Additionally, an effortlessly cool check pattern in shades of the sea, called Rockpool, is exclusively available on the Metro model.",
    buttonText: "Explore Collection",
    buttonLink: "/collections/uv-coastal-collection",
    image: "https://bluntumbrellas.com/cdn/shop/files/Cocoa_B_Window_Desktop.jpg?v=1747274001",
    backgroundColor: "bg-blue-600",
    textColor: "text-white"
  },
  {
    title: "Houndstooth Candy",
    subtitle: "Bold & Playful",
    text: "Candy takes the classic black-and-white contrast and dials up the energy, mixing punchy pink and orange for a playful yet polished edge.",
    buttonText: "Shop Now",
    buttonLink: "/products/candy-metro",
    image: "https://bluntumbrellas.com/cdn/shop/files/Candy_B_Window_Desktop.jpg?v=1747274002",
    backgroundColor: "bg-pink-500",
    textColor: "text-white"
  },
  {
    title: "Karen Walker",
    subtitle: "Filigree Collection",
    text: "Turn grey days golden with the BLUNT x Karen Walker Filigree umbrella, featuring her iconic jewellery inspired print. A whimsical, stylish essential for weathering adventures near and far.",
    buttonText: "Shop Now",
    buttonLink: "/products/karen-walker-filigree-metro",
    image: "https://bluntumbrellas.com/cdn/shop/files/B_Window_Karen_Walker_Filigree_Desktop_1.jpg?v=1744236827",
    backgroundColor: "bg-orange-400",
    textColor: "text-black"
  },
  {
    title: "Serpentine",
    subtitle: "Symbols of Fortune",
    text: "The striking black canopy features intricate snake and floral illustrations, symbols of transformation, renewal, and good fortune, inspired by Chinese folklore and nature.",
    buttonText: "Shop Collection",
    buttonLink: "/collections/serpentine",
    image: "https://bluntumbrellas.com/cdn/shop/files/B_Window_Serpentine_Desktop.jpg?v=1736215641",
    backgroundColor: "bg-gray-900",
    textColor: "text-white"
  },
  {
    title: "Lemon & Honey",
    subtitle: "Gingham Charm",
    text: "Featuring the beloved yellow gingham pattern, it's sure to brighten up any wardrobe and make sure you're setting trends wherever you go.",
    buttonText: "Shop Collection",
    buttonLink: "/collections/lemon-honey",
    image: "https://bluntumbrellas.com/cdn/shop/files/Lemon_Honey_Desktop.jpg?v=1713411894",
    backgroundColor: "bg-yellow-300",
    textColor: "text-black"
  },
  {
    title: "Forest & Bird",
    subtitle: "Artist Collaboration",
    text: "Renowned Kiwi artist Erin Forsyth lends her creative touch to this stunning design. The design features winged species including the tauhou silver eye, kahukura red admiral butterfly and pūriri moth.",
    buttonText: "Shop Now",
    buttonLink: "/products/forest-bird-metro-erin-forsyth",
    image: "https://bluntumbrellas.com/cdn/shop/files/Bwindow-_F_B_Forest_desktop.jpg?v=1710297699",
    backgroundColor: "bg-green-700",
    textColor: "text-white"
  }
];

export default function CollaborationSection() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % collaborations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + collaborations.length) % collaborations.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentItem = collaborations[currentSlide];

  return (
    <div className="w-full overflow-hidden relative">
      {/* Container with proper aspect ratio */}
      <div className="relative w-full h-[600px] lg:h-[700px] xl:h-[800px]">
        
        {/* Image Section - Left Side */}
        <div className="absolute inset-0 w-full lg:w-1/2">
          <div 
            className="w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out relative"
            style={{
              backgroundImage: `url(${currentItem.image})`,
            }}
          >
            {/* Curved SVG Mask Overlay */}
            <div className="absolute inset-0">
              <svg 
                className="absolute inset-0 w-full h-full" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none"
              >
                <defs>
                  <mask id="curve-mask">
                    <rect width="100" height="100" fill="white"/>
                    <path 
                      d="M 85 0 Q 75 20 80 40 Q 85 60 75 80 Q 70 90 65 100 L 100 100 L 100 0 Z" 
                      fill="black"
                    />
                  </mask>
                </defs>
                <rect 
                  width="100" 
                  height="100" 
                  fill={`url(#image-${currentSlide})`} 
                  mask="url(#curve-mask)"
                />
                <defs>
                  <pattern 
                    id={`image-${currentSlide}`} 
                    patternUnits="userSpaceOnUse" 
                    width="100" 
                    height="100"
                  >
                    <image 
                      href={currentItem.image} 
                      x="0" 
                      y="0" 
                      width="100" 
                      height="100" 
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </pattern>
                </defs>
              </svg>
            </div>

            {/* Alternative approach using clip-path for better browser support */}
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out lg:block hidden"
              style={{
                backgroundImage: `url(${currentItem.image})`,
                clipPath: "polygon(0% 0%, 85% 0%, 75% 20%, 80% 40%, 85% 60%, 75% 80%, 70% 90%, 65% 100%, 0% 100%)"
              }}
            />

            {/* Mobile version without clip-path */}
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out lg:hidden"
              style={{
                backgroundImage: `url(${currentItem.image})`,
              }}
            />

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/5"></div>
          </div>
        </div>

        {/* Text Section - Right Side */}
        <div className={`absolute inset-0 lg:left-1/2 transition-all duration-700 ease-in-out ${currentItem.backgroundColor}`}>
          {/* Curved white overlay for the organic separation */}
          <div className="absolute left-0 top-0 w-20 h-full hidden lg:block">
            <svg 
              className="absolute left-0 top-0 w-full h-full" 
              viewBox="0 0 20 100" 
              preserveAspectRatio="none"
            >
              <path 
                d="M 0 0 Q 10 20 5 40 Q 0 60 10 80 Q 15 90 20 100 L 20 0 Z" 
                fill={currentItem.backgroundColor.includes('green-800') ? '#166534' : 
                      currentItem.backgroundColor.includes('yellow-400') ? '#facc15' :
                      currentItem.backgroundColor.includes('blue-600') ? '#2563eb' :
                      currentItem.backgroundColor.includes('pink-500') ? '#ec4899' :
                      currentItem.backgroundColor.includes('orange-400') ? '#fb923c' :
                      currentItem.backgroundColor.includes('gray-900') ? '#111827' :
                      currentItem.backgroundColor.includes('yellow-300') ? '#fde047' :
                      currentItem.backgroundColor.includes('green-700') ? '#15803d' : '#166534'}
              />
            </svg>
          </div>

          {/* Content Container */}
          <div className="h-full flex items-center justify-center lg:justify-start p-8 lg:p-16 lg:pl-24">
            <div className="max-w-lg lg:max-w-xl">
              <div className={`transition-all duration-500 ${currentItem.textColor}`}>
                {/* Title */}
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
                  {currentItem.title}
                </h2>
                
                {/* Subtitle */}
                {currentItem.subtitle && (
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-light mb-6 lg:mb-8 opacity-90">
                    {currentItem.subtitle}
                  </h3>
                )}
                
                {/* Description */}
                <p className="text-base lg:text-lg xl:text-xl mb-8 lg:mb-12 leading-relaxed opacity-95 font-light max-w-md">
                  {currentItem.text}
                </p>
                
                {/* CTA Button */}
                <div className="mb-8 lg:mb-12">
                  <a
                    href={currentItem.buttonLink}
                    className={`inline-block px-8 py-4 lg:px-10 lg:py-5 rounded-full font-semibold text-base lg:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                      currentItem.textColor === 'text-white' 
                        ? 'bg-white text-black hover:bg-gray-100' 
                        : 'bg-black text-white hover:bg-gray-800'
                    }`}
                  >
                    {currentItem.buttonText}
                  </a>
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-between items-center max-w-md">
                  <button
                    onClick={prevSlide}
                    className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                      currentItem.textColor === 'text-white' 
                        ? 'text-white/70 hover:text-white hover:bg-white/10' 
                        : 'text-black/70 hover:text-black hover:bg-black/10'
                    }`}
                    aria-label="Previous collaboration"
                  >
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Slide indicators */}
                  <div className="flex gap-3">
                    {collaborations.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          idx === currentSlide 
                            ? currentItem.textColor === 'text-white' ? 'bg-white scale-110' : 'bg-black scale-110'
                            : currentItem.textColor === 'text-white' ? 'bg-white/40 hover:bg-white/70' : 'bg-black/40 hover:bg-black/70'
                        }`}
                        aria-label={`Go to collaboration ${idx + 1}: ${collaborations[idx].title}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextSlide}
                    className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                      currentItem.textColor === 'text-white' 
                        ? 'text-white/70 hover:text-white hover:bg-white/10' 
                        : 'text-black/70 hover:text-black hover:bg-black/10'
                    }`}
                    aria-label="Next collaboration"
                  >
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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