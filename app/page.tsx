import { HomeProps } from "@types";

import getProducts from "./actions/getProducts";
import { Brands, ContactUs, Hero, ProductsCarousel, Services } from "@/components";
import getBanner from "./actions/getBanner";


export default async function Home({ searchParams}: HomeProps) {

  const allProducts = await getProducts({
    manufacturer: searchParams.manufacturer,
    model: searchParams.model,
    category: searchParams.category,
    image: ""
  });

  const allBanners = await getBanner()

  const sortProducts = ( category: string) => {
    const array = [...allProducts]
    const onlyFilteredProduct = array.filter(product => product.category === category)   
    return onlyFilteredProduct
  }

  
  return (
    <main className='overflow-hidden'>
      <Hero banner={allBanners} />
      <Brands/>
      <Services/>
      {/* <AllProducts searchParams={searchParams} allProducts={allProducts}/> */}
      <ProductsCarousel 
        title={"Electric Generator"} 
        description={"Electric Generators"} 
        products={sortProducts("Electric Generator")}/>
      <ProductsCarousel 
        title={"Hose"} 
        description={"Hose"} 
        products={sortProducts("Hose")}/>
      <ProductsCarousel 
        title={"Water Pump"} 
        description={"Water Pumps"} 
        products={sortProducts("Water Pump")}/>
      <ProductsCarousel 
        title={"Lawn Mower"} 
        description={"Lawn Mowers"} 
        products={sortProducts("Lawn Mower")}/>
      <ContactUs/>
    </main>
  );
}
