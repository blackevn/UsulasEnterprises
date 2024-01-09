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
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          text="Explore Products"
          modifier="bg-primary-blue text-white rounded-full mt-10"
          clickEvent={handleScroll}
          icon={FaArrowAltCircleRight}
        />
      </div>
      <div className="w-[50%] grid place-items-center">
        <div className="">
          <HeroCarousel/>
          {/* <Image src="/hero.png" alt="hero" fill className="object-contain" /> */}
        </div>

      </div>
    </div>
  );
};

export default Hero;
