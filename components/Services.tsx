import { services } from "@constants"
import ServicesCard from "./ServicesCard"

const Services = () => {
  return (

    <div className="py-20">
        <h2 className="capitalize text-center text-4xl text-gray-700 font-thin">What we offer</h2>
    <div className="w-full min-h-[200px] md:grid lg:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-8 p-12 space-y-4 md:space-y-0">

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