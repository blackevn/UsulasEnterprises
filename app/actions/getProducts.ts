import { AllProductsType, FilterProps } from "@types";
import { AllProducts } from "@utils/productsData";

export default async function getProducts( params: AllProductsType) {
  try {

    return AllProducts;
  } catch (error) {
    throw new Error("error");
  }
}
