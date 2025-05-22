import React, { useContext } from 'react';
import { ContextValues } from '../contexts/ContextProvider';
import Loader from '../components/Loader';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(ContextValues)
    const location = useLocation()
    
    console.log(!user)
    if(loading) return <Loader /> 
    if(!user) return <Navigate to={'/login'} state={location.pathname}></Navigate>
    return children
};

export default PrivateRoutes;