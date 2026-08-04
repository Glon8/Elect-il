import React, { createContext, useState, useEffect } from 'react'

export const ModeContext = createContext(null);

export const ModeProvider = ({ children }) => {
    const [useMode, setMode] = useState('light');

    // must add params check/update on mode change or first load
    const modeSwitch = () => setMode(useMode == 'light' ? 'dark' : 'light');

    useEffect(() => {}, []);

    return (
        <ModeContext.Provider value={{ mode: useMode, modeSwitch }}>
            {children}
        </ModeContext.Provider>
    )
}
