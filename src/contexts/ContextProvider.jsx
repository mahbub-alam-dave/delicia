import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const ContextValues = createContext(null)

const provider = new GoogleAuthProvider();

const ContextProvider = ({children}) => {
    const [allRecipes, setAllRecipes] = useState([])
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [lightMode, setLightMode] = useState(false)

        const [mode, setMode] = useState(localStorage.getItem("theme") === "dark")


    useEffect(() => {
        if(mode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }
        else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [mode])

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_api_url}/recipes`)
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
        setLoading(true)
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
        loading,
        setLoading,
        mode,
        setMode,
        lightMode,
        setLightMode
    }

    // console.log(user)
    return (
        <ContextValues value={values}>
            {children}
        </ContextValues>
    );
};

export default ContextProvider;