import Image from 'next/image'
import React from 'react'

interface ServicesCardProps {
    title: string
    desc: string
    image: string
}

const ServicesCard = ( {title, desc, image}: ServicesCardProps ) => {
  return (
    <div className=' min-w-[200px] h-full bg-white flex flex-col items-center py-8 px-16 rounded-lg shadow-xl'>
        <Image width={200} height={200} src={image} alt={`${title} image`}/>
        <h1 className='font-bold text-xl capitalize'>{title}</h1>
        <p className='capitalize'>{desc}</p>
    </div>
  )
}

export default ServicesCard