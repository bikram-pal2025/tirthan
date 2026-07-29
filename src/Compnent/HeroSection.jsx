import React from "react";
import hero_img from "../assets/hero_img.jpeg";
import { assets, pilgrimageCategories } from "../assets/assets";

const HeroSection = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col min-h-screen  overflow-hidden pb-10 bg-[#0F0F0F]">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero_img})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="absolute bottom-0 h-60 w-full bg-gradient-to-t from-[#0D0B0B] to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative  z-10 flex min-h-screen justify-between items-center">
          <div className="mx-auto  w-full max-w-7xl px-6 md:px-12 lg:px-20">
            <span className="inline-block w-[100%] md:w-fit rounded bg-orange-500 px-4 py-2 text-[11px] uppercase tracking-[2px] text-black">
              Sacred India · Heritage & Pilgrimage
            </span>

            <h1 className="mt-8 font-serif text-5xl leading-none text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Where the stone
            </h1>

            <h1 className="font-serif text-5xl italic leading-none text-yellow-500 sm:text-6xl md:text-7xl lg:text-8xl">
              still prays.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              A living atlas of India's most sacred temples, their history,
              architecture, pilgrimage traditions, and the timeless journeys
              that connect millions of devotees.
            </p>

            <button className="group mt-12 flex items-center gap-5 uppercase tracking-[3px] text-white">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
                ↓
              </div>

              <span>Begin the Journey</span>
            </button>
          </div>

          {/* text animation */}
            <div className="overflow-hidden absolute bottom-0 ">

        <hr className="border-gray-500  mb-2 md:mb-5" />
        <div className="marquee-track gap-10 ">

          {[...pilgrimageCategories, ...pilgrimageCategories].map(
            (item, index) => (
              <div className=" flex justify-between items-center gap-8 ">
        
                <img className="h-5" src={assets.star} alt="" />
                <span
                  key={index}
                  className="inline-block text-white text-xl  md:text-3xl px-4 py-2 uppercase tracking-[2px] whitespace-nowrap mx-4 rounded"
                >
                  
                  {item.name}
                </span>
              </div>
            ),
          )}
        </div>
        <hr className="border-gray-500 mt-2 md:mt-5" />
      </div>
        </div>

      </section>

      {/* Marquee */}

    


    </>
  );
};

export default HeroSection;
