"use client";

import Image from "next/image";

import { CustomButton } from "@components";
import { FaArrowAltCircleRight } from "react-icons/fa";
import HeroCarousel, { BannerProps, HeroCarouselProps } from "./HeroCarousel";

const Hero = ({banner}: HeroCarouselProps) => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
          <div className="pt-20 h-auto bg-gradient-to-r ">
            <HeroCarousel banner={banner} />
          </div>
    
  );
};

export default Hero;
