"use client"

import React from 'react'
import Carousel from 'react-multi-carousel';
import ProductCard from './ProductCard';
import { AllProductsType } from '@types';
import { CustomButton } from '@components';
import { IconBaseProps } from 'react-icons';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import Link from 'next/link';
import FilterItem from './FilterItem';

interface ProductsCarouselProps {
    title: string
    description: string
    products: AllProductsType[]
}

const ProductsCarousel = ({title, products, description }: ProductsCarouselProps) => {

    const responsive = {
    
      superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,

    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      
    }

  }


  return (
    <div className='px-20 py-10'>
        <div className='grid place-items-center md:block'>
        <h2 className="text-4xl font-bold text-center md:text-start">{title}</h2>
        <div className=' grid place-items-center  md:flex justify-between items-center mb-6 mt-4 md:mt-0 space-y-2'>
        <h2 className="text-xl text-center md:text-start">Browse {description}</h2>
   
        <FilterItem 
        id={0} 
        icon={FaArrowAltCircleRight} 
        name={title} 
        text='View all'
        plural={ title.endsWith('s') ? "es" : "s"}
        selected/>

        </div>
        </div>

        <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="h-auto"
        dotListClass=""
        responsive={responsive}
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        rewind={false}
        rewindWithAnimation={false}
        shouldResetAutoplay
        sliderClass=""
        slidesToSlide={1}
        swipeable
        >
         
            {products.map((product) => ( <div className='mx-4 my-2' key={product.model}><ProductCard item={product}/></div>))}
  
        </Carousel>

    </div>
   
  )
}


export default ProductsCarousel


