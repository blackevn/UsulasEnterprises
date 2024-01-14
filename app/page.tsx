import { HomeProps } from "@types";

import getProducts from "./actions/getProducts";
import { ContactUs, Hero, ProductsCarousel, Services } from "@/components";


export default async function Home({ searchParams}: HomeProps) {

  const allProducts = await getProducts({
    manufacturer: searchParams.manufacturer,
    model: searchParams.model,
    category: searchParams.category,
    image: ""
  });

  const sortProducts = ( category: string) => {
    const array = [...allProducts]
    const onlyFilteredProduct = array.filter(product => product.category === category)   
    return onlyFilteredProduct
  }

  
  return (
    <main className='overflow-hidden'>
      <Hero />
      <Services/>
      {/* <AllProducts searchParams={searchParams} allProducts={allProducts}/> */}
      <ProductsCarousel 
        title={"Electric Generators"} 
        description={"Electric Generators"} 
        products={sortProducts("Electric Generator")}/>
      <ProductsCarousel 
        title={"Hose"} 
        description={"Hose"} 
        products={sortProducts("Hose")}/>
      <ProductsCarousel 
        title={"Water Pumps"} 
        description={"Water Pumps"} 
        products={sortProducts("Water Pump")}/>
      <ProductsCarousel 
        title={"Lawn Mowers"} 
        description={"Lawn Mowers"} 
        products={sortProducts("Lawn Mower")}/>
      <ContactUs/>
    </main>
  );
}
