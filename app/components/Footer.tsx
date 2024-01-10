import React from "react";
import { social } from "../data";
import LogoMobile from "../../public/images/logo6.svg";
import LogoDesktop from "../../public/images/logo7.svg";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="bg-tertiary py-12">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-center lg:justify-between lg:space-x-6">
            {/* socials icon */}
            <div className="flex space-x-6 items-center justify-center">
              {social.map((item, index) => {
                const { href, icon } = item;
                return (
                  <>
                    <Link
                      className="text-accent text-base"
                      href={href}
                      key={index}
                    >
                      {icon}
                    </Link>
                  </>
                );
              })}
            </div>

            {/* logo */}
            <div className="block lg:hidden">
              <Image src={LogoMobile} alt="" />
            </div>
            <div className="hidden lg:block">
              <Image src={LogoDesktop} alt="" />
            </div>

            {/* copyright */}
            <p className="text-center">
              &copy; 2024 Inioluwa Deborah. All rights reserved.
            </p>
            {/* <p>&copy; 2023 Inioluwa Deborah. All rights reserved.</p> */}
          </div>
        </div>
      </footer>
    </>
  );
}
