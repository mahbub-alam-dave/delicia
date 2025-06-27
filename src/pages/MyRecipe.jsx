import React, { useContext, useEffect, useState } from "react";
import { ContextValues } from "../contexts/ContextProvider";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";

const MyRecipe = () => {
  const { user, allRecipes, setAllRecipes } = useContext(ContextValues);
  const [myRecipes, setMyRecipes] = useState([]);

  useEffect(() => {
    const isMyRecipeExist = allRecipes.filter(
      (recipe) => recipe.author.email === user.email
    );
    if (isMyRecipeExist) {
      setMyRecipes(isMyRecipeExist);
    }
  }, [allRecipes, user]);

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

    fetch(`${import.meta.env.VITE_api_url}/recipes/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedRecipeDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        document.getElementById(id).close();
        if (data.modifiedCount) {
          setAllRecipes(
            allRecipes.map((recipe) =>
              recipe._id === id
                ? { ...recipe, ...updatedRecipeDetails }
                : recipe
            )
          );
          e.target.reset();
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

  const handleDeleteMyRecipe = (id) => {
    fetch(`${import.meta.env.VITE_api_url}/recipes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remainingRecipe = allRecipes.filter(
            (recipe) => recipe._id !== id
          );
          setAllRecipes(remainingRecipe);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Recipe has deleted successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      {myRecipes.length === 0 ? (
        <div className="flex flex-col gap-4 sm:gap-6 justify-center max-h-[40vh] my-auto items-center pt-24 lg:pt-32">
          <h2 className="rancho text-3xl font-semibold md:text-4xl text-center">
            You haven't added any recipe yet!
          </h2>
          <Link to={"/add-recipe"}>
            <button className="btn text-white bg-[#ff3539]">
              Add a Recipe
            </button>
          </Link>
        </div>
      ) : (
        <div className="my-8 flex flex-col gap-8">
          <h3 className="font-bold text-xl text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            My Added Recipes
          </h3>

          <div className="overflow-x-auto rounded-2xl shadow-lg dark:bg-gray-900">
            <table className="table w-full text-left ">
              <thead>
                <tr className=" text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] border-b border-[var(--color-text-light)]">
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Cuisine Type</th>
                  <th className="px-4 py-3 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {myRecipes.map((recipe) => (
                  <tr
                    key={recipe._id}
                    className="border-t border-[var(--color-text-light)] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition "
                  >
                    <td className="px-4 py-3 font-medium text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
                      {recipe.recipeName}
                    </td>
                    <td className="px-4 py-3">{recipe.category}</td>
                    <td className="px-4 py-3">{recipe.cuisineType}</td>

                    <td className="px-4 py-3 flex gap-2 justify-center items-center">
                      {/* View */}
                      <Link to={`/recipe-details/${recipe._id}`}>
                        <button className="btn btn-sm bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full px-3">
                          <FaEye />
                        </button>
                      </Link>

                      {/* Edit */}
                      <button
                        onClick={() =>
                          document.getElementById(recipe._id).showModal()
                        }
                        className="btn btn-sm bg-[#ff3539] text-base text-white"
                      >
                        <MdModeEditOutline />
                      </button>

                      {/* Delete */}
                      <button
                        onClick={() => handleDeleteMyRecipe(recipe._id)}
                        className="btn btn-sm bg-red-500 hover:bg-red-600 text-white rounded-full px-3"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                    <dialog
                      id={recipe._id}
                      className="modal modal-bottom sm:modal-middle p-4 "
                    >
                      <div className="modal-box dark:bg-[var(--color-primary-dark)] shadow">
                        <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 ">
                          <h2 className="rancho text-3xl font-semibold md:text-4xl text-center">
                            Update Recipe
                          </h2>
                          <form
                            onSubmit={(e) =>
                              handleUpdateMyRecipe(e, recipe._id)
                            }
                          >
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
                                  defaultChecked={
                                    recipe.category === "Breakfast"
                                  }
                                  className="mr-1 mt-2 "
                                />
                                <label htmlFor="breakfast" className="mr-3 ">
                                  Breakfast
                                </label>
                                <input
                                  type="radio"
                                  name="category"
                                  value="Lunch"
                                  defaultChecked={recipe.category === "Lunch"}
                                  className="mr-1"
                                />
                                <label htmlFor="Lunch" className="mr-3 ">
                                  Lunch
                                </label>
                                <input
                                  type="radio"
                                  name="category"
                                  value="Dinner"
                                  defaultChecked={recipe.category === "Dinner"}
                                  className="mr-1"
                                />
                                <label htmlFor="Dinner" className="mr-3 ">
                                  Dinner
                                </label>
                                <input
                                  type="radio"
                                  name="category"
                                  value="Dessert"
                                  defaultChecked={recipe.category === "Dessert"}
                                  className="mr-1"
                                />
                                <label htmlFor="Dessert" className="mr-3 ">
                                  Dessert
                                </label>
                                <input
                                  type="radio"
                                  name="category"
                                  value="Vegan"
                                  defaultChecked={recipe.category === "Vegan"}
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
                                  defaultValue={recipe.cuisineType}
                                  className="border px-3 py-[6px] rounded-sm "
                                >
                                  <option
                                    value="Italian"
                                    className="bg-gray-600"
                                  >
                                    Italian
                                  </option>
                                  <option
                                    value="Mexican"
                                    className="bg-gray-600"
                                  >
                                    Mexican
                                  </option>
                                  <option
                                    value="Bengali"
                                    className="bg-gray-600"
                                  >
                                    Bengali
                                  </option>
                                  <option
                                    value="Indian"
                                    className="bg-gray-600"
                                  >
                                    Indian
                                  </option>
                                  <option
                                    value="Chinese"
                                    className="bg-gray-600"
                                  >
                                    Chinese
                                  </option>
                                  <option
                                    value="Others"
                                    className="bg-gray-600"
                                  >
                                    Others
                                  </option>
                                </select>
                              </fieldset>
                              <fieldset>
                                <label htmlFor="name">Name</label>
                                <input
                                  type="text"
                                  name="recipeName"
                                  defaultValue={recipe.recipeName}
                                  placeholder="Enter recipe name"
                                  className="input w-full bg-transparent border-[var(--color-text-light)] dark:border-[var(--color-text-dark)]"
                                />
                              </fieldset>
                              <fieldset>
                                <label htmlFor="photoUrl">Photo URL</label>
                                <input
                                  type="text"
                                  name="url"
                                  defaultValue={recipe.url}
                                  placeholder="Enter photo Url"
                                  className="input w-full bg-transparent border-[var(--color-text-light)] dark:border-[var(--color-text-dark)]"
                                />
                              </fieldset>
                              <fieldset>
                                <label htmlFor="Ingredients">Ingredients</label>
                                <input
                                  type="text"
                                  name="ingredients"
                                  defaultValue={recipe.allIngredients?.join(
                                    ", "
                                  )}
                                  placeholder="Enter recipe ingredients with a comma"
                                  className="input w-full bg-transparent border-[var(--color-text-light)] dark:border-[var(--color-text-dark)]"
                                />
                              </fieldset>
                              <fieldset>
                                <label htmlFor="cookingTime">
                                  Cooking Time
                                </label>
                                <input
                                  type="number"
                                  name="cookingTime"
                                  defaultValue={recipe.cookingTime}
                                  placeholder="Estimated cooking time"
                                  className="input w-full bg-transparent border-[var(--color-text-light)] dark:border-[var(--color-text-dark)]"
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
                                className="textarea w-full bg-transparent border-[var(--color-text-light)] dark:border-[var(--color-text-dark)]"
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
export default MyRecipe;

