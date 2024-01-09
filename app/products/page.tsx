import React from 'react'
import ProductsPage from './ProductsPage'
import getProducts from '@app/actions/getProducts'
import { HomeProps } from '@types'

const page = async ({ searchParams }: HomeProps) => {

  const allProducts = await getProducts({
    manufacturer: searchParams.manufacturer,
    model: searchParams.model,
    category: searchParams.category
  });

  
  console.log(allProducts);
  
  return <ProductsPage 
          allProducts={allProducts} searchParams={searchParams} />
}

export default page