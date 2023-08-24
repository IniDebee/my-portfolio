import React from "react";
import { services } from "../data";

export default function Services() {
  return (
    <>
      <section id="services" className="section bg-tertiary">
        <div className="container mx-auto">
          {/* section title */}
          <div className="flex flex-col items-center text-center">
            <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
              What I do for clients{" "}
            </h2>
            <p className="subtitle">
              I offer custom web and product design and professional web
              development services for your business.
            </p>
          </div>
          {/* items grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const { icon, name, description } = service;
              return (
                <>
                  <div className="bg-secondary p-6 rounded-2xl" key={index}>
                    {/* icon */}
                    <div className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
                      {icon}
                    </div>
                    <h4 className="text-xl font-medium mb-3">{name}</h4>
                    <p>{description}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
