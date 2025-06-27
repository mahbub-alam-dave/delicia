import React, { useContext, useEffect, useState } from "react";
import { ContextValues } from "../contexts/ContextProvider";
import Loader from "../components/Loader";
import RecipeCard from "../components/RecipeCard";

const AllRecipes = () => {
  const { allRecipes, loading } = useContext(ContextValues);
  const [cuisineType, setCuisineType] = useState(allRecipes);

  useEffect(() => {
    setCuisineType(allRecipes);
  }, [allRecipes]);

  const handleCuisineTypeChange = (e) => {
    if (e.target.value === "All") {
      setCuisineType(allRecipes);
    }
    if (e.target.value === "Italian") {
      const existedCuisine = allRecipes.filter(
        (recipe) => recipe.cuisineType === "Italian"
      );
      setCuisineType(existedCuisine);
    }
    if (e.target.value === "Bengali") {
      const existedCuisine = allRecipes.filter(
        (recipe) => recipe.cuisineType === "Bengali"
      );
      setCuisineType(existedCuisine);
    }
    if (e.target.value === "Mexican") {
      const existedCuisine = allRecipes.filter(
        (recipe) => recipe.cuisineType === "Mexican"
      );
      setCuisineType(existedCuisine);
    }
    if (e.target.value === "Indian") {
      const existedCuisine = allRecipes.filter(
        (recipe) => recipe.cuisineType === "Indian"
      );
      setCuisineType(existedCuisine);
    }
    if (e.target.value === "Chinese") {
      const existedCuisine = allRecipes.filter(
        (recipe) => recipe.cuisineType === "Chinese"
      );
      setCuisineType(existedCuisine);
    }
    if (e.target.value === "Others") {
      const existedCuisine = allRecipes.filter(
        (recipe) => recipe.cuisineType === "Others"
      );
      setCuisineType(existedCuisine);
    }
  };

  return (
    <div className="my-12 flex flex-col gap-8 lg:gap-12 justify-center items-center">
      <h2 className="rancho text-3xl font-semibold md:text-4xl text-[#ff3539] text-center">
        Find All Delicious Recipes Here
      </h2>
      <div className="flex gap-2 items-center justify-center text-lg lg:text-xl text-center text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
        <span>Sort by</span>
        <fieldset>
          <label htmlFor="cuisineType" className="mr-3 text-lg font-semibold">
            Cuisine type
          </label>
          <select
            name="cuisineType"
            onChange={handleCuisineTypeChange}
            id=""
            className="border px-3 py-[6px] rounded-sm text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]"
          >
            <option defaultChecked="All" value="All" className="dark:bg-gray-600">
              All
            </option>
            <option value="Italian" className="dark:bg-gray-600">Italian</option>
            <option value="Mexican" className="dark:bg-gray-600">Mexican</option>
            <option value="Bengali" className="dark:bg-gray-600">Bengali</option>
            <option value="Indian" className="dark:bg-gray-600">Indian</option>
            <option value="Chinese" className="dark:bg-gray-600">Chinese</option>
            <option value="Others" className="dark:bg-gray-600">Others</option>
          </select>
        </fieldset>
      </div>
      {loading ? (
        <Loader />
      ) : cuisineType.length < 1 ? (
        <div className="flex justify-center items-center pt-12">
          <h2 className="text-3xl font-semibold text-center">
            No recipe found !
          </h2>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 xl:gap-8 ">
            {cuisineType.map((recipe) => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
          </div>
          <div className="flex justify-center">
              <button className="text-lg font-semibold bg-gray-100 text-gray-800 hover:bg-[#ff3539] hover:text-white px-6 py-3 rounded-4xl transition-all duration-300 shadow-sm hover:shadow-lg">
                View More
              </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AllRecipes;

// /*
//  */
