import React, { useContext, useEffect, useState } from 'react';
import { ContextValues } from '../../../contexts/ContextProvider';
import { format } from 'date-fns';
import { Link } from 'react-router';

/* const recentRecipes = [
  {
    id: 1,
    title: 'Spicy Butter Chicken',
    image: 'https://i.ibb.co/1Xj0JXn/chicken.jpg',
    date: '2025-06-25',
  },
  {
    id: 2,
    title: 'Creamy Pasta',
    image: 'https://i.ibb.co/4TfjDqz/pasta.jpg',
    date: '2025-06-22',
  },
  {
    id: 3,
    title: 'Mango Smoothie',
    image: 'https://i.ibb.co/k3GpP3g/smoothie.jpg',
    date: '2025-06-20',
  },
]; */



const MyLatestSubmission = () => {

  const {user} = useContext(ContextValues)


  const [myLatestRecipes, setMyLatestRecipes] = useState([])
  
  useEffect(()=> {
    fetch(`${import.meta.env.VITE_api_url}/my-recent-recipes?email=${user?.email}`)
    .then(res => res.json())
    .then(data => {
      setMyLatestRecipes(data)
    })

  },[user])
    return (
        <div className="space-y-4">
      <h2 className="text-xl font-bold text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">My Latest Submissions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {myLatestRecipes.map(recipe => (
          <div key={recipe._id} className="bg-[var(--color-primary)] dark:bg-gray-900 shadow rounded-xl overflow-hidden">
            <img src={recipe.url} alt={recipe.title} className="h-50 w-full object-cover" />
            <div className="p-4 space-y-1">
              <h3 className="font-semibold text-lg text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">{recipe.title}</h3>
              <p className="text-sm text-gray-500">Last Modified: {new Date(recipe.createdAt).toLocaleString()}</p>
              <Link to={`/recipe-details/${recipe._id}`}><button className="btn btn-sm btn-outline mt-2">View Recipe</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default MyLatestSubmission;