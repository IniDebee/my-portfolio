import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FiChevronUp } from "react-icons/fi";

export default function BackToTopBtn() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });

  const scrolltoTop = () => {
    scroll.scrollToTop();
  };
  return (
    show && (
      <button
        onClick={() => scrolltoTop()}
        className="bg-accent w-12 h-12 hover:bg-accent-hover text-white rounded-full fixed right-12 bottom-24 cursor-pointer flex justify-center items-center transition-all"
      >
        <FiChevronUp className="w-6 h-6" />
      </button>
    )
  );
}
