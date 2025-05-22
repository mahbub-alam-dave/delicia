import React, { useContext } from 'react';
import { ContextValues } from '../contexts/ContextProvider';
import Loader from '../components/Loader';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(ContextValues)
    
    
    if(loading) return <Loader /> 
    if(!user) return <Navigate to={'/login'}></Navigate>
    return children
};

export default PrivateRoutes;