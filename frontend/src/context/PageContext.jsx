import React, { createContext, useEffect, useState } from 'react'

import { pathReplacement, getPath } from '../../util';

export const PageContext = createContext(null);

export const PageProvider = ({ children }) => {
    const [usePage, setPage] = useState('election');
    const [useSignPop, setSignPop] = useState(false);

    const supported = ['election', 'us', 'encryption', 'approval'];

    const currentPath = window.location.pathname;

    // must add params check/update on page change or first load
    const signPopFlip = () => { setSignPop(!useSignPop); }

    useEffect(() => {
        if (getPath(1) === usePage) return;

        pathReplacement(usePage, 1);
    }, [usePage]);

    useEffect(() => {
        if (currentPath == '/') pathReplacement(usePage, 1);
        else {
            const currentPage = getPath(1);

            if (!supported.includes(currentPage)) return;

            setPage(currentPage);
        }
    }, []);

    return (
        <PageContext.Provider
            value={{
                page: usePage, setPage,
                signPop: useSignPop, signPopFlip
            }}> {children}
        </PageContext.Provider>
    )
}
