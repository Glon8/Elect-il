import React, { createContext, useState } from 'react'

export const SignContext = createContext(null);

export const SignProvider = ({ children }) => {
    const [useDetails, setDetails] = useState({ fullName: 'Kate Mew', token: '1123123' }); // > recieves users details

    const signIn = () => { } // > recieving users credentials 
    const verification = () => { } // > recievs users verification
    const signOut = () => { // > signs out
        // if token is there (locally and in cookies) > sending disconnect request and removing the user name and the token
        if (useDetails.token) {
            // request to forget token
            // cookies removal
            // cleaning local values
            setDetails({ fullName: null, token: null });
        }
    }

    return (
        <SignContext.Provider value={{ userData: useDetails, signIn, verification, signOut }}>
            {children}
        </SignContext.Provider>
    );
}