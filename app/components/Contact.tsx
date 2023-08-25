// @ts-nocheck
import React from "react";
import { contact } from "../data";
// import Link from "next/link";

export default function Contact() {
  return (
    <>
      <section id="contact" className="section bg-primary">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
              Contact me
            </h2>
            <p className="subtitle">
              Have a proposal?. Get in touch by submitting the form below or
              send me an email directly at inioluwadeborah2@gmail.com
            </p>
          </div>
          <div className="flex flex-col lg:gap-x-8 lg:flex-row">
            {/* info */}
            <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
              {contact.map((item, index) => {
                const { icon, title, subtitle, description } = item;
                return (
                  <>
                    <div
                      className="flex flex-col lg:flex-row gap-x-4"
                      key={index}
                    >
                      {/* icon */}
                      <div className="text-accent rounded-sm w-14 h-14 flex justify-center items-start mt-2 mb-3 lg:mb-0 text-2xl">
                        {icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-body mb-2">{title}</h4>
                        <p className="mb-2">{subtitle}</p>
                        <p className="font-normal text-accent">{description}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            {/* form */}
            <form className="space-y-8 w-full max-w-[780px]">
              <div className="flex gap-8">
                <input type="text" className="input" placeholder="Your name" />
                <input
                  type="email"
                  className="input"
                  placeholder="Your email"
                />
              </div>
              <input type="text" className="input" placeholder="Subject" />
              <textarea
                className="textarea"
                placeholder="Your message"
              ></textarea>
              <a href="mailto:inioluwadeborah2@gmail.com">
                <button className="btn btn-lg bg-accent hover:bg-accent-hover mt-6">
                  Send message
                </button>
              </a>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
