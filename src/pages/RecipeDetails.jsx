import React, { useContext, useEffect, useState } from 'react';
import { ContextValues } from '../contexts/ContextProvider';
import { useParams } from 'react-router';

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
            <img src={recipeDetails.url} className='max-w-[40%] w-full h-[400px] object-cover' alt="" />
            <div className='flex flex-col gap-3 items-start'>
                <span className="btn btn-sm bg-[rgb(93,202,93)] text-white">{recipeDetails.cuisineType}</span>
                <h2><span className='font-bold'>Name: </span>{recipeDetails.recipeName}</h2>
                <p><span className='font-bold'>Category: </span>{recipeDetails.category}</p>
                <div className='flex flex-col gap-2'>
                    <span className='font-bold'>Ingredients:</span>
                    <div className='flex gap-2'>
                    {
                        recipeDetails.allIngredients.map(ingredient => <span className='btn btn-sm'>{ingredient}</span>)
                    }
                    </div>
                </div>
                <p><span className='font-bold'>Cooking time:</span> {recipeDetails.cookingTime} minutes</p>
                <p><span className='font-bold'> Instructions: </span>{recipeDetails.instructions}</p>
            </div>
        </div>
    );
};

export default RecipeDetails;