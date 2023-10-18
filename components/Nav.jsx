"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <div className="flex gap-2">
        <div className="md:hidden">
          <HamburgerMenu />
        </div>

        <Link href="/" className="flex gap-2 flex-center">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <p className="logo_text">Eigi Lon</p>
        </Link>

        {/* Desktop Navigation */}
      </div>
      <div className="md:flex gap-5 hidden">
        <ul className="flex gap-6">
          <li className="cursor-pointer">Aboout</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
        <button>Sign In</button>
      </div>
    </nav>
  );
};

export default Nav;
