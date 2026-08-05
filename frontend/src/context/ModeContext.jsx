import React, { createContext, useState, useEffect } from 'react'

import { paramsReplacement } from '../../util';

export const ModeContext = createContext(null);

export const ModeProvider = ({ children }) => {
    const [useMode, setMode] = useState('light');

    const modeSwitch = () => {
        const mode = useMode == 'light' ? 'dark' : 'light';

        setMode(mode);

        params.set('mode', mode);

        paramsReplacement(params);
    }

    const supported = ['light', 'dark'];

    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');

    useEffect(() => {
        if (!supported.includes(mode)) {
            params.set('mode', useMode);

            paramsReplacement(params);
        }
        else setMode(mode);
    }, []);

    return (
        <ModeContext.Provider value={{ mode: useMode, modeSwitch }}>
            {children}
        </ModeContext.Provider>
    )
}
