import React, { createContext, useEffect, useState } from 'react';

export const ContextValues = createContext(null)

const ContextProvider = ({children}) => {
    const [allRecipes, setAllRecipes] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/recipes")
        .then(res => res.json())
        .then(data => setAllRecipes(data))
    },[])

    // console.log(allRecipes)

    const values = {
        allRecipes,
        setAllRecipes
    }
    return (
        <ContextValues value={values}>
            {children}
        </ContextValues>
    );
};

export default ContextProvider;