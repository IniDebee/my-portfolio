"use client";
// import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { navigation } from "../data";
import { Link } from "react-scroll";
import { HiOutlineX } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";

export const NavbarDesktop = () => {
  return (
    <>
      <nav>
        <ul className="flex space-x-8 capitalize text-[15px] lg:mr-12 xl:mr-0">
          {navigation.map((item, index) => {
            return (
              <li
                className="text-white hover:text-accent cursor-pointer"
                key={index}
              >
                <Link
                  to={item.href}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="transition-all duration-300"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  {
    /* framer motion variants */
  }
  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <>
      <nav className="relative">
        {/* menu icon */}
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer text-white"
        >
          <HiMenuAlt3 className="w-8 h-8" />
        </div>

        {/* circle */}
        <motion.div
          variants={circleVariants}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          className="w-4 h-4 rounded-full bg-accent fixed top-0 right-0 "
        ></motion.div>

        {/* menu */}
        <motion.ul
          variants={ulVariants}
          initial="hidden"
          animate={isOpen ? "visible" : ""}
          className={`${
            isOpen ? "right-0" : "-right-full"
          } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
        >
          <div
            onClick={() => setIsOpen(false)}
            className="cursor-pointer absolute top-8 right-8 "
          >
            <HiOutlineX className="w-8 h-8" />
          </div>
          {navigation.map((item, index) => {
            return (
              <>
                <li key={index} className="mb-8">
                  <Link
                    to={item.href}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-xl capitalize cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              </>
            );
          })}
        </motion.ul>
      </nav>
    </>
  );
};
