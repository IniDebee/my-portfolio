import React from "react";
import TestimonialSliders from "./TestimonialSliders";

export default function Testimonials() {
  return (
    <>
      <section id="testimonials" className="section bg-secondary">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block">
              What other people say
            </h2>
            <p className="subtitle">
              Here are few reviews from my clients about my professional
              services rendered to them.
            </p>
          </div>
          <TestimonialSliders />
        </div>
      </section>
    </>
  );
}
