import React, { useContext, useEffect, useState } from 'react';
import { ContextValues } from '../contexts/ContextProvider';
import { useParams } from 'react-router';
import { AiOutlineLike } from "react-icons/ai";

const RecipeDetails = () => {
    const {allRecipes} = useContext(ContextValues)
    const {id} = useParams()

    const [recipeDetails, setRecipeDetails] = useState([]);
    useEffect(() => {
        const findClickedRecipe = allRecipes.find(recipe => recipe._id ===  id);
        if(findClickedRecipe) {
            setRecipeDetails(findClickedRecipe)
        }
    }, [allRecipes, id])
    return (
        <div className='flex flex-col items-center md:flex-row gap-6 lg:gap-12 my-12'>
            <img src={recipeDetails.url} className='w-full md:max-w-[40%]  h-[450px] object-cover rounded-2xl' alt="" />
            <div className='flex flex-col gap-2 lg:gap-4 items-start'>
                <div className='flex flex-col gap-1 items-start'>
                <span className="btn btn-sm bg-[rgb(93,202,93)] text-white">{recipeDetails.cuisineType}</span>
                <h2 className='text-2xl md:text-3xl font-bold'>{recipeDetails.recipeName}</h2>
                </div>
                <p className='text-base lg:text-lg leading-[30px]'><span className='font-bold'>Category: </span>{recipeDetails.category}</p>
                <div className='flex flex-col gap-2 lg:gap-3'>
                    <span className='font-bold text-base lg:text-lg leading-[30px]'>Ingredients:</span>
                    <div className='flex flex-wrap gap-2'>
                    {
                        recipeDetails.allIngredients?.map((ingredient, index) => <span key={index} className='btn btn-sm text-sm'>{ingredient}</span>)
                    }
                    </div>
                </div>
                <p className='text-base lg:text-lg leading-[30px]'><span className='font-bold'> Instructions: </span>{recipeDetails.instructions}</p>
                <div className='flex flex-col gap-2 lg:gap-4 '>
                <p className='text-base lg:text-lg leading-[30px]'><span className='font-bold'>Cooking time:</span> {recipeDetails.cookingTime} minutes</p>
                <div className='flex items-center justify-center gap-2 btn w-full bg-[#ff3539] text-base lg:text-lg text-white hover:bg-[rgba(255,53,56,0.8)]'>
                <span>{recipeDetails.likeCount}</span>
                <AiOutlineLike size={20} />
                </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;