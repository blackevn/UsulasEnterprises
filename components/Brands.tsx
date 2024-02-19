"use client" 

import { useWidth } from "@hooks"
import Image from "next/image"

 const brandImages = [
    "/brands/Caterpillar.png", 
    "/brands/Champion.png",
    "/brands/Cummins.png",
    "/brands/DuroMax.png",
    "/brands/Honda.png",
    "/brands/Perkins.png",
    "/brands/Husqvarna.png",
]


const Brands = () => {

    const [ width ] = useWidth()
    
  return (
    <div className="flex justify-between items-center w-full overflow-x-scroll py-10 lg:py-20 px-4 lg:px-20">
        {brandImages.map(image => (<Image alt="brand images" className="w-20 lg:w-40" width={width <= 700 ? 200 : 150} height={width <= 700 ? 200 : 150} src={image}/>))}
    </div>
  )
}

export default Brands