import React, { createContext, useEffect, useState } from 'react'

export const PageContext = createContext(null);

export const PageProvider = ({ children }) => {
    const [usePage, setPage] = useState('main');
    const [useSignPop, setSignPop] = useState(false);

    // must add params check/update on page change or first load
    const signPopFlip = () => { setSignPop(!useSignPop); }

    useEffect(() => { }, []);

    return (
        <PageContext.Provider
            value={{
                page: usePage, setPage,
                signPop: useSignPop, signPopFlip
            }}> {children}
        </PageContext.Provider>
    )
}
