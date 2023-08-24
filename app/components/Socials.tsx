"use client";
import React from "react";
import Link from "next/link";
// import Image from "next/image";
import { social } from "../data";

export const Socials = () => {
  return (
    <>
      <ul className="flex space-x-6">
        {social.map((item, index) => {
          return (
            <li
              className="flex justify-center items-center text-accent"
              key={index}
            >
              <Link className="text-base" href={item.href} target="_blank">
                {item.icon}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
