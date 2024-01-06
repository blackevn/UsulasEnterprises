import { HomeProps } from "@types";
import { fuels, yearsOfProduction } from "@constants";
import { ProductCard, ShowMore, SearchBar, CustomFilter, Hero, AllProducts } from "@components";
import getProducts from "./actions/getProducts";


export default async function Home({ searchParams, params }: HomeProps) {

  const allProducts = await getProducts({
    manufacturer: searchParams.manufacturer,
    year: searchParams?.year,
    limit: searchParams.limit,
    model: searchParams.model,
    category: searchParams.category
  });

  console.log(allProducts);
  

  return (
    <main className='overflow-hidden'>
      <Hero />
      <AllProducts searchParams={searchParams} allProducts={allProducts}/>
    </main>
  );
}
