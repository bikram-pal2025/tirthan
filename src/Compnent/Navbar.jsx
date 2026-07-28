import React, { useState } from "react";
import { assets } from "../assets/assets";


const Navbar = () => {

    const [toggleNavBar, setToggleNavBar] = useState(true)
    return (
        <>
        
                <div className=" z-50 sticky top-0 p-10 flex w-full h-6 justify-between items-center lg:h-20 bg-[#0F0F0F]">
                    {/* navbar logo */}
                    <div className="flex justify-between items-center gap-3 group">
                        <div className="flex items-center gap-2 hover:cursor-pointer">
                            <img
                                src={assets.star}
                                alt="Star"
                                className="w-5 h-5 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]"
                            />

                            <p className="text-xl md:text-2xl text-white ">Tirthan</p>
                        </div>
                    </div>

                    {/* navbar element */}

                    {/* for tablet and laptops */}

                    <div className=" hidden md:block md:flex justify-between items-center gap-8">
                        <div className=" flex justify-between items-center text-[#A8A29E]">
                            <ul className="flex gap-8  ">
                                <li className="text-sm open-sans font-light  tracking-widest  hover:cursor-pointer"  >
                                    <a href="/">TEMPLES</a>
                                </li>
                                <li className="text-sm open-sans font-light tracking-widest hover:cursor-pointer" >
                                    <a href="/">CIRCUITS</a>
                                </li>
                                <li className="text-sm open-sans font-light tracking-widest hover:cursor-pointer"  >
                                    <a href="/">HERITAGE</a>
                                </li>
                            </ul>
                        </div>

                        <div className=" border border-orange-400 py-2 px-5 hover:cursor-pointer">
                            <p className="text-sm font-light tracking-wide text-orange-400">EXPLORE</p>
                        </div>

                    </div>

                    {/* for mobile */}

                    <div className="md:hidden text-white text-xl cursor-pointer">
                        <i
                            onClick={() => setToggleNavBar(!toggleNavBar)}
                            className={toggleNavBar ? "fa-solid fa-bars" : "fa-solid fa-x"}
                        ></i>
                    </div>

                

                </div>

                {/* mobile links */}

                {toggleNavBar==false &&(
                
                    <div className=" flex pb-4 flex-col justify-center items-center w-full bg-[#0F0F0F] m  gap-5">
                        <div className=" flex flex-col justify-center items-center text-[#A8A29E]">
                            <ul className=" flex flex-col  gap-5  ">
                                <li className="text-sm open-sans font-light  tracking-widest  hover:cursor-pointer"  >
                                    <a href="/">TEMPLES</a>
                                </li>
                                <li className="text-sm open-sans font-light tracking-widest hover:cursor-pointer" >
                                    <a href="/">CIRCUITS</a>
                                </li>
                                <li className="text-sm open-sans font-light tracking-widest hover:cursor-pointer"  >
                                    <a href="/">HERITAGE</a>
                                </li>
                            </ul>
                        </div>

                        <div className=" border border-orange-400 py-2 px-5 hover:cursor-pointer">
                            <p className="text-sm font-light tracking-wide text-orange-400">EXPLORE</p>
                        </div>

                    </div>
                    ) }
    
            
        </>
    );
};

export default Navbar;
