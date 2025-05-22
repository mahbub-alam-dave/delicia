import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const ContextValues = createContext(null)

const ContextProvider = ({children}) => {
    const [allRecipes, setAllRecipes] = useState([])
    const [user, setUser] = useState(null)
    useEffect(()=>{
        fetch("http://localhost:3000/recipes")
        .then(res => res.json())
        .then(data => setAllRecipes(data))
    },[])

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (userProfileData) => {
        return updateProfile(auth.currentUser, userProfileData)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser) {
                setUser(currentUser)
            }
        })

        return () => {
            unSubscribe()
        }
    },[])

    const logOutUser = () => {
        return signOut(auth)
    }

    const values = {
        allRecipes,
        setAllRecipes,
        registerUser,
        loginUser,
        updateUserProfile,
        user,
        setUser,
        logOutUser
    }

    console.log(user)
    return (
        <ContextValues value={values}>
            {children}
        </ContextValues>
    );
};

export default ContextProvider;