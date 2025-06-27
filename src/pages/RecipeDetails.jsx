import React, { useContext, useEffect, useState } from "react";
import { ContextValues } from "../contexts/ContextProvider";
import { Link, useNavigate, useParams } from "react-router";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronLeft } from "react-icons/fa6";

import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";

const RecipeDetails = () => {
  const { allRecipes, user } = useContext(ContextValues);
  const { id } = useParams();
  const navigate = useNavigate()

  const [recipeDetails, setRecipeDetails] = useState([]);
  useEffect(() => {
    const findClickedRecipe = allRecipes.find((recipe) => recipe._id === id);
    if (findClickedRecipe) {
      setRecipeDetails(findClickedRecipe);
    }
  }, [allRecipes, id]);

  const [recipeLikeCount, setRecipeLikeCount] = useState(
    recipeDetails.likeCount
  );
  const [showLikeCount, setShowLikeCount] = useState(false);

  useEffect(() => {
    setRecipeLikeCount(recipeDetails.likeCount);
  }, [recipeDetails]);

  const handleLikeBtn = () => {
    if (recipeDetails.author?.email !== user?.email) {
      recipeDetails.likeCount = recipeDetails.likeCount + 1;
      setRecipeLikeCount(recipeDetails.likeCount);

      setShowLikeCount(true);
      setTimeout(() => {
        setShowLikeCount(false);
      }, 1000);
    } else {
      Swal.fire({
        position: "top",
        icon: "error",
        title: "You can't like your own added recipe",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
  };
  return (
    <div className="py-12">
      <Link to={'/all-recipes'}>
      <div onClick={() => navigate(-1)} className="mb-4 text-[var(--color-secondary)] flex items-center gap-2">
        <div className="flex items-center">
        <FaChevronLeft size={13}/>
          <FaChevronLeft />
        </div>
        <span className="text-[var(--color-secondary)]">Go Back</span>
      </div>
      </Link>
    <div className="flex flex-col items-center md:flex-row gap-0  sm:gap-4 relative bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] rounded-2xl shadow">
      <img
        src={recipeDetails.url}
        className="w-full md:max-w-[40%] h-[450px] object-cover rounded-2xl"
        alt=""
      />
      <div className="flex flex-col gap-2 lg:gap-4 items-start p-4 sm:p-6">
        <div className="flex flex-col gap-1 items-start">
          <span className="btn btn-sm bg-[rgb(93,202,93)] text-white">
            {recipeDetails.cuisineType}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold">
            {recipeDetails.recipeName}
          </h2>
        </div>
        <p className="text-base lg:text-lg leading-[30px]">
          <span className="font-bold">Category: </span>
          {recipeDetails.category}
        </p>
        <div className="flex flex-col gap-2 lg:gap-3">
          <span className="font-bold text-base lg:text-lg leading-[30px]">
            Ingredients:
          </span>
          <div className="flex flex-wrap gap-2">
            {recipeDetails.allIngredients?.map((ingredient, index) => (
              <span key={index} className="btn btn-sm text-sm">
                {ingredient}
              </span>
            ))}
          </div>
        </div>
        <p className="text-base lg:text-lg leading-[30px]">
          <span className="font-bold"> Instructions: </span>
          {recipeDetails.instructions}
        </p>
        <div className="flex flex-col gap-2 lg:gap-4 ">
          <p className="text-base lg:text-lg leading-[30px]">
            <span className="font-bold">Cooking time:</span>{" "}
            {recipeDetails.cookingTime} minutes
          </p>
          <div
            onClick={handleLikeBtn}
            className="flex items-center justify-center gap-2 btn w-full bg-[#ff3539] text-base lg:text-lg text-white hover:bg-[rgba(255,53,56,0.8)]"
          >
            <span>{recipeLikeCount}</span>
            <AiOutlineLike size={20} />
          </div>
          {showLikeCount && (
            <Fade cascade>
              <span className="absolute -top-4 transition-all duration-75 ease-in-out bg-gray-100 px-4 py-1 rounded-xl">
                {recipeLikeCount} people interested this recipe
              </span>
            </Fade>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default RecipeDetails;
