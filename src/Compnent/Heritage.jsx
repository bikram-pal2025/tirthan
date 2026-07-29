import React from "react";
import { assets } from "../assets/assets";

const Heritage = () => {
  return (
    <>
      {/* =========================
          Heritage Section
      ========================= */}
      <div className="bg-[#0D0B0B] w-full min-h-screen pt-15">

        {/* Header */}
        <div className="w-[90%] mx-auto">
          <p className="text-orange-400 text-xs uppercase tracking-[6px]">
            The Manifesto
          </p>

          <h2 className="mt-5 text-white text-3xl md:text-4xl lg:text-6xl md:w-[70%]">
            Three thousand years, carved in devotion.
          </h2>

          <hr className="mt-10 border-0 border-t border-white/10" />
        </div>

        {/* =========================
            Section 01
        ========================= */}
        <div className="mt-10 w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">

            {/* Text Content */}
            <div className="flex flex-col justify-baseline">
              <h2 className="text-6xl text-center md:text-start md:text-8xl text-orange-400/20">
                01
              </h2>

              <h3 className="text-white text-4xl md:text-6xl mt-5">
                Stone that remembers
              </h3>

              <p className="text-sm md:text-lg text-[#A8A39F] md:w-[70%] mt-5">
                For over two thousand years, Indian temples have been more than
                places of worship — they are archives of astronomy,
                mathematics, dance and myth, carved patiently into granite and
                sandstone by hands long turned to dust.
              </p>
            </div>

            {/* Image */}
            <div className="mt-15 md:mt-0 flex justify-center">
              <img
                src={assets.kashi_vishwanath_gallery_4}
                alt=""
                className="object-cover bg-no-repeat"
              />
            </div>

          </div>

          <hr className="mt-15 border-0 border-t border-white/10" />
        </div>

        {/* =========================
            Section 02
        ========================= */}
        <div className="mt-15 w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row-reverse gap-20 justify-between items-center">

            {/* Text Content */}
            <div className="flex flex-col justify-baseline">
              <h2 className="text-6xl text-center md:text-left md:text-8xl text-orange-400/20">
                02
              </h2>

              <h3 className="text-white text-4xl md:text-6xl mt-5">
                A geography of the sacred
              </h3>

              <p className="text-sm md:text-lg text-[#A8A39F] md:w-[70%] mt-5">
                From the snowline of Kedarnath to the surf at Somnath, the
                pilgrim routes stitch a subcontinent together. To walk them is
                to read the land itself as scripture — river by river, peak by
                peak.
              </p>
            </div>

            {/* Image */}
            <div className="mt-10 md:mt-0 flex justify-center">
              <img
                src={assets.konark_gallery_4}
                alt=""
                className="object-cover bg-no-repeat"
              />
            </div>

          </div>

          <hr className="mt-15 border-0 border-t border-white/10" />
        </div>

        {/* =========================
            Section 03
        ========================= */}
        <div className="mt-10 w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">

            {/* Text Content */}
            <div className="flex flex-col justify-baseline">
              <h2 className="text-6xl text-center md:text-start md:text-8xl text-orange-400/20">
                03
              </h2>

              <h3 className="text-white text-4xl md:text-6xl mt-5">
                Living heritage
              </h3>

              <p className="text-sm md:text-lg text-[#A8A39F] md:w-[70%] mt-5">
                These are not ruins. Bells still ring at dawn, lamps still float
                on dark water, and millions still climb the same worn steps
                their ancestors did. We gather this living tradition into one
                considered, searchable place.
              </p>
            </div>

            {/* Image */}
            <div className="mt-15 md:mt-0 flex justify-center">
              <img
                src={assets.jagannath_gallery_2}
                alt=""
                className="object-cover bg-no-repeat"
              />
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default Heritage;