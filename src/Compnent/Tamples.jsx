import React, { useState } from "react";
import { temples, assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Tamples = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDeity, setSelectedDeity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredTemples = temples.filter((temple) => {
    const matchesSearch =
      temple.templeName.toLowerCase().includes(search.toLowerCase()) ||
      temple.state.toLowerCase().includes(search.toLowerCase()) ||
      temple.district.toLowerCase().includes(search.toLowerCase());

    const matchesState = selectedState === "" || temple.state === selectedState;

    const matchesTemple =
      selectedDeity === "" || temple.templeName === selectedDeity;

    const matchesCategory =
      selectedCategory === "" || temple.category === selectedCategory;

    return matchesSearch && matchesState && matchesTemple && matchesCategory;
  });

  return (
    <>
      <div
        id="temples"
        className="bg-[#0D0B0B] min-h-screen w-[90%] mx-auto  pt-10 md:pt-15 lg:pt-60 "
      >
        {/* make the top section */}
        <div className="flex flex-col justify-baseline items-baseline gap-5">
          <p className="text-orange-400 text-xs tracking-[6px] uppercase">
            The Directory
          </p>
          <div className="flex justify-between w-full items-center">
            <h3 className="text-white text-2xl md:text-4xl lg:text-5xl">
              Explore the sanctuaries.
            </h3>
            <p className="text-[#A8A29E] text-sm">
              13 of 13 temples · filter by region, deity & architecture.
            </p>
          </div>
        </div>

        {/* Search Section */}
        <div className="mt-10 md:mt-20 flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Temple Search */}
          <div className="flex items-center gap-3 bg-[#181515] border border-[#3A3535] focus-within:border-orange-400 rounded-md px-4 py-4 transition-colors duration-200">
            {/* Search Icon */}
            <i className="fa-solid fa-magnifying-glass text-[#A8A29E]"></i>

            {/* Search Input */}
            <input
              type="text"
              placeholder="SEARCH TEMPLES"
              className="w-full bg-transparent outline-none text-[#A8A29E] text-xs open-sans placeholder:text-[#A8A29E]"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {/* State Search */}
          <div className="relative w-full">
            <select
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full bg-[#181515] border border-[#3A3535] text-[#A8A29E] text-xs open-sans uppercase px-4 py-4 pr-10 appearance-none outline-none cursor-pointer"
            >
              <option value="">ALL STATES</option>
              {temples.map((state, index) => (
                <option key={index}>{state.state}</option>
              ))}
            </select>

            {/* Dropdown Icon */}
            <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-[#A8A29E] pointer-events-none"></i>
          </div>

          {/* All detail Search */}
          <div className="relative w-full">
            <select
              onChange={(e) => setSelectedDeity(e.target.value)}
              className="w-full bg-[#181515] border border-[#3A3535] text-[#A8A29E] text-xs open-sans uppercase px-4 py-4 pr-10 appearance-none outline-none cursor-pointer"
            >
              <option value="">ALL TEMPLES</option>
              {temples.map((temple, index) => (
                <option key={index}>{temple.templeName}</option>
              ))}
            </select>

            {/* Dropdown Icon */}
            <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-[#A8A29E] pointer-events-none"></i>
          </div>

          {/* Best Time Search */}
          <div className="relative w-full">
            <select
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-[#181515] border border-[#3A3535] text-[#A8A29E] text-xs open-sans uppercase px-4 py-4 pr-10 appearance-none outline-none cursor-pointer"
            >
              <option value="">ALL CATEGORY</option>
              {temples.map((category, index) => (
                <option key={index}>{category.category}</option>
              ))}
            </select>

            {/* Dropdown Icon */}
            <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-[#A8A29E] pointer-events-none"></i>
          </div>
        </div>

        {/*===================== temple images ======================================  */}

        <section className="w-full bg-[#0D0B0B] py-16">
          <div className="w-full mx-auto px-5">
            {filteredTemples.length === 0 && (
              <div className="text-center text-white py-10">
                No temple found
              </div>
            )}

            {filteredTemples.slice(0, 4).map((temple, index) => (
              <div key={temple.id} className="mb-10">
                {index % 2 === 0 ? (
                  // =================== 16:9 | 3:4 ===================
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Landscape */}
                    <div
                      onClick={() => navigate(`/temples/${temple.id}`)}
                      className="relative  w-full lg:w-[70%]  aspect-video  overflow-hidden group cursor-pointer"
                    >
                      <div
                        className="absolute  inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${temple.gallery[0]})`,
                        }}
                      ></div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                      <div className="absolute bottom-6 left-6 z-10">
                        <h2 className="text-white text-3xl md:text-5xl font-bold">
                          {temple.templeName}
                        </h2>

                        <div className="flex items-center gap-2 mt-3">
                          <img
                            src={assets.location_img}
                            alt=""
                            className="w-5 h-5"
                          />

                          <p className="text-orange-300">
                            {temple.district}, {temple.state}, India
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Portrait */}
                    <div
                      onClick={() => navigate(`/temples/${temple.id}`)}
                      className="relative hidden! lg:block! lg:w-[30%] w-full aspect-[3/4]  overflow-hidden group cursor-pointer"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${temple.gallery[1]})`,
                        }}
                      ></div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                      <div className="absolute bottom-5 left-5 z-10">
                        <h2 className="text-white text-2xl md:text-3xl font-bold">
                          {temple.templeName}
                        </h2>

                        <p className="text-orange-300 mt-2">{temple.state}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  // =================== 3:4 | 16:9 ===================
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Portrait */}
                    <div
                      onClick={() => navigate(`/temples/${temple.id}`)}
                      className="relative lg:w-[30%] hidden! lg:block! w-full aspect-[3/4]  overflow-hidden group cursor-pointer"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${temple.gallery[1]})`,
                        }}
                      ></div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                      <div className="absolute bottom-5 left-5 z-10">
                        <h2 className="text-white text-2xl md:text-3xl font-bold">
                          {temple.templeName}
                        </h2>

                        <p className="text-orange-300 mt-2">{temple.state}</p>
                      </div>
                    </div>

                    {/* Landscape */}
                    <div
                      onClick={() => navigate(`/temples/${temple.id}`)}
                      className="relative w-full lg:w-[70%]  aspect-video  overflow-hidden group cursor-pointer"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${temple.gallery[0]})`,
                        }}
                      ></div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                      <div className="absolute bottom-6 left-6 z-10">
                        <h2 className="text-white text-3xl md:text-5xl font-bold">
                          {temple.templeName}
                        </h2>

                        <div className="flex items-center gap-2 mt-3">
                          <img
                            src={assets.location_img}
                            alt=""
                            className="w-5 h-5"
                          />

                          <p className="text-orange-300">
                            {temple.district}, {temple.state}, India
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Tamples;
