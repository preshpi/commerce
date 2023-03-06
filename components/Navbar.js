import React, { useState, useEffect, useRef } from "react";

import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import Link from "next/link";

function Navbar() {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPlaceholder, setCurrentPlaceholder] = useState("Search");
  const placeholders = ["pants", "shoes", "bags", "accessories", "sweat shirts", "beach wears", "hats", "night wears"];

  const handleInputChange = (e) => {
      setSearchQuery(e.target.value);
  };

    const navbarRef = useRef();

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentPlaceholder(
            placeholders[Math.floor(Math.random() * placeholders.length)]
        );
        }, 3000);

        return () => {
        clearInterval(intervalId);
        };
    });

    useEffect(() => {
        const handler = (e) => {
            if (!navbarRef.current.contains(e.target)) {
                handleClose(false);   
            }        
        }
        document.addEventListener("mousedown", handler);

        return () => {
        document.removeEventListener("mousedown", handler);
        }        
    })

  return (
    <div className="top-0 relative mx-auto p-5 w-full">
      {/* large screen */}
      <div className="lg:block md:block hidden">
        <div className="flex justify-between">
          <Link href="/">
            <h1 className="text-3xl">FlairStyle</h1>
          </Link>

          <form className="items-center justify-center relative lg:w-[500px] md:w-[300px]">
            <input
              className="border border-[#E4E5E4] text-[#757575] rounded py-2 px-4 pr-12 outline-none lg:w-[500px] md:w-[300px] bg-none"
              type="text"
              placeholder={currentPlaceholder}
              value={searchQuery}
              onChange={handleInputChange}
            />
            <button className="absolute top-0 right-0  font-bold py-2 px-4 text-white text-2xl h-full bg-black cursor-pointer">
              <AiOutlineSearch />
            </button>
          </form>

          <div className="items-center justify-center">
            <ul className="flex space-x-6 items-center justify-center text-xl">
              <li className="cursor-pointer flex">
                <Link href="/favourite">love</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/cart">
                  <AiOutlineShoppingCart />
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/profile">
                  <RxPerson />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* small screen */}
      <div className="lg:hidden md:hidden block" ref={navbarRef}>

        <div className="flex justify-between">
          <div onClick={handleClick}>
            {!nav ? (
              <div className="flex items-center justify-center space-x-5">
                <AiOutlineMenu className="text-[18px] cursor-pointer text-black" />
                <h1 className="text-2xl">FlairStyle</h1>
              </div>
            ) : (
              <AiOutlineClose className="hidden" />
            )}
          </div>

          <ul className="flex space-x-6 items-center justify-center text-xl">
            <li className="cursor-pointer">
              <RxPerson />
            </li>

            <li className="cursor-pointer">
              <AiOutlineShoppingCart />
            </li>
          </ul>
        </div>

         <form className="items-center justify-center relative w-full mt-[5%]">
            <input
              className="border border-[#E4E5E4] text-[#757575] rounded py-1 px-4 pr-12 outline-none w-full bg-none"
              type="text"
              placeholder={currentPlaceholder}
              value={searchQuery}
              onChange={handleInputChange}
            />
            <button className="absolute top-0 right-0  font-bold py-1 px-4 text-white text-2xl h-full bg-black cursor-pointer">
              <AiOutlineSearch />
            </button>
          </form>


          <div
            className={
              !nav
                ? "hidden"
                : "h-full fixed bg-[white] w-[80%] left-0 top-0 z-10 transition-all duration-300 drop-shadow-lg"
            }
          >
            <div className="flex space-x-5 w-full pt-5 p-3 items-center">
              <AiOutlineClose
                onClick={handleClose}
                className="text-[18px] font-bold items-center justify-center cursor-pointer text-black transition-all duration-300"
              />
              <h1 className="text-2xl">FlairStyle</h1>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default Navbar;
