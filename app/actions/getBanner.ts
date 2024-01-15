import { AllProductsType, FilterProps } from "@types";
import { bannerData } from "@utils/bannerData";

export default async function getBanner() {
  try {

    return bannerData;

  } catch (error) {
    throw new Error("error");
  }
}
