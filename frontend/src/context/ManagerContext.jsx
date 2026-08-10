import React, { createContext, useContext, useEffect, useState } from 'react'

import { getPath, pathReplacement, paramsReplacement } from '../../util';
// language translation should be removed once backend get in place
import { content as en } from '../translationPackages/elect_il_en'
import { content as he } from '../translationPackages/elect_il_he'
import { content as ru } from '../translationPackages/elect_il_ru'

import { PageContext } from './PageContext';
import { LanguageContext } from './LanguageContext';
import { ModeContext } from './ModeContext';
import { HistoryContext } from './HistoryContext';

export const ManagerContext = createContext(null);

export const ManagerProvider = ({ children }) => {
    const { page, pageSup, pageUpdate } = useContext(PageContext);
    const { language, langSup, langUpdate } = useContext(LanguageContext);
    const { mode, modeSup, modeUpdate } = useContext(ModeContext);
    const { setDate, findQuery } = useContext(HistoryContext);

    const path = window.location.pathname;
    const params = new URLSearchParams(window.location.search);

    const curPage = getPath(1);
    const curLang = params.get('lang');
    const curMode = params.get('mode');

    useEffect(() => {
        // page init \/
        if (!pageSup.includes(curPage)) pathReplacement(page, 1);
        else pageUpdate(curPage);

        // language init \/
        const prefLang = navigator.language.split('-')[0];

        if (!langSup.includes(curLang)) {
            let updateParam;

            if (langSup.includes(prefLang)) {
                langUpdate(prefLang);
                updateParam = prefLang;
            }
            else {
                langUpdate('en');
                updateParam = 'en';
            }

            params.set('lang', updateParam);

            paramsReplacement(params);
        }
        else langUpdate(curLang);

        // mode init \/
        if (!modeSup.includes(curMode)) {
            params.set('mode', mode);

            paramsReplacement(params);
        }
        else modeUpdate(curMode);

        // history init \/
        const nowYear = String(new Date().getFullYear());

        setDate(nowYear);
        findQuery(nowYear);
    }, []);

    return (
        <ManagerContext.Provider value={{}}>
            {children}
        </ManagerContext.Provider>
    )
}
