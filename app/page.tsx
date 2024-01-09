import { HomeProps } from "@types";
import { fuels, yearsOfProduction } from "@constants";
import { ProductCard, ShowMore, SearchBar, CustomFilter, Hero, AllProducts, Services } from "@components";
import getProducts from "./actions/getProducts";


export default async function Home({ searchParams}: HomeProps) {

  const allProducts = await getProducts({
    manufacturer: searchParams.manufacturer,
    model: searchParams.model,
    category: searchParams.category
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
