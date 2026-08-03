import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, temples } from "../assets/assets";

const TempleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [filterData, setFilterData] = useState(null);

  useEffect(() => {
    const temple = temples.find((item) => item.id === Number(id));
    setFilterData(temple);
  }, [id]);

  const suggestedTemples = temples
    .filter((item) => item.id !== Number(id))
    .slice(0, 3);

  if (!filterData) {
    return (
      <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col min-h-screen overflow-hidden bg-[#0F0F0F]">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${filterData.heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="absolute bottom-0 h-72 w-full bg-gradient-to-t from-[#0F0F0F] to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end min-h-screen w-[90%] mx-auto pb-20">
          <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl px-5 py-4">
              <div className="flex items-center gap-3">
                <img
                  src={assets.location_img}
                  alt="Location"
                  className="w-5 h-5"
                />

                <div>
                  <p className="text-orange-400 text-xs uppercase tracking-[4px]">
                    Location
                  </p>

                  <a
                    href={filterData.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-white hover:text-orange-400 transition-colors duration-300"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className="text-orange-400 text-sm uppercase tracking-[4px] mb-5">
            {filterData.category}
          </p>

          <h1 className="text-white text-5xl md:text-7xl font-serif">
            {filterData.templeName}
          </h1>

          <div className="flex flex-wrap gap-8 mt-8 text-gray-300">
            <p>
              📍 {filterData.district}, {filterData.state}
            </p>

            <p>🛕 {filterData.mainDeity}</p>

            <p>{filterData.localName}</p>
          </div>
        </div>
      </section>

      {/* Temple Information */}
      <section className="bg-[#0F0F0F] py-20">
        <div className="w-[90%] mx-auto grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <p className="text-orange-400 tracking-[5px] uppercase text-sm">
              History
            </p>

            <h2 className="text-4xl text-white mt-5 mb-8 font-serif">
              {filterData.templeName}
            </h2>

            <p className="text-gray-300 leading-8">
              {filterData.description || "Description Coming Soon..."}
            </p>

            <div className="mt-12">
              <p className="text-orange-400 tracking-[5px] uppercase text-sm mb-6">
                Festivals
              </p>

              <div className="flex flex-wrap gap-4">
                {filterData.festivals.map((festival, index) => (
                  <span
                    key={index}
                    className="border border-white/20 px-5 py-3 text-white"
                  >
                    {festival}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="border border-white/10 p-8 bg-white/5">
            <div className="space-y-8">
              <div>
                <p className="text-orange-400 uppercase tracking-[4px]">
                  Timings
                </p>

                <p className="text-white mt-3">
                  {filterData.openingTime} - {filterData.closingTime}
                </p>
              </div>

              <hr className="border-white/10" />

              <div>
                <p className="text-orange-400 uppercase tracking-[4px]">
                  Railway Station
                </p>

                <p className="text-white mt-3">{filterData.railwayStation}</p>
              </div>

              <hr className="border-white/10" />

              <div>
                <p className="text-orange-400 uppercase tracking-[4px]">
                  Airport
                </p>

                <p className="text-white mt-3">{filterData.airport}</p>
              </div>

              <hr className="border-white/10" />

              <div>
                <p className="text-orange-400 uppercase tracking-[4px]">
                  Best Time
                </p>

                <p className="text-white mt-3">{filterData.bestTimeToVisit}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#0F0F0F] py-20">
        <div className="w-[90%] mx-auto">
          <p className="text-orange-400 tracking-[5px] uppercase mb-10">
            Gallery
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filterData.gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={filterData.templeName}
                className="w-full h-64 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Suggested Temples */}
      <section className="bg-[#0F0F0F] py-20 border-t border-white/10">
        <div className="w-[90%] mx-auto">
          <div className="mb-12">
            <p className="text-orange-400 uppercase tracking-[5px] text-sm">
              Discover More
            </p>

            <h2 className="text-4xl text-white mt-3">Suggested Temples</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {suggestedTemples.map((temple) => (
              <div
                key={temple.id}
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate(`/temples/${temple.id}`);
                }}
                className="group cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-[#181515]"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={temple.heroImage}
                    alt={temple.templeName}
                    className="w-full h-64 object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-orange-400 text-xs uppercase tracking-[4px]">
                    {temple.category}
                  </p>

                  <h3 className="text-white text-2xl mt-3">
                    {temple.templeName}
                  </h3>

                  <p className="text-gray-400 mt-3">
                    {temple.district}, {temple.state}
                  </p>

                  <div className="mt-6 text-orange-400 group-hover:translate-x-2 transition">
                    Explore →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TempleDetails;
