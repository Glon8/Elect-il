import React, { createContext, useEffect, useState } from 'react'
import { content } from '../translationPackages/elect_il_en'

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
    const [useLang, setLang] = useState('eng');
    const [useTrans, setTrans] = useState(content);
    const [useOrien, setOrien] = useState('rtl');

    useEffect(() => {
        if (!['ru', 'eng', 'he'].includes(useLang)) return;

        useLang == 'he' ? setOrien('rtl') : setOrien('ltr');
        // pull the language from the server - extract translation file ?? if no extraction file, use default of "content from elect_il_en"/*  */
    }, [useLang]);

    useEffect(() => {
        // step 1: check the link for language param - find the language attempt 1
        // step 2: get the browser language - find the language attempt 2
        // step 3: pull the language from the server - extract translation file ?? if no extraction file, use default of "content from elect_il_en"
    }, []);

    return (
        <LanguageContext.Provider
            value={{ language: useLang, setLanguage: setLang, translation: useTrans, orientation: useOrien }}>
            {children}
        </LanguageContext.Provider>
    );
}