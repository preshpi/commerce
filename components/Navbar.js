import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsHeart, BsBag } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import Link from "next/link";
import commerce from "../lib/commerce";
import SearchResults from "./SearchResults";
import Category from "./Category";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FcAbout } from "react-icons/fc";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import Location from "./Location";

function Navbar({ categories }) {
  // a state for the cart to display the cart total items
  const [cart, setCart] = useState(null);

  // nav toggle
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const navbarRef = useRef();
  const handleClose = () => {
    if (nav) {
      setNav(false);
    }
  };

  // cart to display total items
  const fetchCart = () => {
    commerce.cart
      .retrieve()
      .then((cart) => {
        setCart(cart);
      })
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // input search
  const [navResult, setNavResult] = useState([]);
  const [notAvailableMessage, setNotAvailableMessage] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPlaceholder, setCurrentPlaceholder] = useState("Search");
  const placeholders = [
    "shoes",
    "bags",
    "accessories",
    "sweat shirts",
    "sneakers",
    "human hair",
  ];

  const fetchCategory = (value) => {
    // commerce.categories
    //   .list()
    //   .then((categories) => {
    //   })
    //   .catch((error) => {
    //     console.log("There was an error fetching the categories", error);
    //   });

    const result = categories.filter((user) => {
      return (
        value && user && user.name && user.name.toLowerCase().includes(value)
      );
    });
    setNavResult(result);
    if (result.length === 0) {
      setNotAvailableMessage("Item not available");
    } else {
      setNotAvailableMessage("");
    }
  };

  const handleInputChange = (value) => {
    setSearchQuery(value);
    fetchCategory(value);
    setIsInputEmpty(value.trim() === "");
  };

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
        setNav(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="top-0 relative mx-auto p-[30px] w-full">
      {/* large screen */}
      <div className="lg:block md:block hidden">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <h1 className="text-3xl">FlairStyle</h1>
          </Link>

          <div className="flex-row items-center relative">
            <form className="items-center lg:w-[700px] md:w-[300px]">
              <input
                className="border border-[#E4E5E4] text-[#757575] rounded py-2 px-4 pr-12 outline-none lg:w-[700px] md:w-[300px] bg-none"
                type="text"
                placeholder={currentPlaceholder}
                value={searchQuery}
                onChange={(e) => handleInputChange(e.target.value)}
              />
              {!isInputEmpty && (
                <div className="absolute  bg-[#F1F3FB] border border-[#E4E5E4] shadow-lg text-black rounded py-2 px-4 pr-12 lg:w-[700px] md:w-[300px]">
                  {notAvailableMessage !== "" ? (
                    <p className="text-black">{notAvailableMessage}</p>
                  ) : (
                    <SearchResults navResult={navResult} />
                  )}
                </div>
              )}

              <button className="absolute top-0 right-0 font-bold py-2 px-4 text-white text-2xl h-full bg-black cursor-pointer">
                <AiOutlineSearch />
              </button>
            </form>
          </div>

          <div className="flex items-center">
            <ul className="flex space-x-6 items-center text-xl">
              <li className="cursor-pointer">
                <Link href="/profile">
                  <RxPerson />
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/cart">
                  <button className="inline-flex space-x-4">
                    <BsBag />
                    <span className="bg-[blue] absolute rounded-full text-white w-5 h-5 text-sm">
                      {cart?.total_items}
                    </span>
                  </button>
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
              <Link href="/profile">
              <RxPerson />
              </Link>
            </li>

            <li className="cursor-pointer">
              <Link href="/cart">
                <button className="inline-flex space-x-4 relative">
                  <BsBag />
                  <span className="bg-[blue] absolute rounded-full text-white w-5 h-5 text-sm">
                    {cart?.total_items}
                  </span>
                </button>
              </Link>
            </li>
          </ul>
        </div>

        <form className="items-center justify-center relative w-full mt-[5%]">
          <input
            className="border border-[#E4E5E4] text-[#757575] rounded py-1 px-4 pr-12 outline-none w-full bg-none"
            type="text"
            placeholder={currentPlaceholder}
            value={searchQuery}
            onChange={(e) => handleInputChange(e.target.value)}
          />
          {!isInputEmpty && (
            <div className="absolute  bg-[#F1F3FB] border border-[#E4E5E4] shadow-lg text-black rounded py-2 px-4 pr-12 w-[334px] md:w-[300px]">
              {notAvailableMessage !== "" ? (
                <p className="text-black">{notAvailableMessage}</p>
              ) : (
                <SearchResults navResult={navResult} />
              )}
            </div>
          )}

          <button className="absolute top-0 right-0 font-bold py-2 px-4 text-white text-2xl h-full bg-black cursor-pointer">
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
          <div className="flex space-x-5 bg-[#222] p-5 text-white w-full items-between justify-between">
            <h1 className="text-2xl">FlairStyle</h1>
            <div className="flex items-center justify-center text-3xl">
              <AiOutlineClose
                onClick={handleClose}
                className="cursor-pointer"
              />
            </div>
          </div>

          <div className="p-[20px] space-y-6">
            {categories.map((category) => (
              <div key={category.slug}>
                <Link
                  href={`/categories/${category.slug}`}
                  className="flex justify-between"
                >
                  <p className="hover:skew-y-6	transistion-all duration-300 hover:opacity-75">
                    <Category {...category} />
                  </p>
                  <HiArrowNarrowRight />
                </Link>
              </div>
            ))}{" "}
          </div>

          <hr />

          <div className="p-[20px] space-y-4 text-[14px]">
            <Link href="/profile" className="flex justify-between">
              <p className="hover:underline">My Account</p>
              <RxPerson />
            </Link>
            <Link href="/profile" className="flex justify-between">
              <p>About Us</p>
              <FcAbout />
            </Link>
            <div className="flex justify-between">
              <p>Country</p>
              <Location />
            </div>
          </div>

          <div className="flex items-center justify-center p-[20px] text-xl space-x-6 border-t ">
            <Link href="https://tr.ee/rFwIv2NAqI" className="hover:opacity-75">
              <FaTiktok />
            </Link>
            <Link
              href="https://www.instagram.com/presh_pie/"
              className="hover:opacity-75"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
