import React, { createContext, useState } from 'react'

export const SignContext = createContext(null);

export const SignProvider = ({ children }) => {
    const [useSignIn, setSignIn] = useState(false);

    const signInFlip = () => { setSignIn(!useSignIn); }

    return (
        <SignContext.Provider value={{ useSignIn, signInFlip }}>
            {children}
        </SignContext.Provider>
    );
}