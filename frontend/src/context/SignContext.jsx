import React, { createContext, useState } from 'react'

export const SignContext = createContext(null);

export const SignProvider = ({ children }) => {
    const [useDetails, setDetails] = useState(); // > recieves users details

    const signIn = () => { } // > recieving users credentials 
    const verification = () => { } // > recievs users verification
    const signOut = () => { } // > signs out

    return (
        <SignContext.Provider value={{ userData: useDetails, signIn, verification, signOut }}>
            {children}
        </SignContext.Provider>
    );
}