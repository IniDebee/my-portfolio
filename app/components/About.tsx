import Image from "next/image";
import React from "react";
// import Link from "next/link";
// import AboutImg from "../../public/images/about.webp";
import AboutImg from "../../public/images/about1.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="section bg-secondary">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-24">
            <Image
              className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
              src={AboutImg}
              alt=""
            />
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex flex-col">
                <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                  Inioluwa Deborah
                </h2>
                <p className="mb-4 text-accent">Web Developer and Designer</p>
                <hr className="mb-8 opacity-5" />
                <p className="mb-8 text-white">
                  I build and design scalable web interfaces using ReactJs |
                  TypeScript | NextJs | JavaScript [ES6] | Tailwind Css |
                  Bootstrap | SASS | CSS | HTML5 | Git & GitHub | NodeJs |
                  Express | MySQL | Figma | Canva | Adobe Photoshop.
                </p>
                <p className="mb-8 text-white">
                  Adaptable professional with close to 2 years of work
                  experience and proven knowledge of leadership, experience of
                  creating logical and innovative solutions to complex problems,
                  communication skills, work flow optimization and knowledge of
                  software development life cycle.
                </p>
              </div>
              <a href="mailto:inioluwadeborah2@gmail.com">
                <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
                  Contact me
                </button>
              </a>
              {/* <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all">
                Contact me
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
