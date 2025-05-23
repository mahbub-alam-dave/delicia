import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const RecipeIndividual = ({ recipe }) => {

  console.log(recipe.allIngredients)
  const handleUpdateMyRecipe = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { ingredients, ...othersData } = Object.fromEntries(
      formData.entries()
    );
    const allIngredients = ingredients
      .split(",")
      .map((ingredient) => ingredient.trim());
    const updatedRecipeDetails = { ...othersData, allIngredients };
    console.log(updatedRecipeDetails.allIngredients);

    fetch(
      `https://recipe-book-app-server-wheat.vercel.app/recipes/${recipe._id}`,
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
        console.log("data after updated", data);
        document.getElementById("my_modal_5").close();
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User have registered successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const buttonColors = [
    "#FF6B6B",
    "#4ECDC4",
    "#80bd30",
    "#257885",
    "#FF9F1C",
    "#8761bb",
  ];

  const getRandomButtonColors = () => {
    const randomIndex = Math.floor(Math.random() * buttonColors.length);
    return buttonColors[randomIndex];
  };

  return (
    <div className="flex flex-col items-start gap-2 bg-gray-100 p-4 rounded-2xl">
      <div className=" w-full h-[300px]">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={recipe.url}
          alt={recipe.recipeName}
        />
      </div>
      <div className="flex relative">
        <span
          className="px-3 py-[3px] rounded-lg text-xs text-white absolute -top-0 -right-18"
          style={{ backgroundColor: getRandomButtonColors() }}
        >
          {recipe.cuisineType}
        </span>
        <h2 className="text-2xl font-bold">
          {recipe.recipeName.length < 25
            ? recipe.recipeName
            : recipe.recipeName.slice(0, 25) + "..."}
        </h2>
      </div>
      <p className="text-base">
        <span className="font-semibold">Category: </span> {recipe.category}
      </p>
      <div className="flex gap-2 flex-wrap">
        <span className="text-base font-bold">Ingredients: </span>
        {recipe.allIngredients?.map((ingredient, index) => (
          <button
            key={index}
            className="btn btn-sm tex-sm bg-gray-50 text-[rgba(112,112,112,0.90)]"
          >
            {ingredient}
          </button>
        ))}
      </div>
      <p>
        <span className="text-base font-semibold">Cooking time: </span>{" "}
        {recipe.cookingTime} minutes
      </p>
      <p className="text-base">
        <span className="font-semibold">Instructions: </span>
        {recipe.instructions}
      </p>
      <div className="flex gap-3 flex-wrap">
        <div className="flex items-center justify-center btn bg-gray-50 text-base">
          <span className="text-base">{recipe.likeCount}</span>
          <AiOutlineLike size={20} />
        </div>
        <button
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="btn bg-[#ff3539] text-base text-white"
        >
          <MdModeEditOutline />
        </button>
        <button className="btn bg-[#ff3539] text-base text-white">
          <MdDelete />
        </button>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle p-4"
      >
        <div className="modal-box">
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
            <h2 className="rancho text-3xl font-semibold md:text-4xl text-[#ff3539] text-center">
              Update Recipe
            </h2>
            <form onSubmit={handleUpdateMyRecipe}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                <fieldset>
                  <label
                    htmlFor="categories"
                    className="mr-6 text-lg font-semibold"
                  >
                    Categories
                  </label>
                  <br />
                  <input
                    type="radio"
                    name="category"
                    value="Breakfast"
                    defaultChecked={recipe.category === "Breakfast"}
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
                    defaultChecked={recipe.category === "Lunch"}
                    className="mr-1"
                  />
                  <label
                    htmlFor="Lunch"
                    className="mr-3 text-[rgba(0,0,0,0.6)]"
                  >
                    Lunch
                  </label>
                  <input
                    type="radio"
                    name="category"
                    value="Dinner"
                    defaultChecked={recipe.category === "Dinner"}
                    className="mr-1"
                  />
                  <label
                    htmlFor="Dinner"
                    className="mr-3 text-[rgba(0,0,0,0.6)]"
                  >
                    Dinner
                  </label>
                  <input
                    type="radio"
                    name="category"
                    value="Dessert"
                    defaultChecked={recipe.category === "Dessert"}
                    className="mr-1"
                  />
                  <label
                    htmlFor="Dessert"
                    className="mr-3 text-[rgba(0,0,0,0.6)]"
                  >
                    Dessert
                  </label>
                  <input
                    type="radio"
                    name="category"
                    value="Vegan"
                    defaultChecked={recipe.category === "Vegan"}
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
                    defaultValue={recipe.cuisineType}
                    className="border px-3 py-[6px] rounded-sm text-[rgba(0,0,0,0.6)]"
                  >
                    <option value="Italian">Italian</option>
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
                    defaultValue={recipe.recipeName}
                    placeholder="Enter recipe name"
                    className="input w-full"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="photoUrl">Photo URL</label>
                  <input
                    type="text"
                    name="url"
                    defaultValue={recipe.url}
                    placeholder="Enter photo Url"
                    className="input w-full"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="Ingredients">Ingredients</label>
                  <input
                    type="text"
                    name="ingredients"
                    defaultValue={recipe.allIngredients?.join(", ")}
                    placeholder="Enter recipe ingredients with a comma"
                    className="input w-full"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="cookingTime">Cooking Time</label>
                  <input
                    type="number"
                    name="cookingTime"
                    defaultValue={recipe.cookingTime}
                    placeholder="Estimated cooking time"
                    className="input w-full"
                  />
                </fieldset>
              </div>
              <fieldset className="mt-4">
                <label htmlFor="instructions">Instructions</label>
                <textarea
                  name="instructions"
                  defaultValue={recipe.instructions}
                  rows="7"
                  placeholder="Enter cooking instructions"
                  className="textarea w-full"
                ></textarea>
              </fieldset>
              <button
                type="submit"
                className="btn bg-[#ff3539] text-white text-lg font-semibold w-full mt-10 rounded-2xl"
              >
                Update Recipe
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default RecipeIndividual;

/* 
I have this array "ingredients": [
          "Mutton",
          "Onions",
          "Ginger-garlic paste",
          "Tomato",
          "Garam masala",
          "Mustard oil"
        ], then I have coverted to to string by this way defaultValue={recipe.allIngredients?.map(
                      (ingredients) => ingredients
                    )} and after */