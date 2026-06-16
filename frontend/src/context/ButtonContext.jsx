import React, { createContext, useState } from 'react'

export const ButtonContext = createContext(null);

export const ButtonProvider = ({ children }) => {
    const [useSignIn, setSignIn] = useState(false);

    const signInFlip = () => { setSignIn(!useSignIn); }

    return (
        <ButtonContext.Provider value={{ useSignIn, signInFlip }}>
            {children}
        </ButtonContext.Provider>
    );
}