import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const ContextValues = createContext(null)

const provider = new GoogleAuthProvider();

const ContextProvider = ({children}) => {
    const [allRecipes, setAllRecipes] = useState([])
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch("https://recipe-book-app-server-wheat.vercel.app/recipes")
        .then(res => res.json())
        .then(data => setAllRecipes(data))
    },[])

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const updateUserProfile = (userProfileData) => {
        return updateProfile(auth.currentUser, userProfileData)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser) {
                setUser(currentUser)
            }
            setLoading(false)
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
        loginWithGoogle,
        updateUserProfile,
        user,
        setUser,
        logOutUser,
        loading
    }

    // console.log(user)
    return (
        <ContextValues value={values}>
            {children}
        </ContextValues>
    );
};

export default ContextProvider;