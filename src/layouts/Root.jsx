import React, { useContext } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ContextValues } from '../contexts/ContextProvider';
import Loader from "../components/Loader"

const Root = () => {
    const {lightMode} = useContext(ContextValues)
    const {state} = useNavigation()
    return (
        <div className={`${lightMode ? "bg-[#131313]" : "bg-[#ffffff]"}`}>
            <Header />
            <div className='min-h-[60vh] max-w-11/12 mx-auto mt-0'>
                {
                    state === "loading" ?
                    <Loader />
                    :
                    <Outlet />
                }
            </div>
            <Footer />
        </div>
    );
};

export default Root;