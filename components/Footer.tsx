import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@constants";

const date = new Date().getFullYear()

const Footer = () => (
  <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100 relative'>
    <div className="absolute bg-[url('/SVG/FooterPattern.svg')] top-0 bottom-0 left-0 right-0 opacity-10 ">
      
    </div>
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 z-10'>
      <div className='flex flex-col justify-start items-start gap-6'>
        {/* <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain' /> */}
       <h1 className="font-bold text-3xl">Usulas Enterprises</h1>
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='flex justify-between items-center flex-wrap mt-10 sm:px-16 px-6 py-10 z-10 '>
    <p className='text-base text-gray-700'>
          Usulas Enterprises &copy; {date} <br />
          All Rights Reserved 
        </p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
