import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo3.svg";
import { NavbarDesktop } from "./Navbar";
import { NavbarMobile } from "./Navbar";
import { Socials } from "./Socials";

export default function Header() {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <>
      <header
        className={`${
          bg ? "bg-tertiary h-20" : "h-24"
        } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300 `}
      >
        <div className="container mx-auto h-full flex items-center justify-between">
          {/* logo */}
          <Link className="" aria-current="page" href="/">
            <Image src={Logo} alt="logo" />
          </Link>

          {/* NavbarDesktop */}
          <div className="hidden lg:block">
            <NavbarDesktop />
          </div>

          {/* Socials */}
          <div className="hidden lg:block">
            <Socials />
          </div>

          {/* NavbarMobile */}
          <div className="block lg:hidden">
            <NavbarMobile />
          </div>
        </div>
      </header>
    </>
  );
}
