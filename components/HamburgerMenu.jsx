"use-client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOutsideClick = (event) => {
    if (isOpen && !event.target.closest(".hamburger-menu")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="p-2">
        <div className="w-6 h-0.5 bg-gray-600"></div>
        <div className="w-6 h-0.5 mt-1 bg-gray-600"></div>
        <div className="w-6 h-0.5 mt-1 bg-gray-600"></div>
      </button>

      {isOpen && (
        <div className="hamburger-menu fixed top-0 left-0 h-screen w-3/4 sm:w-2/3 md:w-1/3 p-4 bg-white border rounded shadow">
          <div className="mb-5">
            <Link href="/" className="flex mb-5">
              <Image
                src="/assets/images/logo.png"
                alt="logo"
                width={45}
                height={45}
                className="object-contain"
              />
              <p className="ml-3 text-2xl text-center leading-10">Eige Lon</p>
            </Link>
            <hr />
          </div>

          <ul className="space-y-6 mb-5">
            <li className="text-lg cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="text-lg cursor-pointer">
              <a href="#">Profile</a>
            </li>
            <li className="text-lg cursor-pointer">
              <a href="#">Leaderboard</a>
            </li>
          </ul>
          <hr />
          <div className="mt-5 w-full flex justify-center items-center flex-col">
            <button className="btn_main w-[80%] h-[50px]">Sign In</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
