"use client";
import React from "react";
import Projects from "../components/Projects";

export default function Portfolio() {
  return (
    <>
      <section id="portfolio" className="section bg-primary min-h-[1400px]">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
              Featured Works
            </h2>
            <p className="subtitle">
              Here you will find some of the personal and clients projects that
              I developed and designed with each project containing its link to
              the website or file.
            </p>
          </div>
          <Projects />
        </div>
      </section>
    </>
  );
}
