import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { CustomButton } from "@components";
import { FaArrowCircleRight } from "react-icons/fa";
import FilterItem from "./FilterItem";
import { IconBaseProps } from "react-icons";
import { plural } from "./ProductsCarousel";
import { useWidth } from "@hooks";


export interface BannerProps {
  backGround: string
  text: string
  description: string
  buttonText: string
}

 export interface HeroCarouselProps {
  banner: BannerProps[]
}

const Header = ({ banner }: HeroCarouselProps ) => {

  const [ width ] = useWidth()

 
const responsive = {

    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
      
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
                    autoPlay
                    autoPlaySpeed={3000}
                    centerMode={ width >= 1700}
                    className="w-full h-full space-y-4"
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

                  <div key={ban.text} className={` header mx-8`} style={{background: ban.backGround, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}} >

                    <div className="bannerBG">

                    </div>

                    <div className="w-full lg:w-[50%] h-full grid place-items-center ">

                      <div className="space-y-4 w-full grid place-items-center z-10">

                        <div className="space-y-4 p-4">
                        <p className="w-full sm:max-w-md font-thin lg:text-xl text-white lg:bg-black/30 bg-black/40 rounded-2xl p-6">{ban.description}</p>
                        <div className="flex justify-start">
                        <FilterItem modifier="p-4
                                              flex
                                              items-center
                                              justify-center
                                              gap-2
                                              rounded-full
                                              btn-sm
                                              text-blue-600
                                              text-[12px]
                                              lg: text-md bg-white" 
                                              id={0} icon={FaArrowCircleRight} text="Browse"  name={ban.text} plural={plural(ban.text)}/>
                        </div>

                        </div>

                      </div>

                    </div>

                    <div className="grid place-items-center h-full w-full md:w-[50%] p-8">

                    

                    </div>

                    </div>
                   ))}
                     
        </Carousel>

        </div>
  
        </>
};

export default Header;