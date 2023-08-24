// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { projectsData } from "../data";
import { projectsNav } from "../data";
import Project from "./Project";

export default function Projects() {
  const [item, setItem] = useState({ name: "All" });
  // const [projects, setProjects] = useState([]);
  const [projects, setProjects] = useState<
    {
      id: string;
      image: StaticImageData;
      name: string;
      category: string;
      href: string;
    }[]
  >([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };
  return (
    <>
      <div>
        {/* projects nav */}
        <nav className="mb-12 max-w-xl mx-auto">
          <ul className="flex flex-col md:flex-row justify-evenly items-center text-white">
            {projectsNav.map((item, index) => {
              return (
                <>
                  <li
                    onClick={(e) => {
                      handleClick(e, index);
                    }}
                    className={`${
                      active === index ? "active" : ""
                    } cursor-pointer m-4`}
                    key={index}
                  >
                    {item.name}
                  </li>
                </>
              );
            })}
          </ul>
        </nav>

        {/* projects grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-x-8 md:gap-y-8">
          {projects.map((item) => {
            return (
              <>
                <Project item={item} key={item.id} />
              </>
            );
          })}
        </section>
      </div>
    </>
  );
}
