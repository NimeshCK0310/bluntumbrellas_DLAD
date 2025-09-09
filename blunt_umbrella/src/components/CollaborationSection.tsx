"use client";

import React from "react";

// Component interfaces for TypeScript
interface SwiperProps {
  children: React.ReactNode;
  className?: string;
}

interface SwiperSlideProps {
  children: React.ReactNode;
}

// Mock Swiper components for demo purposes
const Swiper: React.FC<SwiperProps> = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>{children}</div>
);

const SwiperSlide: React.FC<SwiperSlideProps> = ({ children }) => <div>{children}</div>;

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

// CSS styles as a constant to avoid inline styles
const clipPathStyle = {
  clipPath: "polygon(100% 0%, 45% 0%, 65% 25%, 79% 30%, 74% 45%, 88% 55%, 93% 70%, 78% 98%, 0% 98%, 0% 100%, 100% 100%)"
};

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
    <div className="w-full overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[840px]">
        {/* Left side: Image with organic shape */}
        <div className="relative overflow-hidden order-2 lg:order-1">
          {/* Image with custom clip path */}
          <div 
            className="w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out"
            style={{
              backgroundImage: `url(${currentItem.image})`,
              ...clipPathStyle
            }}
          >
            {/* Gradient overlay */}
            <div className="w-full h-full bg-gradient-to-r from-black/10 via-transparent to-black/20"></div>
          </div>

          {/* Image navigation dots */}
          <div className="absolute bottom-6 left-6 flex gap-2 z-10">
            {collaborations.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to collaboration ${idx + 1}: ${collaborations[idx].title}`}
                title={`${collaborations[idx].title}`}
              />
            ))}
          </div>
        </div>

        {/* Right side: Content with dynamic background */}
        <div className={`flex items-center justify-center p-8 lg:p-16 transition-all duration-700 ease-in-out ${currentItem.backgroundColor} order-1 lg:order-2`}>
          <div className="max-w-lg">
            <div className={`transition-all duration-500 ${currentItem.textColor}`}>
              {/* Title */}
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">
                {currentItem.title}
              </h2>
              
              {/* Subtitle */}
              {currentItem.subtitle && (
                <h3 className="text-xl lg:text-2xl font-semibold mb-6 opacity-90">
                  {currentItem.subtitle}
                </h3>
              )}
              
              {/* Description */}
              <p className="text-base lg:text-lg mb-8 leading-relaxed opacity-95 font-light">
                {currentItem.text}
              </p>
              
              {/* CTA Button */}
              <div className="mb-8">
                <a
                  href={currentItem.buttonLink}
                  className={`inline-block px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    currentItem.textColor === 'text-white' 
                      ? 'bg-white text-black hover:bg-gray-100' 
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {currentItem.buttonText}
                </a>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center">
              <button
                onClick={prevSlide}
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  currentItem.textColor === 'text-white' 
                    ? 'text-white/70 hover:text-white hover:bg-white/10' 
                    : 'text-black/70 hover:text-black hover:bg-black/10'
                }`}
                aria-label="Previous collaboration"
                title="Previous collaboration"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Slide indicators */}
              <div className="flex gap-3">
                {collaborations.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide 
                        ? currentItem.textColor === 'text-white' ? 'bg-white scale-125' : 'bg-black scale-125'
                        : currentItem.textColor === 'text-white' ? 'bg-white/30 hover:bg-white/60' : 'bg-black/30 hover:bg-black/60'
                    }`}
                    aria-label={`Go to collaboration ${idx + 1}: ${collaborations[idx].title}`}
                    title={`${collaborations[idx].title}`}
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
                title="Next collaboration"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}