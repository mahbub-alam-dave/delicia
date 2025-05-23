import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
            <Header />
            <div className='min-h-[60vh] max-w-11/12 mx-auto mt-0'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;