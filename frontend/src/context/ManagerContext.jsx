import { createContext, useContext, useEffect, useState } from 'react'

import { yearVerify, getPath, pathReplacement, paramsReplacement } from '../../util';

import { PageContext } from './PageContext';
import { LanguageContext } from './LanguageContext';
import { ModeContext } from './ModeContext';
import { HistoryContext } from './HistoryContext';
import { VotingContext } from './VotingContext';

export const ManagerContext = createContext(null);

export const ManagerProvider = ({ children }) => {
    const { page, pageSup, pageUpdate } = useContext(PageContext);
    const { language, langSup, langUpdate } = useContext(LanguageContext);
    const { mode, modeSup, modeUpdate } = useContext(ModeContext);
    const { year, setYear, findQuery } = useContext(HistoryContext);
    const { setParties, pullPartiesData, updateParties } = useContext(VotingContext);

    const path = window.location.pathname;
    const params = new URLSearchParams(window.location.search);

    const curPage = getPath(1);
    const curLang = params.get('lang');
    const curMode = params.get('mode');
    const curYear = params.get('year');

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

        if (!curYear || !yearVerify(curYear)) {
            // param set \/
            params.set('year', year);
            paramsReplacement(params);

            // history init \/
            findQuery(year);

            // parties init \/
            const parties = pullPartiesData();

            updateParties(parties);
        }
        else {
            setYear(curYear);

            // history init \/
            findQuery(curYear);

            // parties init \/
            const parties = pullPartiesData();

            updateParties(parties);
        }
    }, []);

    return (
        <ManagerContext.Provider value={{}}>
            {children}
        </ManagerContext.Provider>
    )
}
