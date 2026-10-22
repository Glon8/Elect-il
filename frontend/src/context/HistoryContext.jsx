import { createContext, useState, useEffect } from 'react'

import axios from 'axios';

import { dateVerify, nowDate, paramsReplacement, yearExtract } from '../../util';

export const HistoryContext = createContext(null);

export function HistoryProvider({ children }) {
    const api = axios.create({ baseURL: import.meta.env.VITE_LOCAL_BACKEND_API_URL, });

    const [useQuery, setQuery] = useState([]);
    const [useYear, setYear] = useState(String(new Date().getFullYear()));
    const [useDate, setDate] = useState(String(nowDate()));
    const [useSelected, setSelected] = useState(-1);
    const [useDateObj, setDateObj] = useState(null);
    const [useVoteObj, setVoteObj] = useState(null);

    const findDate = (date) => useQuery?.find(item => item.starts === date);

    const latestDate = (query) => query[query.length - 1]?.starts;

    const vote = async () => {
        try {
            //const res = await api.post('/api/sign/up', {id, token, useSelected});

            console.log('[Voting request] Success');
        }
        catch (error) {
            console.log('[Voting request] Failed\r\n}-------------------------{\r\n', error);

            return null;
        }
    }

    const requestHistory = async (year) => {
        try {
            const res = await api.get('/api/history/getHistory', { params: { year } });

            return res.data;
        }
        catch (error) {
            console.log('[History request] Failed\r\n}-------------------------{\r\n', error);

            return null;
        }
    }

    const requestVoting = async () => {
        try {
            const res = await api.get('/api/history/getVoting');

            return res.data;
        }
        catch (error) {
            console.log('[Voting-latest request] Failed\r\n}-------------------------{\r\n', error);

            return null;
        }
    }

    const updateQuery = async () => {
        if (typeof useYear != 'string' || useYear.length < 4) return;

        const newYear = Number(useYear);

        if (Number.isNaN(newYear)) setYear(date);

        if (newYear <= 1900 || newYear > 3000) return;

        const result = await requestHistory(useYear);

        setQuery(result ?? []);
    }

    const findQuery = async (date) => {
        let tDate = date;
        let tYear = useYear;

        if (!dateVerify(date)) tDate = useDate;
        else tYear = yearExtract(date);

        setYear(tYear);

        const result = await requestHistory(tYear);

        setQuery(result ?? []);

        const dateExist = result?.some(item => item.starts === tDate);

        if (result && result?.length) setDate(dateExist ? tDate : latestDate(result));
    }

    const getVoting = async () => setVoteObj(await requestVoting() ?? null);

    useEffect(() => {
        const newDateObj = findDate(useDate);

        if (useDateObj?.starts === newDateObj?.starts) return;

        setDateObj(newDateObj);

        const params = new URLSearchParams(window.location.search);

        params.set('date', useDate);

        paramsReplacement(params);
    }, [useDate]);

    return (
        <HistoryContext.Provider value={{ year: useYear, setYear, date: useDate, setDate, query: useQuery, setQuery, selected: useSelected, setSelected, dateObj: useDateObj, voteObj: useVoteObj, getVoting, updateQuery, findQuery, vote }}>
            {children}
        </HistoryContext.Provider>
    )
}
