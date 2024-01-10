import React from "react";
import { testimonials } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../swiper.css";
import Image from "next/image";

export default function TestimonialSliders() {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {testimonials.map((item, index) => {
          const { authorImg, authorText, authorName, authorPosition } = item;
          return (
            <>
              <SwiperSlide key={index} className="">
                <div className="flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-32">
                  <div className="w-48 h-48 md:w-56 md:h-56 lg:w-[328px] lg:h-[328px]">
                    <Image className="rounded-2xl" src={authorImg} alt="" />
                  </div>
                  <div className="flex flex-col max-w-3xl">
                    <h5 className="font-body text-md md:text-xl mb-8 italic font-normal md:w-full">
                      {authorText}
                    </h5>
                    <div>
                      <p className="text-lg text-accent">{authorName}</p>
                      <p className="mb-12 sm:mb-0 md:mb-12 lg:mb-0">
                        {authorPosition}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}
