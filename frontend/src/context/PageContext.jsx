import React, { createContext, useEffect, useState } from 'react'

import { pathReplacement, getPath } from '../../util';
import { log } from 'logs-js'

export const PageContext = createContext(null);

export const PageProvider = ({ children }) => {
    const [usePage, setPage] = useState('election');
    const [useSignPop, setSignPop] = useState(false);

    const supported = ['election', 'us', 'encryption', 'approval'];

    const currentPath = window.location.pathname;

    // must add params check/update on page change or first load
    const signPopFlip = () => { setSignPop(!useSignPop); }

    const pageUpdate = (path) => {
        if (typeof path != 'string' || path === usePage || !supported.includes(path)) return;

        path = path.trim().toLowerCase();

        setPage(path);

        if (getPath(1) === path) return;

        pathReplacement(path, 1);
    }

    useEffect(() => {
        if (currentPath == '/') pathReplacement(usePage, 1);
        else {
            const currentPage = getPath(1);

            log(currentPage)

            if (!supported.includes(currentPage)) return;

            setPage(currentPage);
        }
    }, []);

    return (
        <PageContext.Provider
            value={{
                page: usePage, pageUpdate,
                signPop: useSignPop, signPopFlip
            }}> {children}
        </PageContext.Provider>
    )
}
