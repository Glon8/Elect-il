import { createContext, useState } from 'react'

export const SignContext = createContext(null);

export const SignProvider = ({ children }) => {
    const emptyUser = { fullName: null, token: null };

    const [useDetails, setDetails] = useState(emptyUser); // > recieves users details

    const adminsList = [
        { name: 'Shutgun333', password: 'pAllet222' }
    ];

    const signIn = (username, password) => {  // < recieving users credentials
        // VERIFICATION REQUIRED!
        if (!username || !password) return false;

        const user = adminsList.find(item => item.name === username && item.password == password); // request to server

        if (!user) return false;

        setDetails({ token: '1234567890', fullName: username });

        return true;
    }
    const signOut = () => { // > signs out
        // if token is there (locally and in cookies) > sending disconnect request and removing the user name and the token
        if (useDetails.token) {
            // request to forget token
            // cookies removal
            // cleaning local values
            setDetails(emptyUser);
        }
    }

    return (
        <SignContext.Provider value={{ userData: useDetails, signIn, signOut }}>
            {children}
        </SignContext.Provider>
    );
}