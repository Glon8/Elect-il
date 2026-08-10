import React, { createContext, useEffect, useState } from 'react'

import { pathReplacement, getPath } from '../../util';

export const PageContext = createContext(null);

export const PageProvider = ({ children }) => {
    const [usePage, setPage] = useState('election');
    const [useSignPop, setSignPop] = useState(false);
    const [useVotePop, setVotePop] = useState(false);

    const supported = ['election', 'us', 'encryption', 'approval'];
    // must add params check/update on page change or first load
    const signPopFlip = () => setSignPop(!useSignPop);
    const votePopFlip = () => setVotePop(!useVotePop);

    const pageUpdate = (path) => {
        if (typeof path != 'string' || path === usePage || !supported.includes(path)) return;

        path = path.trim().toLowerCase();

        setPage(path);

        if (getPath(1) != path) pathReplacement(path, 1);
    }

    return (
        <PageContext.Provider value={{ pageSup: supported, page: usePage, pageUpdate, signPop: useSignPop, signPopFlip, votePop: useVotePop, votePopFlip }}>
            {children}
        </PageContext.Provider>
    )
}
