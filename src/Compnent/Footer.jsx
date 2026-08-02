import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0F0D0C] text-white">

      <div className="w-[90%] mx-auto pt-20 pb-10">

        {/* Main Footer */}
        <div className="flex flex-col md:flex-row md:justify-between">

          {/* Left */}
          <div className="md:w-[45%]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl serif-display">
              Begin your{" "}
              <span className="text-amber-400 italic">
                yatra
              </span>.
            </h1>

            <p className="text-gray-300 text-sm mt-6 max-w-md open-sans">
              A quiet, considered guide to the sacred architecture of India —
              for the devout, the curious, and the wanderer alike.
            </p>
          </div>


          {/* Right Links */}
          <div className="flex gap-20 mt-10 md:mt-0">

            {/* Discover */}
            <div className="flex flex-col gap-3">
              <p className="text-orange-400/70 text-xs tracking-[3px]">
                DISCOVER
              </p>

              <p className="text-sm text-gray-300">
                Temple Directory
              </p>

              <p className="text-sm text-gray-300">
                Pilgrim Circuits
              </p>

              <p className="text-sm text-gray-300">
                Heritage
              </p>
            </div>


            {/* Circuits */}
            <div className="flex flex-col gap-3">
              <p className="text-orange-400/70 text-xs tracking-[3px]">
                CIRCUITS
              </p>

              <p className="text-sm text-gray-300">
                Char Dham
              </p>

              <p className="text-sm text-gray-300">
                12 Jyotirlingas
              </p>

              <p className="text-sm text-gray-300">
                51 Shakti Peethas
              </p>
            </div>

          </div>

        </div>


        {/* Bottom */}
        <hr className="border-white/10 mt-20" />


        <div className="flex flex-col md:flex-row justify-between items-center mt-8">

          <p className="text-white serif-display text-lg">
            <span className="text-amber-400">✦</span> Tirthan
          </p>


          <p className="text-gray-400 text-xs tracking-[2px] mt-5 md:mt-0">
            © 2026 · A HERITAGE ARCHIVE · MADE WITH REVERENCE
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;