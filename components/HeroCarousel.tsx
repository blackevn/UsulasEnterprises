import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Link from "next/link";
import { CustomButton } from "@components";
import { FaArrowCircleRight } from "react-icons/fa";
import { AllProductsType } from "@types";
import { manufacturers } from "@constants";

export interface BannerProps {
  banner: AllProductsType[]
}


const Header = ({banner}: BannerProps ) => {

       
const responsive = {

    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 250
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      
    }

  }


  return <>

        <div className="grid place-items-center w-full bg-base-100 dark:bg-gray-800">

        <Carousel
                    additionalTransfrom={0}
                    arrows
                    partialVisible
                    autoPlay
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className="w-full h-full my-8"
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
      
                   {banner.map(ban => (

               
                          <div key={ban.model} className={`header`} >

                            <div className="bannerBG">

                              <p className="text-4xl md:text-7xl lg:text-9xl font-black bg-clip-text text-white">{ban.manufacturer}</p>

                            </div>

                            <div className="w-full md:w-[50%] h-full grid place-items-center ">

                              <div className="space-y-4 w-full grid place-items-center">

                                <div className="space-y-4">

                                <h1 className="headerProductName">{ban.model}</h1>

                                <p className="w-full sm:max-w-md text-xl text-black font-bold">Nulla aliquip esse nulla officia. Sunt ad cillum irure officia elit exercitation veniam. </p>
                             
                                <CustomButton icon={FaArrowCircleRight} text={`View all ${ban.manufacturer} products`} modifier="bg-white"/>

                                </div>
                           
                              </div>
                        
                            </div>
                        
                            <div className="grid place-items-center h-full w-full md:w-[50%] p-8">
                         
                             <img className="max-h-[500px]" src={ban.image} alt={ban.make} />
                        
                            </div>
                       
                          </div>
                   
                   ))}
                   
               
        </Carousel>

        </div>
  
        </>
};

export default Header;