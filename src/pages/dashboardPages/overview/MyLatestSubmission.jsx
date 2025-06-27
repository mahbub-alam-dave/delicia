import React from 'react';

const recentRecipes = [
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
];


const MyLatestSubmission = () => {
    return (
        <div className="space-y-4">
      <h2 className="text-xl font-bold text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">My Latest Submissions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recentRecipes.map(recipe => (
          <div key={recipe.id} className="bg-[var(--color-primary)] dark:bg-gray-900 shadow rounded-xl overflow-hidden">
            <img src={recipe.image} alt={recipe.title} className="h-40 w-full object-cover" />
            <div className="p-4 space-y-1">
              <h3 className="font-semibold text-lg text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">{recipe.title}</h3>
              <p className="text-sm text-gray-500">Published: {recipe.date}</p>
              <button className="btn btn-sm btn-outline mt-2">View Recipe</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default MyLatestSubmission;