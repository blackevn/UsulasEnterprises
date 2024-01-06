'use client'

import { ProductsPageProps } from "@types";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { categories, manufacturers } from "@constants";
import SearchBar from "./Searchbar";


const AllProducts = ({ allProducts, searchParams }:  ProductsPageProps) => {

    const isDataEmpty = !Array.isArray(allProducts) || allProducts.length < 1 || !allProducts;

    const [manufacturer, setManufacturer] = useState('');
  const [year, setYear] = useState('');
  const [model, setModel] = useState('');
  const [fuel, setFuel] = useState('');
  const [category, setCategory] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    // Apply filters based on state variables
    const filteredResults = allProducts.filter((product) => {
      return (
        (!manufacturer || product.manufacturer.toLowerCase() === manufacturer.toLowerCase()) &&
        (!year || product.year.toString() === year) &&
        (!model || product.model.toLowerCase() === model.toLowerCase()) &&
        (!category || product.category.toLowerCase() === category.toLowerCase())
      );
    });

    // Update filtered products state
    setFilteredProducts(filteredResults);
  }, [manufacturer, year, model, fuel, checkboxChecked, category]);

  return (
    <div className="p-20">

      <div className="flex justify-between w-full items-center">
        <div>
    
        <select name="Manufacturere" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)}>
          <option value="">Select Manufacturer</option>
          {manufacturers.map((item => (<option key={item} value={item}>{item}</option>)))}
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
      
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Select Year</option>
          {/* Add options dynamically based on available years */}
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
     
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          {/* Add options dynamically based on available years */}
          {categories.map(item => (<option key={item} value={item}>{item}</option>))}
          {/* Add more options as needed */}
        </select>
      </div>
   
    
  
      </div>
    

      {/* Display filtered products */}
      <div>
        <h2>Products</h2>
        <div>
          {filteredProducts.map((product) => (
            <ProductCard item={product}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllProducts