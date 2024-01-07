import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HeroCarousel = () => {

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 3000, min: 2000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 2000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

  return (

    <div className='w-full h-full'>     
        <Carousel responsive={responsive}>
        <div className='w-full h-full bg-blacko'></div>
        </Carousel>
    </div>
  )
}

export default HeroCarousel