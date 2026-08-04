import React, { createContext, useEffect, useState } from 'react'

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
    const [useLang, setLang] = useState('he');
    const [useOrien, setOrien] = useState('rtl');

    useEffect(() => {
        if (!['ru', 'eng', 'he'].includes(useLang)) return;

        useLang == 'he' ? setOrien('rtl') : setOrien('ltr');
        // pull the language from the server - extract translation file
    }, [useLang]);

    useEffect(() => {
        // step 1: check the link for language param - find the language attempt 1
        // step 2: get the browser language - find the language attempt 2
        // step 3: pull the language from the server - extract translation file
    }, []);

    return (
        <LanguageContext.Provider
            value={{ language: useLang, setLanguage: setLang, orientation: useOrien }}>
            {children}
        </LanguageContext.Provider>
    );
}