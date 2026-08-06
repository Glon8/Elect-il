import React, { createContext, useEffect, useState } from 'react'
// language translation should be removed once backend get in place
import { content as en } from '../translationPackages/elect_il_en'
import { content as he } from '../translationPackages/elect_il_he'
import { content as ru } from '../translationPackages/elect_il_ru'

import { paramsReplacement } from '../../util';

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
    const [useLang, setLang] = useState('en');
    const [useTrans, setTrans] = useState(en);
    const [useOrien, setOrien] = useState('rtl');

    const supported = ['ru', 'en', 'he'];
    // temporarry translation linking
    const translations = {
        ru: ru,
        en: en,
        he: he,
    };

    // must add params check/update on page change or first load
    // on first load may attempt to get a user browsers language

    const langUpdate = (language) => {
        if (typeof language != 'string' || !supported.includes(language) || language === useLang) return;

        setLang(language);
        // temporarry translation linking
        setTrans(translations[language]);

        const params = new URLSearchParams(window.location.search);
        const lang = params.get('lang');

        if (lang != language) {
            params.set('lang', language);

            paramsReplacement(params);
        }

        //language == 'he' ? setOrien('rtl') : setOrien('ltr');
        document.documentElement.dir = language == 'he' ? 'rtl' : 'ltr';
    }

    return (
        <LanguageContext.Provider value={{ langSup: supported, language: useLang, langUpdate, translation: useTrans, orientation: useOrien }}>
            {children}
        </LanguageContext.Provider>
    );
}