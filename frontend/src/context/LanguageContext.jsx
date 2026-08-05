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

    const langUpdate = (language) => {
        if (typeof language != 'string' || !supported.includes(language) || language === useLang) return;

        setLang(language);

        if (lang != language) {
            params.set('lang', language);

            paramsReplacement(params);
        }

        useLang == 'he' ? setOrien('rtl') : setOrien('ltr');
    }

    return (
        <LanguageContext.Provider value={{ langSup: supported, language: useLang, langUpdate, translation: useTrans, orientation: useOrien }}>
            {children}
        </LanguageContext.Provider>
    );
}