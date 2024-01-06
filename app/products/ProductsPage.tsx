
import { ProductsPageProps } from '@types'
import { AllProducts, } from '@components'

const ProductsPage: React.FC<ProductsPageProps> = ({ allProducts, searchParams }) => {

  return    <AllProducts searchParams={searchParams} allProducts={allProducts}/>
  
}

export default ProductsPage