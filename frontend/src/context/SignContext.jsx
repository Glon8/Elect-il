import React, { createContext, useState } from 'react'

export const SignContext = createContext(null);

export const SignProvider = ({ children }) => {

    return (
        <SignContext.Provider value={{}}>
            {children}
        </SignContext.Provider>
    );
}