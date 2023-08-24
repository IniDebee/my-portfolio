import React from "react";
import { brands } from "../data";
import Image from "next/image";
import Link from "next/link";

export default function Brands() {
  return (
    <>
      <section className="min-h-[146px] bg-tertiary flex items-center py-6 md:py-0">
        <div className="container mx-auto flex md:justify-between items-center flex-wrap justify-evenly">
          {brands.map((brand, index) => {
            return (
              <div key={index}>
                <Link href={brand.href} target="_blank">
                  <Image src={brand.img} alt="" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
