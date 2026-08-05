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
    // on first load may attempt to get a user browsers language

    useEffect(() => {
        if (!supported.includes(useLang) || lang === useLang) return;

        params.set('lang', useLang);

        paramsReplacement(params);

        useLang == 'he' ? setOrien('rtl') : setOrien('ltr');
    }, [useLang]);

    useEffect(() => {
        if (!supported.includes(lang)) {
            params.set('lang', useLang);

            paramsReplacement(params);
        }
        else setLang(lang);
    }, []);

    return (
        <LanguageContext.Provider
            value={{ language: useLang, setLanguage: setLang, translation: useTrans, orientation: useOrien }}>
            {children}
        </LanguageContext.Provider>
    );
}