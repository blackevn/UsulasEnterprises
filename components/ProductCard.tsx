"use client";

import { useState } from "react";
import Image from "next/image";
import { AllProductsType, CarProps } from "@types";
import CustomButton from "./CustomButton";
import ProductDetails from "./ProductsDetails";
import { FaArrowAltCircleRight } from "react-icons/fa";

interface ProductCardProps {
  item: AllProductsType;
}

const ProductCard = ({ item }: ProductCardProps) => {

  const { manufacturer, model, image, item: name } = item;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        {model?.toString() || manufacturer?.toString() === "" ? <h2 className="car-card__content-title">
          {manufacturer} <span className="font-light">{model}</span>
        </h2>
         : 
        <h2 className="car-card__content-title">
          {name}
        </h2>
        }
      </div>

      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src={image} alt='item model' fill priority className='object-contain' />
      </div>

      <div className='relative flex w-full mt-2'>
       

        <div className="car-card__btn-container">
          <CustomButton
            modifier="w-full hover:bg-blue-500 rounded-lg p-2 text-white" 
            text='View More'
            icon={FaArrowAltCircleRight}
            clickEvent={() => setIsOpen(true)}
          />
        </div>
      </div>

      <ProductDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} product={item} />
    </div>
  );
};

export default ProductCard;
