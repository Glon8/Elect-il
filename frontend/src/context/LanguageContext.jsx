import React, { createContext, useEffect, useState } from 'react'

import { content } from '../translationPackages/elect_il_en'
import { paramsReplacement } from '../../util';

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
    const [useLang, setLang] = useState('en');
    const [useTrans, setTrans] = useState(content);
    const [useOrien, setOrien] = useState('rtl');

    const supported = ['ru', 'en', 'he'];

    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang');

    // must add params check/update on page change or first load

    useEffect(() => {
        if (!supported.includes(useLang) || lang === useLang) return;

        params.set('lang', useLang);

        paramsReplacement(params);

        useLang == 'he' ? setOrien('rtl') : setOrien('ltr');
        // pull the language from the server - extract translation file ?? if no extraction file, use default of "content from elect_il_en"
        if (useLang != 'eng') { }
    }, [useLang]);

    useEffect(() => {
        // step 1: check the link for language param - find the language attempt 1
        if (!supported.includes(lang)) {
            // step 2: get the browser language - find the language attempt 2
            params.set('lang', useLang);

            paramsReplacement(params);
        }
        else setLang(lang);
        // step 3: pull the language from the server - extract translation file ?? if no extraction file, use default of "content from elect_il_en"
        if (useLang != 'eng') { }
    }, []);

    return (
        <LanguageContext.Provider
            value={{ language: useLang, setLanguage: setLang, translation: useTrans, orientation: useOrien }}>
            {children}
        </LanguageContext.Provider>
    );
}