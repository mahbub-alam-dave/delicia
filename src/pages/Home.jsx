import React from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router';
import MostLikedRecipe from '../components/MostLikedRecipe';
import HomeExtraSec from '../components/HomeExtraSec';

const Home = () => {
    const mostLikedRecipes = useLoaderData()
    // console.log(mostLikedRecipes)
    return (
        <div>
            <Banner />
            <MostLikedRecipe mostLikedRecipes={mostLikedRecipes}/>
            <HomeExtraSec />
        </div>
    );
};

export default Home;