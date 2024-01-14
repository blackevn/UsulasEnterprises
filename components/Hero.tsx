"use client";

import Image from "next/image";

import { CustomButton } from "@components";
import { FaArrowAltCircleRight } from "react-icons/fa";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
          <div className="pt-20 h-[400px]">
            <HeroCarousel/>
          </div>
    
  );
};

export default Hero;
