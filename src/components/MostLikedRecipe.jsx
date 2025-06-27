import React from "react";
import { Link } from "react-router";

import { ContextValues } from "../contexts/ContextProvider";
import RecipeCard from "./RecipeCard";

const MostLikedRecipe = ({ mostLikedRecipes }) => {


  return (
    <div className="my-12 lg:my-16 flex flex-col items-center gap-8 lg:gap-12">
      <div className="flex flex-col gap-4">
      <h2 className="rancho text-3xl font-semibold md:text-4xl text-[#ff3539] text-center">Most Liked Recipes</h2>
      <p className={`text-gray-800 dark:text-gray-200 text-base md:text-lg text-center`}>Discover the dishes everyone’s raving about! These top-rated recipes are stealing hearts and plates — book your favorite today.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 xl:gap-8'>
      {mostLikedRecipes.map((recipe) => (
  <RecipeCard
    key={recipe._id}
    recipe={recipe}
  />
))}
    </div>
<div className="pt-6">
  <Link to="/all-recipes">
    <button className="text-lg  font-semibold bg-gray-200 text-gray-800 hover:bg-[#ff3539] hover:text-white px-6 py-3  rounded-4xl transition-all duration-300 shadow-sm hover:shadow-lg">
      Visit All Recipes
    </button>
  </Link>
</div>
    </div>

  );
};

export default MostLikedRecipe;
