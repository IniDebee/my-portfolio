"use client";
import Image from "next/image";
import Link from "next/link";
import HeroImg from "../../public/images/banner2.svg";

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="lg:h-[90vh] flex items-center bg-primary lg:bg-cover lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
      >
        <div className="container mx-auto h-full">
          <div className="flex items-center h-full pt-8">
            {/* left side */}
            <div className="flex-1 flex flex-col items-center lg:items-start">
              <p className="text-lg text-accent mb-[22px]">Hey, I'm Inioluwa</p>
              <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-4xl xl:text-5xl lg:leading-[1.2] xl:leading-[1.3] font-bold md:tracking-[2px] max-[308px]:text-center max-[308px]:text-[30px]">
                I Build & Design <br />
                Web Interfaces.
              </h1>
              <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-md text-center lg:text-left text-white">
                I'm a front-end developer specializing in building and designing
                cutting-edge, pixel-perfect, beautiful interfaces and
                intuitively implemented UX, engaging UI, bringing products to
                life.
              </p>
              <div className="flex">
                <Link href="mailto:inioluwadeborah2@gmail.com">
                  <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all mr-10">
                    Work with me
                  </button>
                </Link>
                <Link href="/resume/inioluwacv.docx" download>
                  <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
                    Download CV
                  </button>
                </Link>
              </div>
            </div>
            {/* right side */}
            <div className="hidden lg:flex flex-1 justify-end items-end h-full ">
              <Image src={HeroImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
