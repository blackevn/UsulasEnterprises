'use client'

import Link from "next/link";
import { NavigationLinks } from "@types";
import { usePathname } from "next/navigation";


const NavLink: React.FC<NavigationLinks> = (props) => {

  const { link = "/", name, path, clicked } = props

  const pathname = usePathname()
  const active = link === pathname


  return <>

            <Link className={`w-full px-4 py-2 rounded-md text-center hover:'bg-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-md 
                              ${active ? 'bg-blue-500 text-white shadow-md' : 'text-black'}`} href={link}>

          <div 
          className="grid place-content-baselinegap-4 items-center w-full ">

           <p className="">{name}</p>

              </div>
            
            </Link>
  
        </>
  
};


export default NavLink;