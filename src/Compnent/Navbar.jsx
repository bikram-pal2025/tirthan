import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggleNavBar, setToggleNavBar] = useState(true);
  const navigate = useNavigate()
  const goToSection = (id) => {
  navigate(`/#${id}`);
};

  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full bg-[#0F0F0F]">
        <div className="flex h-20 items-center justify-between px-6 md:px-10">
          {/* Logo */}
          <Link to='/'>
             <div className="group flex items-center gap-3">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src={assets.star}
                alt="Star"
                className="w-5 h-5 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]"
              />
              <p className="text-2xl text-white">Tirthan</p>
            </div>
          </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="text-[#A8A29E]">
              <ul className="flex gap-8">
                <li className="text-sm font-light tracking-widest hover:text-white transition-colors duration-300">
                 <button onClick={() => goToSection("temples")}>
  TEMPLES
</button>

                </li>
                <li className="text-sm font-light tracking-widest hover:text-white transition-colors duration-300">
                  <a href="#cricuites">CIRCUITS</a>
                </li>
                <li className="text-sm font-light tracking-widest hover:text-white transition-colors duration-300">
                  <a href="#heritage">HERITAGE</a>
                </li>
              </ul>
            </div>

            <button className="border border-orange-400 px-5 py-2 text-orange-400 text-sm font-light tracking-wide transition-all duration-300 hover:bg-orange-400 hover:text-white">
              <a href="#temples">EXPLORE</a>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden text-white text-2xl cursor-pointer">
            <i
              onClick={() => setToggleNavBar(!toggleNavBar)}
              className={`fa-solid ${
                toggleNavBar ? "fa-bars" : "fa-x"
              } transition-transform duration-300`}
            ></i>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden bg-[#0F0F0F] transition-all duration-500 ease-in-out ${
            toggleNavBar
              ? "max-h-0 opacity-0 -translate-y-5"
              : "max-h-96 opacity-100 translate-y-0"
          }`}
        >
          <div className="flex flex-col items-center gap-6 py-6">
            <ul className="flex flex-col items-center gap-6 text-[#A8A29E]">
              <li className="text-sm font-light tracking-widest hover:text-white transition-colors duration-300">
                <a
                  href="/"
                  onClick={() => setToggleNavBar(true)}
                >
                  TEMPLES
                </a>
              </li>

              <li className="text-sm font-light tracking-widest hover:text-white transition-colors duration-300">
                <a
                  href="/"
                  onClick={() => setToggleNavBar(true)}
                >
                  CIRCUITS
                </a>
              </li>

              <li className="text-sm font-light tracking-widest hover:text-white transition-colors duration-300">
                <a
                  href="/"
                  onClick={() => setToggleNavBar(true)}
                >
                  HERITAGE
                </a>
              </li>
            </ul>

            <button
              onClick={() => setToggleNavBar(true)}
              className="border border-orange-400 px-5 py-2 text-orange-400 text-sm font-light tracking-wide transition-all duration-300 hover:bg-orange-400 hover:text-white"
            >
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;