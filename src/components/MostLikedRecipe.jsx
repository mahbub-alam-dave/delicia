import React from "react";
import { Link } from "react-router";
import { AiOutlineLike } from "react-icons/ai";

const MostLikedRecipe = ({ mostLikedRecipes }) => {

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
  return (
    <div className="my-12 lg:my-16 flex flex-col items-center gap-8 lg:gap-12">
      <div className="flex flex-col gap-4">
      <h2 className="rancho text-3xl font-semibold md:text-4xl text-[#ff3539] text-center">Most Liked Recipes</h2>
      <p className="text-base md:text-lg text-center">Discover the dishes everyone’s raving about! These top-rated recipes are stealing hearts and plates — book your favorite today.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 xl:gap-8'>
      {mostLikedRecipes.map((recipe) => {
        return (
          <div
            key={recipe._id}
            className="flex flex-col items-start gap-4 bg-gray-100 p-4 rounded-2xl"
          >
            <div className=" w-full h-[300px]">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={recipe.url}
                alt={recipe.recipeName}
              />
            </div>
            <span
              className="btn btn-sm text-white"
              style={{ backgroundColor: getRandomButtonColors() }}
            >
              {recipe.cuisineType}
            </span>
            {/* create me a array of 6 color code for button bg for category page. and create a functionality to set bg randomly by that array */}
            <h2 className="text-2xl font-bold">
              {recipe.recipeName.length < 25
                ? recipe.recipeName
                : recipe.recipeName.slice(0, 25) + "..."}
            </h2>
            <div className="flex gap-4 sm:gap-5">
              <div className="flex items-center justify-center btn bg-gray-50 text-base text-black">
                <span>{recipe.likeCount}</span>
                <AiOutlineLike size={20} />
              </div>
              <Link to={`/recipe-details/${recipe._id}`}>
                <button className="btn bg-[#ff3539] text-base text-white">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
    <div className="pt-6">
      <Link to={'/all-recipes'}><button className=" text-lg md:text-xl font-semibold bg-gray-200 text-black hover:bg-[#ff3539] px-4 py-2 rounded-lg sm:px-6 lg:px-8 sm:py-4 hover:text-white">Visit All Recipes</button></Link>
    </div>
    </div>

  );
};

export default MostLikedRecipe;
