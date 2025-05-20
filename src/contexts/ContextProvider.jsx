import React, { createContext } from 'react';
const ContextValues = createContext(null)
const ContextProvider = ({children}) => {

    const values = {

    }
    return (
        <ContextValues value={values}>
            {children}
        </ContextValues>
    );
};

export default ContextProvider;