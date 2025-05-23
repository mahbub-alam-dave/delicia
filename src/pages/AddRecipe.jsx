import React, { useContext } from "react";
import Swal from "sweetalert2";
import { ContextValues } from "../contexts/ContextProvider";
import { useNavigate } from "react-router";

const AddRecipe = () => {
  const { user, allRecipes, setAllRecipes } = useContext(ContextValues);
  const navigate = useNavigate();

  const handleAddRecipeForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { ingredients, ...othersData } = Object.fromEntries(
      formData.entries()
    );
    const allIngredients = ingredients
      .split(",")
      .map((ingredient) => ingredient.trim());
    // console.log(allIngredients)
    othersData.likeCount = 0;
    othersData.author = { name: user?.displayName, email: user?.email };

    const newRecipe = { ...othersData, allIngredients };

    // console.log(recipeDetails);

    // add recipe to database
    fetch("https://recipe-book-app-server-wheat.vercel.app/recipes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          navigate("/all-recipes");
/*           setAllRecipes((prevRecipes) =>
            prevRecipes.map((recipe) =>
              recipe._id === recipeDetails._id ? recipeDetails : recipe
            )
          ); */
          newRecipe._id = data.insertedId;
          setAllRecipes([...allRecipes, newRecipe])
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your recipe has been added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="mt-8 flex justify-center items-center bg-gray-50 rounded-2xl">
      <div className="w-full flex flex-col  gap-6 md:gap-8 lg:gap-12  p-6 sm:p-10 md:p-12 lg:p-16">
        <h2 className="rancho text-3xl font-semibold md:text-4xl text-[#ff3539] text-center">
          Add A Recipe
        </h2>
        <form onSubmit={handleAddRecipeForm}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
            <fieldset>
              <label
                htmlFor="categories"
                className="mr-6 text-lg font-semibold"
              >
                Categories
              </label>{" "}
              <br />
              <input
                type="radio"
                name="category"
                value="Breakfast"
                className="mr-1 mt-2 text-[rgba(0,0,0,0.6)]"
              />
              <label
                htmlFor="breakfast"
                className="mr-3 text-[rgba(0,0,0,0.6)]"
              >
                Breakfast
              </label>
              <input
                type="radio"
                name="category"
                value="Lunch"
                className="mr-1"
              />
              <label htmlFor="Lunch" className="mr-3 text-[rgba(0,0,0,0.6)]">
                Lunch
              </label>
              <input
                type="radio"
                name="category"
                value="Dinner"
                className="mr-1"
              />
              <label htmlFor="Dinner" className="mr-3 text-[rgba(0,0,0,0.6)]">
                Dinner
              </label>
              <input
                type="radio"
                name="category"
                value="Dessert"
                className="mr-1"
              />
              <label htmlFor="Dessert" className="mr-3 text-[rgba(0,0,0,0.6)]">
                Dessert
              </label>
              <input
                type="radio"
                name="category"
                value="Vegan"
                className="mr-1"
              />
              <label htmlFor="Vegan" className="text-[rgba(0,0,0,0.6)]">
                Vegan
              </label>
            </fieldset>
            <fieldset>
              <label
                htmlFor="cuisineType"
                className="mr-3 text-lg font-semibold"
              >
                Cuisine type
              </label>
              <select
                name="cuisineType"
                id=""
                className="border px-3 py-[6px] rounded-sm text-[rgba(0,0,0,0.6)]"
              >
                <option defaultValue="Italian" value="Italian">
                  Italian
                </option>
                <option value="Mexican">Mexican</option>
                <option value="Bengali">Bengali</option>
                <option value="Indian">Indian</option>
                <option value="Chinese">Chinese</option>
                <option value="Others">Others</option>
              </select>
            </fieldset>
            <fieldset>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="recipeName"
                placeholder="Enter recipe name"
                className="input w-full"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="photoUrl">Photo URL</label>
              <input
                type="text"
                name="url"
                placeholder="Enter photo Url"
                className="input w-full"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="Ingredients">Ingredients</label>
              <input
                type="text"
                name="ingredients"
                placeholder="Enter recipe ingredients with a comma"
                className="input w-full"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="cookingTime">Cooking Time</label>
              <input
                type="number"
                name="cookingTime"
                placeholder="Estimated cooking time"
                className="input w-full"
              />
            </fieldset>
          </div>
          <fieldset className="mt-4">
            <label htmlFor="instructions">Instructions</label>
            <textarea
              name="instructions"
              rows="7"
              placeholder="Enter cooking instructions"
              className="textarea w-full"
            ></textarea>
          </fieldset>
          <button
            type="submit"
            className="btn bg-[#ff3539] text-white text-lg font-semibold w-full mt-10 rounded-2xl"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;

/* 
https://i.ibb.co/ynJbRnWc/backed-garlic-chilli.jpg
https://i.ibb.co/S4m8Np1c/beef-kabab.jpg
https://i.ibb.co/670ZcxcL/beef-stack.jpg
https://i.ibb.co/HfHCpfmd/blueberry-juice.jpg
https://i.ibb.co/JwY5R7rY/butter-nun.jpg
https://i.ibb.co/gbxXrZvf/chaumin-with-red-sauce.jpg
https://i.ibb.co/ccHRjc9p/delicia-logo.png
https://i.ibb.co/jkq4KPn7/desert-fruit.jpg
https://i.ibb.co/Q3dMQ7x3/eggplant-roast.jpg
https://i.ibb.co/Z16q4zYZ/fruit-pudding.jpg
https://i.ibb.co/RpypR7Dz/logo-dark.png
https://i.ibb.co/r2xT73mG/mutton-rezala.jpg
https://i.ibb.co/99Jq6dvP/pasta-with-vegetables.jpg
https://i.ibb.co/KcZNxGns/pizza.jpg
https://i.ibb.co/Ps1G8TWx/rezala.jpg */
