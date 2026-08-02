import React from "react";
import { assets } from "../assets/assets";

const MySelf = ({setPopup}) => {
  return (
    <div className="fixed  inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-3xl max-h-[90vh]  overflow-y-auto scrollbar-none lg:min-h-[500px] bg-[#0A0C0E] rounded-3xl border border-white/10 overflow-hidden">
        <p onClick={()=>setPopup(false)} className=" text-right p-5 text-white cursor-pointer  ">X</p>

        <div className="flex flex-col   lg:flex-row h-full">
          {/* Left Side */}
          <div className="w-full flex justify-between items-center flex-col lg:w-[35%] border-b lg:border-b-0 lg:border-r border-white/10 p-6 md:p-8">
            {/* image */}
            <div className=" flex flex-col items-center ">
              <img
                className=" h-36 w-36 bg-no-repeat bg-cover rounded-full "
                src={assets.me}
                alt=""
              />
            </div>
            <div className="mt-3">
              <p className="text-white text-2xl  lg:text-3xl"> Bikram pal </p>
              <p className="text-[#376DD5] "> Frontend Developer </p>
            </div>

            <hr className="border-gray-700 mt-5 w-full" />

            {/*  collage */}
            <div className="mt-3">
              <div className="flex justify-center items-center gap-2">
                <i className="fa-solid fa-graduation-cap text-[#376DD5] "></i>
                <p className="text-white text-sm">
                  B.Tech in Information Technology
                </p>
              </div>

              <p className="text-gray-500 text-sm  mt-3">
                Bankura Unnayani Institute of Engineering
              </p>
              <p className="text-[#376DD5] text-sm text-center">2023-2027</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full flex flex-col justify-baseline items-baseline lg:w-[65%] p-6 md:p-8">
            <div className="flex flex-col gap-4 text-gray-300 text-sm ">
              <p className="text-2xl text-white">About This Project</p>
              <hr className=" border-[#376dd5] w-[10%]" />

              <p>
                Hi, I'm Bikram Pal, a frontend developer and currently working
                on my backend skills.
              </p>
              <p>
                So for now, my backend skills are not enough to implement more.
                That's why this project contains information about 13 temples.
              </p>
              <p>
                In the future, I plan to expand this project by adding more
                temples and many new features.
              </p>
            
              <hr className="border-gray-700 mt-5 w-full" />
            </div>

            <div className="flex flex-col text-center gap-3 mt-3 justify-center items-center">
              <i className="fa-regular fa-heart text-[#376DD5]"></i>
              <p className="text-white">Thank you for visiting my project!</p>
              <p className="text-gray-300 text-sm">
                I hope you enjoy exploring India's rich spiritual and cultural
                heritage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySelf;
