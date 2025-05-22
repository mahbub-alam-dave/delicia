import React, { useContext, useEffect, useState } from 'react';
import { ContextValues } from '../contexts/ContextProvider';
import { Link } from 'react-router';

const MyRecipe = () => {
    const {user, allRecipes} = useContext(ContextValues)
    console.log(allRecipes)
    const [myRecipes, setMyRecipes] = useState([])
    useEffect(() => {
        const isMyRecipeExist = allRecipes.filter(recipe => recipe.author.email === user.email)
        if(isMyRecipeExist) {
            setMyRecipes(isMyRecipeExist)
        }
    },[allRecipes, user])
    return (
        <div>
            {
                myRecipes.length === 0 ?
                <div className='flex flex-col gap-4 sm:gap-6 justify-center max-h-[40vh] my-auto items-center pt-24 lg:pt-32'>
                    <h2 className="rancho text-3xl font-semibold md:text-4xl text-center">You haven't added any recipe yet!</h2>
                    <Link to={'/add-recipe'}><button className='btn text-white bg-[#ff3539]'>Add a Recipe</button></Link>
                </div>
                :
                <div>
                    <h2>{myRecipes.length}</h2>
                </div>
            }
        </div>
    );
};

export default MyRecipe;