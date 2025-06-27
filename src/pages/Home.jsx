import React from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router';
import MostLikedRecipe from '../components/MostLikedRecipe';
import HomeExtraSec from '../components/HomeExtraSec';
import { ContextValues } from '../contexts/ContextProvider';

const Home = () => {
    const mostLikedRecipes = useLoaderData()

    return (
        <div className={`dark:bg-[#03001C]`}>
            <Banner />
            <MostLikedRecipe mostLikedRecipes={mostLikedRecipes}/>
            <HomeExtraSec />
        </div>
    );
};

export default Home;