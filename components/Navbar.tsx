"use client"

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import CustomButton from "./CustomButton";
import { FaArrowAltCircleRight, FaPhone } from "react-icons/fa";
import NavLink from "./NavLink";
import { navlinks } from "@constants";
import { IconBaseProps } from "react-icons";


const Navbar = () => {


  const path = usePathname()

  const isPath = path === "/products"

  console.log(isPath);
  

  return (
    <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>

      <div className="flex gap-4 items-center justify-between">
       {navlinks.map((item) => <NavLink link={item.link} name={item.name}/>)}
      </div>

     
    {!isPath ?  <Link href={`/products`}>
      <CustomButton
        icon={FaArrowAltCircleRight}
        text='Browser All Products'
        modifier='text-primary-blue rounded-full bg-white min-w-[130px]'
        /> 
        </Link>
        : 
        <Link href={`/contact`}>
        <CustomButton icon={FaPhone} text="Call an agent"/>
        </Link>}
    </nav>
  </header>
  )
}

export default Navbar

