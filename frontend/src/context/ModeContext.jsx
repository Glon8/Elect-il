import React, { createContext, useState, useEffect } from 'react'

import { paramsReplacement } from '../../util';

export const ModeContext = createContext(null);

export const ModeProvider = ({ children }) => {
    const [useMode, setMode] = useState('light');

    const supported = ['light', 'dark'];

    const modeSwitch = () => {
        const mode = useMode == 'light' ? 'dark' : 'light';

        setMode(mode);

        const params = new URLSearchParams(window.location.search);

        params.set('mode', mode);

        paramsReplacement(params);
    }

    const modeUpdate = (newMode) => {
        if (typeof newMode != 'string' || !supported.includes(newMode) || newMode === useMode) return;

        setMode(newMode);

        const params = new URLSearchParams(window.location.search);
        const mode = params.get('mode');

        if (mode != newMode) {
            params.set('mode', newMode);

            paramsReplacement(params);
        }
    }

    return (
        <ModeContext.Provider value={{ modeSup: supported, mode: useMode, modeSwitch, modeUpdate }}>
            {children}
        </ModeContext.Provider>
    )
}
