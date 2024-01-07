import { services } from "@constants"
import ServicesCard from "./ServicesCard"

const Services = () => {
  return (

    <div className="">
        <h2 className="capitalize text-center text-3xl font-black">What we offer</h2>
    <div className="w-full min-h-[200px] flex justify-around gap-4 lg:gap-8 items-center flex-wrap">

        {services.map((item) => (   
        
                                    <ServicesCard 
                                    key={item.title} 
                                    title={item.title} 
                                    desc={item.desc} 
                                    image={item.image}
                                    /> 
                                    
                                    ))}
    </div>
    </div>

  )
}

export default Services