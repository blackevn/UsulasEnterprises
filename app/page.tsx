import { HomeProps } from "@types";
import { fuels, yearsOfProduction } from "@constants";
import { ProductCard, SearchBar, Hero, AllProducts, Services } from "@components";
import getProducts from "./actions/getProducts";


export default async function Home({ searchParams}: HomeProps) {

  const allProducts = await getProducts({
    manufacturer: searchParams.manufacturer,
    model: searchParams.model,
    category: searchParams.category,
    image: ""
  });

  console.log(allProducts);
  

  return (
    <main className='overflow-hidden'>
      <Hero />
      <Services/>
      <AllProducts searchParams={searchParams} allProducts={allProducts}/>
    </main>
  );
}
