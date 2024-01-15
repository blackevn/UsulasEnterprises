"use client"

import React from 'react'
import Carousel from 'react-multi-carousel';
import ProductCard from './ProductCard';
import { AllProductsType } from '@types';
import { CustomButton } from '@components';
import { IconBaseProps } from 'react-icons';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import Link from 'next/link';

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

        <h2 className="text-4xl font-bold ">{title}</h2>
        <div className='w-full flex justify-between items-center mb-6'>
        <h2 className="text-xl ">Browse {description}</h2>
        <Link href={`/products=${title}`}>
        <CustomButton modifier="flex-row-reverse" text={`See all ${title}`} icon={FaArrowAltCircleRight}/>
        </Link>
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


