import React, { createContext, useContext, useEffect, useState } from 'react'

import { getPath, pathReplacement, paramsReplacement } from '../../util';

import { PageContext } from './PageContext';
import { LanguageContext } from './LanguageContext';
import { ModeContext } from './ModeContext';

export const ManagerContext = createContext(null);

export const ManagerProvider = ({ children }) => {
    const { page, pageSup, pageUpdate } = useContext(PageContext);
    const { language, langSup, langUpdate } = useContext(LanguageContext);
    const { mode, modeSup, modeUpdate } = useContext(ModeContext);

    const path = window.location.pathname;
    const params = new URLSearchParams(window.location.search);

    const curPage = getPath(1);
    const curLang = params.get('lang');
    const curMode = params.get('mode');

    useEffect(() => {
        if (!pageSup.includes(curPage)) pathReplacement(page, 1);
        else pageUpdate(curPage);

        if (!langSup.includes(curLang)) {
            params.set('lang', language);

            paramsReplacement(params);
        }
        else langUpdate(curLang);

        if (!modeSup.includes(curMode)) {
            params.set('mode', mode);

            paramsReplacement(params);
        }
        else modeUpdate(curMode);
    }, []);

    return (
        <ManagerContext.Provider>
            {children}
        </ManagerContext.Provider>
    )
}
