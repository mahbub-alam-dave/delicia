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
    fetch(`${import.meta.env.VITE_api_url}/recipes`, {
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
    <div className="py-12 flex justify-center items-center max-w-[800px] mx-auto">
      <div className="bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] rounded-2xl w-full flex flex-col gap-6 md:gap-8 p-6 sm:p-8 text-[var(--color-light)] dark:text-[var(--color-text-dark)] shadow">
        <h2 className="rancho text-3xl font-semibold md:text-4xl text-center">
          Add A Recipe
        </h2>
        <form onSubmit={handleAddRecipeForm}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                className="mr-1 mt-2 "
              />
              <label
                htmlFor="breakfast"
                className="mr-3"
              >
                Breakfast
              </label>
              <input
                type="radio"
                name="category"
                value="Lunch"
                defaultChecked="Lunch"
                className="mr-1"
              />
              <label htmlFor="Lunch" className="mr-3">
                Lunch
              </label>
              <input
                type="radio"
                name="category"
                value="Dinner"
                className="mr-1"
              />
              <label htmlFor="Dinner" className="mr-3">
                Dinner
              </label>
              <input
                type="radio"
                name="category"
                value="Dessert"
                className="mr-1"
              />
              <label htmlFor="Dessert" className="mr-3">
                Dessert
              </label>
              <input
                type="radio"
                name="category"
                value="Vegan"
                className="mr-1"
              />
              <label htmlFor="Vegan" className="">
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
                className="border px-3 py-[6px] rounded-sm"
              >
                <option defaultValue="Italian" value="Italian" className="bg-gray-600">
                  Italian
                </option>
                <option value="Mexican" className="bg-gray-600">Mexican</option>
                <option value="Bengali" className="bg-gray-600">Bengali</option>
                <option value="Indian" className="bg-gray-600">Indian</option>
                <option value="Chinese" className="bg-gray-600">Chinese</option>
                <option value="Others" className="bg-gray-600">Others</option>
              </select>
            </fieldset>
            <fieldset>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="recipeName"
                placeholder="Enter recipe name"
                className="input w-full bg-transparent border-[var(--color-text-light)] dark:border-[var(--color-text-dark)] mt-2"
                required
              />
            </fieldset>
            <fieldset>
              <label htmlFor="photoUrl">Photo URL</label>
              <input
                type="text"
                name="url"
                placeholder="Enter photo Url"
                className="input w-full bg-transparent border-[var(--color-text-light)] dark:border-[var(--color-text-dark)] mt-2"
                required
              />
            </fieldset>
            <fieldset>
              <label htmlFor="Ingredients">Ingredients</label>
              <input
                type="text"
                name="ingredients"
                placeholder="Enter recipe ingredients with a comma"
                className="input w-full bg-transparent border-[var(--color-text-light)] dark:border-[var(--color-text-dark)] mt-2"
                required
              />
            </fieldset>
            <fieldset>
              <label htmlFor="cookingTime">Cooking Time</label>
              <input
                type="number"
                name="cookingTime"
                placeholder="Estimated cooking time"
                className="input w-full bg-transparent border-[var(--color-text-light)] dark:border-[var(--color-text-dark)] mt-2"
                required
              />
            </fieldset>
          </div>
          <fieldset className="mt-4">
            <label htmlFor="instructions">Instructions</label>
            <textarea
              name="instructions"
              placeholder="Enter cooking instructions"
              className="textarea w-full bg-transparent border-[var(--color-text-light)] dark:border-[var(--color-text-dark)] mt-2"
              required
            ></textarea>
          </fieldset>
          <button
            type="submit"
            className="btn bg-[#ff3539] text-white text-lg font-semibold w-full mt-6 rounded-3xl"
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
