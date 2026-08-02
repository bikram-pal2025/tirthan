import React from "react";
import { pilgrimageCircuits } from "../assets/assets";

const Cricuites = () => {
  return (
    <>
      <div id="cricuites" className="min-h-screen bg-[#171714] pt-15 lg:pt-30">
        <div className="w-[90%] mx-auto">
          {/* Top Section */}
          <div>
            <p className="text-orange-400 text-xs uppercase tracking-[6px]">
              Pilgrim Circuits
            </p>

            <h2 className="mt-2 w-full md:w-[40%] text-white text-3xl md:text-4xl lg:text-5xl">
              Sacred routes that stitch a subcontinent.
            </h2>
          </div>

          {/* Cards */}
          {pilgrimageCircuits.map((data) => (
        
            <div key={data.id}>
              <hr className="mt-5 border-0 border-t border-white/10 " />

              <div className="py-8 group cursor-pointer flex flex-col lg:flex-row items-center justify-between gap-10 transition-all duration-300 hover:bg-black/10  px-3">
                {/* Number */}
                <div className="w-full lg:w-[8%]">
                  <p className="text-4xl text-orange-400/60 font-light">
                    {data.number}
                  </p>
                </div>

                {/* Title Section */}
                <div className="w-full lg:w-[28%]">
                  <h3 className="text-3xl font-light text-white">
                    {data.title}
                  </h3>

                  <p className="mt-2 text-lg italic text-yellow-400">
                    {data.subtitle}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-400 uppercase tracking-[2px]">
                    <span>{data.shrines}</span>

                    <span className="text-orange-400">•</span>

                    <span>{data.region}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="w-full lg:w-[42%]">
                  <p className="text-gray-300 leading-7 text-sm">
                    {data.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {data.temples.map((temple) => (
                      <span
                        key={temple}
                        className="border border-white/20 px-3 py-1 text-xs uppercase text-gray-300"
                      >
                        {temple}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="w-full lg:w-[18%] flex justify-center lg:justify-end">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-50 h-66 object-cover lg:grayscale lg:group-hover:grayscale-0 group-hover:scale-105 duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cricuites;
