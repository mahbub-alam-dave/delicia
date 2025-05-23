import React, { useContext, useEffect, useState } from 'react';
import { ContextValues } from '../contexts/ContextProvider';
import { Link } from 'react-router';
import RecipeIndividual from '../components/RecipeIndividual'
import Swal from 'sweetalert2';


const MyRecipe = () => {

    const {user, allRecipes, setAllRecipes} = useContext(ContextValues)
    const [myRecipes, setMyRecipes] = useState([])

    useEffect(() => {
        const isMyRecipeExist = allRecipes.filter(recipe => recipe.author.email === user.email)
        if(isMyRecipeExist) {
            setMyRecipes(isMyRecipeExist)
        }
    },[allRecipes, user])

      const handleUpdateMyRecipe = (e, id) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const { ingredients, ...othersData } = Object.fromEntries(
          formData.entries()
        );
        const allIngredients = ingredients
          .split(",")
          .map((ingredient) => ingredient.trim());
        const updatedRecipeDetails = { ...othersData, allIngredients };
    
        fetch(
          `https://recipe-book-app-server-wheat.vercel.app/recipes/${id}`,
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updatedRecipeDetails),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            document.getElementById(id).close();
            if (data.modifiedCount) {
              setAllRecipes(allRecipes.map(recipe => recipe._id === id ? {...recipe, ...updatedRecipeDetails} : recipe))
              e.target.reset()
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Recipe has updated successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      };


        const handleDeleteMyRecipe = id => {
    fetch(`https://recipe-book-app-server-wheat.vercel.app/recipes/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount) {
        const remainingRecipe = allRecipes.filter(recipe => recipe._id !== id)
        setAllRecipes(remainingRecipe)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Recipe has deleted successfully",
            showConfirmButton: false,
            timer: 1500,
          });
      }
    })
  }

    return (
        <div>
            {
                myRecipes.length === 0 ?
                <div className='flex flex-col gap-4 sm:gap-6 justify-center max-h-[40vh] my-auto items-center pt-24 lg:pt-32'>
                    <h2 className="rancho text-3xl font-semibold md:text-4xl text-center">You haven't added any recipe yet!</h2>
                    <Link to={'/add-recipe'}><button className='btn text-white bg-[#ff3539]'>Add a Recipe</button></Link>
                </div>
                :
                <div className='my-8 flex flex-col gap-8 lg:gap-12'>
                           <h2 className="rancho text-3xl font-semibold md:text-4xl text-[#ff3539] text-center">Your Added Recipes</h2> 
                           <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 xl:gap-8'>
                            {
                                myRecipes.map(recipe => <RecipeIndividual 
                                    key={recipe._id} recipe={recipe}
                                    handleUpdateMyRecipe={handleUpdateMyRecipe}
                                    handleDeleteMyRecipe={handleDeleteMyRecipe}/>)
                            }
                            </div>
                </div>
            }
        </div>
    );

};
export default MyRecipe;