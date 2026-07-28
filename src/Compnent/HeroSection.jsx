import React from "react";
import hero_img from "../assets/hero_img.jpeg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#0F0F0F]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero_img})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-[#0F0F0F] to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-3xl ml-12 md:ml-20">
         <span
  className="
    inline-block
    max-w-full
    bg-orange-500
    text-black
    px-3 py-2
    text-[10px] sm:text-xs
    tracking-[2px]
    uppercase
    break-words
  "
>
  Sacred India · Heritage & Pilgrimage
</span>

          <h1 className="mt-10 text-white text-4xl md:text-8xl font-serif leading-none">
            Where the stone
          </h1>

          <h1 className="text-yellow-500 italic font-serif text-6xl md:text-8xl leading-none">
            still prays.
          </h1>

          <p className="mt-8 text-gray-300 text-lg max-w-xl leading-8">
            A living atlas of India's most sacred temples — their histories,
            their architecture, and the ancient pilgrim routes that bind them.
          </p>

          <button className="mt-12 flex items-center gap-5 text-white tracking-[4px] uppercase">
            <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition">
              ↓
            </div>
            Begin the Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;