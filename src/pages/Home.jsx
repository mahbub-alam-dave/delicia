import React, { useContext } from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router';
import MostLikedRecipe from '../components/MostLikedRecipe';
import HomeExtraSec from '../components/HomeExtraSec';
import { ContextValues } from '../contexts/ContextProvider';

const Home = () => {
    const mostLikedRecipes = useLoaderData()
    const {lightMode} = useContext(ContextValues)
    // console.log(mostLikedRecipes)
    return (
        <div className={`${lightMode ? "bg-[#131313]" : "bg-[#ffffff]"}`}>
            <Banner />
            <MostLikedRecipe mostLikedRecipes={mostLikedRecipes}/>
            <HomeExtraSec />
        </div>
    );
};

export default Home;