import { createContext, useState, useEffect } from 'react'

import { dateVerify, nowDate, paramsReplacement, yearExtract } from '../../util';

export const HistoryContext = createContext(null);

export function HistoryProvider({ children }) {
    const electionHistory = [
        {
            date: '2024',
            data: [
                {
                    open: false,
                    starts: '15-01-2024',
                    ends: '29-01-2024',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [120, 85, 64, 42, 19]
                },
                {
                    open: false,
                    starts: '04-03-2024',
                    ends: '18-03-2024',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [95, 110, 72, 38, 21]
                },
                {
                    open: false,
                    starts: '26-04-2024',
                    ends: '10-05-2024',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [130, 90, 75, 48, 25]
                },
                {
                    open: false,
                    starts: '12-06-2024',
                    ends: '26-06-2024',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [105, 98, 80, 45, 22]
                },
                {
                    open: false,
                    starts: '01-08-2024',
                    ends: '15-08-2024',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [140, 100, 68, 51, 30]
                },
                {
                    open: false,
                    starts: '19-09-2024',
                    ends: '03-10-2024',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [115, 105, 77, 49, 28]
                },
                {
                    open: false,
                    starts: '08-11-2024',
                    ends: '22-11-2024',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [125, 92, 81, 44, 26]
                },
                {
                    open: false,
                    starts: '23-12-2024',
                    ends: '06-01-2025',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [108, 96, 73, 52, 31]
                }
            ]
        },
        {
            date: '2025',
            data: [
                {
                    open: false,
                    starts: '10-02-2025',
                    ends: '24-02-2025',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [132, 101, 79, 47, 24]
                },
                {
                    open: false,
                    starts: '29-03-2025',
                    ends: '12-04-2025',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [118, 107, 84, 43, 29]
                },
                {
                    open: false,
                    starts: '17-05-2025',
                    ends: '31-05-2025',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [145, 99, 70, 55, 32]
                },
                {
                    open: false,
                    starts: '05-07-2025',
                    ends: '19-07-2025',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [112, 103, 88, 46, 27]
                },
                {
                    open: false,
                    starts: '24-08-2025',
                    ends: '07-09-2025',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [128, 94, 76, 50, 23]
                },
                {
                    open: false,
                    starts: '11-10-2025',
                    ends: '25-10-2025',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [137, 108, 82, 41, 33]
                },
                {
                    open: false,
                    starts: '02-12-2025',
                    ends: '16-12-2025',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [121, 97, 74, 53, 20]
                }
            ]
        },
        {
            date: '2026',
            data: [
                {
                    open: false,
                    starts: '20-01-2026',
                    ends: '03-02-2026',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [116, 104, 78, 48, 25]
                },
                {
                    open: false,
                    starts: '09-03-2026',
                    ends: '23-03-2026',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [134, 102, 86, 45, 28]
                },
                {
                    open: false,
                    starts: '27-04-2026',
                    ends: '11-05-2026',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [123, 91, 83, 54, 30]
                },
                {
                    open: false,
                    starts: '15-06-2026',
                    ends: '29-06-2026',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [141, 106, 71, 49, 26]
                },
                {
                    open: false,
                    starts: '03-08-2026',
                    ends: '17-08-2026',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [119, 100, 89, 42, 31]
                },
                {
                    open: false,
                    starts: '22-09-2026',
                    ends: '06-10-2026',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [129, 111, 75, 56, 22]
                },
                {
                    open: false,
                    starts: '10-11-2026',
                    ends: '24-11-2026',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [136, 98, 80, 47, 29]
                },
                {
                    open: true,
                    starts: '28-12-2026',
                    ends: '11-01-2027',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [124, 109, 77, 51, 27]
                }
            ]
        }
    ];

    const [useHistory, setHistory] = useState(electionHistory);
    const [useQuery, setQuery] = useState([]);
    const [useYear, setYear] = useState(String(new Date().getFullYear()));
    const [useDate, setDate] = useState(String(nowDate()));
    const [useSelected, setSelected] = useState(-1);
    const [useDateObj, setDateObj] = useState(null);

    const findDate = (date) => useQuery?.find(item => item.starts === date);

    const latestDate = (query) => query[query.length - 1]?.starts;

    const vote = () => console.log('Vote sent');

    const updateQuery = () => {
        if (typeof useYear != 'string' || useYear.length < 4) return;

        const newYear = Number(useYear);

        if (Number.isNaN(newYear)) setYear(date);

        if (newYear <= 1900 || newYear > 3000) return;

        const result = useHistory.find(item => item.date === useYear.trim())?.data; // < pull on query from the server

        setQuery(result ?? []);
    }

    const findQuery = (date) => {
        let tDate = date;
        let tYear = useYear;

        if (!dateVerify(date)) tDate = useDate;
        else tYear = yearExtract(date);

        setYear(tYear);

        const result = useHistory.find(item => item.date === tYear)?.data; // < pull on query from the server

        setQuery(result ?? []);

        const dateExist = result.some(item => item.starts === tDate);

        if (result && result?.length) setDate(dateExist ? tDate : latestDate(result));
    }

    useEffect(() => {
        const newDateObj = findDate(useDate);

        if (useDateObj?.starts === newDateObj?.starts) return;

        setDateObj(newDateObj);

        const params = new URLSearchParams(window.location.search);

        params.set('date', useDate);

        paramsReplacement(params);
    }, [useDate]);

    return (
        <HistoryContext.Provider value={{ year: useYear, setYear, date: useDate, setDate, query: useQuery, setQuery, selected: useSelected, setSelected, dateObj: useDateObj, updateQuery, findQuery, vote }}>
            {children}
        </HistoryContext.Provider>
    )
}
