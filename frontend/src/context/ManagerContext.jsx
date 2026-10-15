import { createContext, useContext, useEffect, useState } from 'react'

import { dateVerify, yearExtract, getPath, pathReplacement, paramsReplacement } from '../../util';

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
    const { date, year, setYear, setDate, findQuery } = useContext(HistoryContext);
    const { setParties, pullPartiesData, updateParties } = useContext(VotingContext);

    const path = window.location.pathname;
    const params = new URLSearchParams(window.location.search);

    const curPage = getPath(1);
    const curLang = params.get('lang');
    const curMode = params.get('mode');
    const curDate = params.get('date');

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

        if (!curDate || !dateVerify(curDate)) {
            // param set \/
            params.set('date', date);
            paramsReplacement(params);
            // history init \/
            findQuery(year);
            // parties init \/
            const parties = pullPartiesData();

            updateParties(parties);
        }
        else {
            setDate(curDate);

            const year = yearExtract(curDate);

            setYear(year);
            // history init \/
            findQuery(year);
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
