'use client'

import { ProductsPageProps } from "@types";
import { ChangeEvent, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { categories, manufacturers } from "@constants";
import SearchBar from "./Searchbar";
import SelectFilter from "./SelectFilter";
import {LuSearchX} from "react-icons/lu"
import { CustomButton } from "@components";
import { usePathname } from "next/navigation";
import { IconBaseProps } from "react-icons";
import { GrPowerReset } from "react-icons/gr";

const AllProducts = ({ allProducts, searchParams }:  ProductsPageProps) => {

    const isDataEmpty = !Array.isArray(allProducts) || allProducts.length < 1 || !allProducts;

  const [manufacturer, setManufacturer] = useState('');
  const [year, setYear] = useState('');
  const [model, setModel] = useState('');
  const [fuel, setFuel] = useState('');
  const [category, setCategory] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  
  const path = usePathname()

  const isPath = path === "/products"

  const resetFilters = () => {
    setFilteredProducts(allProducts)
    setCategory("")
    setYear("")
    setSearchTerm("")
    setManufacturer("")
  }

  useEffect(() => {
    // Apply filters based on state variables
    const filteredResults = allProducts.filter((product, i) => {
      return (
        (!manufacturer || product.manufacturer.toLowerCase() === manufacturer.toLowerCase()) &&
        (!model || product.model.toLowerCase() === model.toLowerCase()) &&
        (!category || product.category.toLowerCase() === category.toLowerCase()) &&
        (product.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });

    // Update filtered products state
    setFilteredProducts(filteredResults);
  }, [manufacturer, year, model, fuel, checkboxChecked, category, searchTerm]);



  return (
    <div className={`px-20 ${isPath ? "pt-20" : "py-5"}`}>

      <h2 className="text-5xl font-bold my-6 ">Products</h2>
      <h2 className="text-2xl my-6">Browse the Products</h2>

      <div className="flex justify-between w-full items-center flex-wrap">
        <div className="flex w-[50%] justify-between items-center gap-4">

        <input
        onClick={resetFilters}
          className="p-2 border-2 rounded-md outline-0 font-thin w-[200px]"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products by name"
        />

        <div>

        <select className="p-2 border-2 rounded-md outline-0 bg-gray-200" name="Manufacturer" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)}>
          <option value="">Select Manufacturer</option>
          {manufacturers.sort().map((item => (<option key={item} value={item}>{item}</option>)))}
          {/* Add more options as needed */}
        </select>
      </div>

      {/* <div>
      
        <select className="p-2 border-2 rounded-md outline-0 bg-gray-200" value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Select Year</option>
        
          <option value="2022">2022</option>
          <option value="2021">2021</option>
     
        </select>
      </div> */}

      <div>
  

        <SelectFilter 
        modifier="p-2 border-2 rounded-md outline-0 bg-gray-200"
        onChange={(e) => setCategory(e.target.value)} 
        value={"Category"} 
        array={categories}        
        />
      </div>
    <div>
      
    </div>
   
        </div>
  
      
    <div>
      <CustomButton modifier="bg-gray-200 p-2" text="Reset Filters" icon={GrPowerReset} clickEvent={resetFilters}/>
    </div>


      </div>
    

      {/* Display filtered products */}
      <div className="py-10">
       
      { filteredProducts.length ?  <div className="grid grid-cols-3 gap-4">
          {filteredProducts.map((product) => ( 
          
              <ProductCard item={product}/>
         
          ))}
        </div> : 
        <div className="w-full grid place-items-center h-[300px]">
          <div className="flex flex-col gap-2 justify-center items-center text-gray-600">
            <LuSearchX className="text-7xl "/>
          <h1> No product matches your search </h1>
          </div>   
          </div>
        }
      </div>
    </div>
  )
}

export default AllProducts