import { createContext, useState, useEffect } from 'react'

import { dateVerify, nowDate, paramsReplacement, yearExtract } from '../../util';

export const HistoryContext = createContext(null);

export function HistoryProvider({ children }) {
    const electionHistory = [
        {
            date: '2026',
            data: [
                {
                    open: false,
                    starts: '20-8-2026',
                    ends: '27-8-2026',
                    parties: [
                        'Likud',
                        'Yashar!',
                        'Beyachad',
                        'The Democrats',
                        'Otzma Yehudit',
                        'Shas',
                        'United Torah Judaism',
                        'Yisrael Beiteinu',
                        'Joint List',
                        "Ra'am",
                        'Religious Zionist Party & Zehut',
                        'Amcha Yisrael',
                        'The Reservists & Economic Party',
                        'Israel First',
                        'Ahi Movement',
                        'Ani VeAta'
                    ],
                    candidates: [
                        'Benjamin Netanyahu',
                        'Gadi Eisenkot',
                        'Naftali Bennett',
                        'Yair Golan',
                        'Itamar Ben-Gvir',
                        'Aryeh Deri',
                        'Yaakov Asher',
                        'Avigdor Liberman',
                        'Yousef Jabareen',
                        'Mansour Abbas',
                        'Bezalel Smotrich / Moshe Feiglin',
                        'Avigdor Winter',
                        'Yoaz Hendel / Yaron Zelekha',
                        'Sharren Haskel',
                        'Ahi Movement leader',
                        'Ani VeAta leader'
                    ],
                    votes: [
                        328417, 241683, 179254, 136829,
                        103716, 106392, 88741, 91463,
                        74628, 46317, 43859, 21374,
                        17682, 8371, 6472, 6802
                    ]
                },
                {
                    open: false,
                    starts: '27-9-2026',
                    ends: '04-10-2026',
                    parties: [
                        'Likud',
                        'Yashar!',
                        'Beyachad',
                        'The Democrats',
                        'Otzma Yehudit',
                        'Shas',
                        'United Torah Judaism',
                        'Yisrael Beiteinu',
                        'Joint List',
                        "Ra'am",
                        'Religious Zionist Party & Zehut',
                        'Amcha Yisrael',
                        'The Reservists & Economic Party',
                        'Israel First',
                        'Ahi Movement',
                        'Ani VeAta'
                    ],
                    candidates: [
                        'Benjamin Netanyahu',
                        'Gadi Eisenkot',
                        'Naftali Bennett',
                        'Yair Golan',
                        'Itamar Ben-Gvir',
                        'Aryeh Deri',
                        'Yaakov Asher',
                        'Avigdor Liberman',
                        'Yousef Jabareen',
                        'Mansour Abbas',
                        'Bezalel Smotrich / Moshe Feiglin',
                        'Avigdor Winter',
                        'Yoaz Hendel / Yaron Zelekha',
                        'Sharren Haskel',
                        'Ahi Movement leader',
                        'Ani VeAta leader'
                    ],
                    votes: [
                        319672, 256814, 188539, 141726,
                        111283, 98247, 86419, 94761,
                        71836, 44192, 41653, 18739,
                        15384, 6271, 5368, 5096
                    ]
                },
                {
                    open: true,
                    starts: '04-11-2026',
                    ends: '11-11-2026',
                    parties: [
                        'Likud',
                        'Yashar!',
                        'Beyachad',
                        'The Democrats',
                        'Otzma Yehudit',
                        'Shas',
                        'United Torah Judaism',
                        'Yisrael Beiteinu',
                        'Joint List',
                        "Ra'am",
                        'Religious Zionist Party & Zehut',
                        'Amcha Yisrael',
                        'The Reservists & Economic Party',
                        'Israel First',
                        'Ahi Movement',
                        'Ani VeAta'
                    ],
                    candidates: [
                        'Benjamin Netanyahu',
                        'Gadi Eisenkot',
                        'Naftali Bennett',
                        'Yair Golan',
                        'Itamar Ben-Gvir',
                        'Aryeh Deri',
                        'Yaakov Asher',
                        'Avigdor Liberman',
                        'Yousef Jabareen',
                        'Mansour Abbas',
                        'Bezalel Smotrich / Moshe Feiglin',
                        'Avigdor Winter',
                        'Yoaz Hendel / Yaron Zelekha',
                        'Sharren Haskel',
                        'Ahi Movement leader',
                        'Ani VeAta leader'
                    ],
                    votes: [
                        324861, 249573, 186427, 146218,
                        101639, 104782, 84731, 99764,
                        69283, 45617, 42396, 16382,
                        17941, 5248, 4683, 6455
                    ]
                }
            ]
        },
    ];

    const [useHistory, setHistory] = useState(electionHistory);
    const [useQuery, setQuery] = useState([]);
    const [useYear, setYear] = useState(String(new Date().getFullYear()));
    const [useDate, setDate] = useState(String(nowDate()));
    const [useSelected, setSelected] = useState(-1);
    const [useDateObj, setDateObj] = useState(null);
    const [useVoteObj, setVoteObj] = useState(null);

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

        const dateExist = result?.some(item => item.starts === tDate);

        if (result && result?.length) setDate(dateExist ? tDate : latestDate(result));
    }

    const getVoting = () => {
        const votingResult = useHistory.find(item => item.date === String(new Date().getFullYear()))?.data;

        const votingDate = votingResult.find(item => item.starts === latestDate(votingResult));

        setVoteObj(votingDate);
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
        <HistoryContext.Provider value={{ year: useYear, setYear, date: useDate, setDate, query: useQuery, setQuery, selected: useSelected, setSelected, dateObj: useDateObj, voteObj: useVoteObj, getVoting, updateQuery, findQuery, vote }}>
            {children}
        </HistoryContext.Provider>
    )
}
