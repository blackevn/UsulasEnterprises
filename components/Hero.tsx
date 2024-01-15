"use client";

import Image from "next/image";

import { CustomButton } from "@components";
import { FaArrowAltCircleRight } from "react-icons/fa";
import HeroCarousel, { BannerProps } from "./HeroCarousel";

const Hero = ({banner}: BannerProps) => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
          <div className="pt-20 h-auto bg-gradient-to-r from-blue-500 to-blue-200">
            <HeroCarousel banner={banner} />
          </div>
    
  );
};

export default Hero;
