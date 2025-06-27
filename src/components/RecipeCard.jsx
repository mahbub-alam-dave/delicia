import React from 'react';
import { ContextValues } from '../contexts/ContextProvider';
import getRandomButtonColors from './colorfulButton';
import { AiOutlineLike } from "react-icons/ai";
import { Link } from 'react-router';


const RecipeCard = ({recipe}) => {
  
  return (
 <div
      className={`flex flex-col gap-3 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]`}
    >
      {/* Image */}
      <div className="w-full h-60 overflow-hidden rounded-xl">
        <img
          src={recipe.url}
          alt={recipe.recipeName}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Cuisine Type Badge */}
      <span
        className="text-xs px-3 py-1 rounded-full font-medium w-fit"
        style={{
          backgroundColor: getRandomButtonColors(),
          color: "white",
        }}
      >
        {recipe.cuisineType}
      </span>

      {/* Recipe Name */}
      <h2
        className={`text-xl font-semibold leading-snug text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]`}
      >
        {recipe.recipeName.length < 40
          ? recipe.recipeName
          : recipe.recipeName.slice(0, 40) + "..."}
      </h2>

      {/* Like & Details Button */}
      <div className="flex justify-between items-center mt-auto pt-3">
        {/* Like */}
        <div className="flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-[var(--color-text-dark)] text-gray-800 btn btn-sm">
          <AiOutlineLike size={18} /> <span>{recipe.likeCount}</span>
        </div>

        {/* View Details */}
        <Link to={`/recipe-details/${recipe._id}`}>
          <button className="btn btn-sm bg-[#ff3539] hover:bg-[#e63535] text-white rounded-full px-4">
            View Details
          </button>
        </Link>
      </div>
    </div>
    );
};

export default RecipeCard;