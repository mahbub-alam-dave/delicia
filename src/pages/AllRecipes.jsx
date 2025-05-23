import React, { useContext, useEffect, useState } from 'react';
import { ContextValues } from '../contexts/ContextProvider';
import { AiOutlineLike } from "react-icons/ai";
import { Link } from 'react-router';

const AllRecipes = () => {
    const {allRecipes} = useContext(ContextValues)
    const [cuisineType, setCuisineType] = useState(allRecipes)

const buttonColors = [
  "#FF6B6B",
  "#4ECDC4",
  "#80bd30",
  "#257885",
  "#FF9F1C",
  "#8761bb"
];

const getRandomButtonColors = () => {
    const randomIndex = Math.floor(Math.random() * buttonColors.length)
    return buttonColors[randomIndex]
}

useEffect(()=> {
    setCuisineType(allRecipes)
}, [allRecipes])

// console.log(cuisineType)

const handleCuisineTypeChange = e => {
    console.log(e.target.value)
    if(e.target.value === "All") {
        setCuisineType(allRecipes)
    }
    if(e.target.value === "Italian") {
        const existedCuisine = allRecipes.filter(recipe => recipe.cuisineType === "Italian");
        setCuisineType(existedCuisine)
    }
    if(e.target.value === "Bengali") {
        const existedCuisine = allRecipes.filter(recipe => recipe.cuisineType === "Bengali");
        setCuisineType(existedCuisine)
    }
    if(e.target.value === "Mexican") {
        const existedCuisine = allRecipes.filter(recipe => recipe.cuisineType === "Mexican");
        setCuisineType(existedCuisine)
    }
    if(e.target.value === "Indian") {
        const existedCuisine = allRecipes.filter(recipe => recipe.cuisineType === "Indian");
        setCuisineType(existedCuisine)
    }
    if(e.target.value === "Chinese") {
        const existedCuisine = allRecipes.filter(recipe => recipe.cuisineType === "Chinese");
        setCuisineType(existedCuisine)
    }
    if(e.target.value === "Others") {
        const existedCuisine = allRecipes.filter(recipe => recipe.cuisineType === "Others");
        setCuisineType(existedCuisine)
    }
}


    return (
        <div className='my-12 flex flex-col gap-8 lg:gap-12'>
           <h2 className="rancho text-3xl font-semibold md:text-4xl text-[#ff3539] text-center">Find All Delicious Recipes Here</h2> 
           <div className='flex gap-2 items-center justify-center text-lg lg:text-xl text-center'>
            <span >Sort by</span>
            <fieldset>
              <label
                htmlFor="cuisineType"
                className="mr-3 text-lg font-semibold"
              >
                Cuisine type
              </label>
              <select
                name="cuisineType"
                onChange={handleCuisineTypeChange}
                id=""
                className="border px-3 py-[6px] rounded-sm text-[rgba(0,0,0,0.6)]"
              >
                <option defaultChecked="All" value="All">All</option>
                <option value="Italian">Italian</option>
                <option value="Mexican">Mexican</option>
                <option value="Bengali">Bengali</option>
                <option value="Indian">Indian</option>
                <option value="Chinese">Chinese</option>
                <option value="Others">Others</option>
              </select>
            </fieldset>
           </div>
           {
            cuisineType.length <1 ? 
                <div className='flex justify-center items-center  pt-12'>
                    <h2 className='text-3xl font-semibold text-center'>No recipe found !</h2>
                </div>
                :
           
           <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 xl:gap-8'>
            {
                cuisineType.map(recipe => {
                    return(
                        <div key={recipe._id} className='flex flex-col items-start gap-4 bg-gray-100 p-4 rounded-2xl'> 
                        <div className=' w-full h-[300px]'>
                            <img className='w-full h-full object-cover rounded-2xl' src={recipe.url} alt={recipe.recipeName} />
                        </div>
                        <span className="btn btn-sm text-white" style={{backgroundColor: getRandomButtonColors()}}>{recipe.cuisineType}</span>
                        {/* create me a array of 6 color code for button bg for category page. and create a functionality to set bg randomly by that array */}
                        <h2 className='text-2xl font-bold'>{recipe.recipeName.length < 25 ? recipe.recipeName : recipe.recipeName.slice(0, 25) + "..."}</h2>
                        <div className='flex gap-4 sm:gap-5'>
                        <div className='flex items-center justify-center btn bg-gray-50 text-base text-black'>
                        <span>{recipe.likeCount}</span>
                        <AiOutlineLike size={20} />
                        </div>
                        <Link to={`/recipe-details/${recipe._id}`}><button className='btn bg-[#ff3539] text-base text-white'>View Details</button></Link>
                        </div>
                        </div>
                    )
                })
            }
           </div>
}
        </div>
    );
};

export default AllRecipes;