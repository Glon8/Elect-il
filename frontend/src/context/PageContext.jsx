import React, { createContext, useState } from 'react'

export const PageContext = createContext(null);

export const PageProvider = ({ children }) => {
    const [usePage, setPage] = useState('main');
    const [useSignPop, setSignPop] = useState(false);

    const signPopFlip = () => { setSignIn(!useSignIn); }

    return (
        <PageContext.Provider
            value={{
                page: usePage, setPage,
                signPop: useSignPop, signPopFlip
            }}> {children}
        </PageContext.Provider>
    )
}
