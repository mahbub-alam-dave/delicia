import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from "../components/Loader"

const Root = () => {
    // const {lightMode} = useContext(ContextValues)
    const {state} = useNavigation()
    return (
        <div className={`dark:bg-[#03001C]`}>
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