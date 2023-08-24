// @ts-nocheck
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
// import { Link } from "react-scroll";
import React from "react";

export default function Project({ item }) {
  return (
    <>
      <div key={item.id} className="flex flex-col items-center text-center ">
        <div className="mb-8">
          <Image
            className="rounded-2xl"
            width={500}
            height={400}
            src={item.image}
            alt=""
          />
        </div>
        <h3 className="text-xl font-semibold mb-3">{item.name}</h3>
        <Link
          href={`${item.href}`}
          target="_blank"
          className="cursor-pointer flex items-center space-x-2"
        >
          <span className="text-accent text-sm mb-3">View Project</span>
          <FiArrowUpRight className="w-4 h-4 text-accent mb-3" />
        </Link>
      </div>
    </>
  );
}
