import React from "react";
import { skills } from "../data";
import Image from "next/image";

export default function Skills() {
  return (
    <>
      <section className="bg-tertiary py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-8 md:grid-flow-row">
            {skills.map((skill, index) => {
              return (
                <div className="flex items-center justify-center" key={index}>
                  <Image src={skill.image} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
