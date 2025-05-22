import React from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router';
import MostLikedRecipe from '../components/MostLikedRecipe';

const Home = () => {
    const mostLikedRecipes = useLoaderData()
    console.log(mostLikedRecipes)
    return (
        <div>
            <Banner />
            <MostLikedRecipe mostLikedRecipes={mostLikedRecipes}/>
        </div>
    );
};

export default Home;