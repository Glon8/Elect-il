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
                    votes: [482631, 365218, 298417, 214963, 138752]
                },
                {
                    open: false,
                    starts: '01-03-2024',
                    ends: '08-03-2024',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [451782, 382649, 312584, 226173, 146892]
                },
                {
                    open: false,
                    starts: '10-04-2024',
                    ends: '17-04-2024',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [497263, 354821, 289736, 231458, 152694]
                },
                {
                    open: false,
                    starts: '20-05-2024',
                    ends: '27-05-2024',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [468521, 376294, 321857, 208643, 143786]
                },
                {
                    open: false,
                    starts: '01-07-2024',
                    ends: '08-07-2024',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [512847, 347629, 294183, 219576, 157438]
                },
                {
                    open: false,
                    starts: '12-08-2024',
                    ends: '19-08-2024',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [476318, 391572, 305846, 223197, 149682]
                },
                {
                    open: false,
                    starts: '23-09-2024',
                    ends: '30-09-2024',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [489621, 368475, 317294, 207836, 154927]
                },
                {
                    open: false,
                    starts: '04-11-2024',
                    ends: '11-11-2024',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [458732, 384196, 326571, 216843, 147529]
                },
                {
                    open: false,
                    starts: '16-12-2024',
                    ends: '23-12-2024',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [503184, 359627, 291468, 228351, 151796]
                },
            ]
        },
        {
            date: '2025',
            data: [
                {
                    open: false,
                    starts: '27-01-2025',
                    ends: '03-02-2025',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [481936, 373582, 309147, 221684, 145729]
                },
                {
                    open: false,
                    starts: '10-03-2025',
                    ends: '17-03-2025',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [495217, 362841, 301695, 234176, 148923]
                },
                {
                    open: false,
                    starts: '21-04-2025',
                    ends: '28-04-2025',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [462839, 389174, 318562, 212497, 153618]
                },
                {
                    open: false,
                    starts: '02-06-2025',
                    ends: '09-06-2025',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [508361, 351927, 296483, 225719, 142865]
                },
                {
                    open: false,
                    starts: '14-07-2025',
                    ends: '21-07-2025',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [473825, 378416, 314792, 218563, 150274]
                },
                {
                    open: false,
                    starts: '25-08-2025',
                    ends: '01-09-2025',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [486193, 366758, 307421, 229184, 155632]
                },
                {
                    open: false,
                    starts: '06-10-2025',
                    ends: '13-10-2025',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [499572, 358216, 299843, 217695, 146381]
                },
                {
                    open: false,
                    starts: '17-11-2025',
                    ends: '24-11-2025',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [467284, 387591, 323168, 210476, 152839]
                },
                {
                    open: false,
                    starts: '29-12-2025',
                    ends: '05-01-2026',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [505618, 349732, 303857, 232164, 149285]
                }
            ]
        },
        {
            date: '2026',
            data: [

                {
                    open: false,
                    starts: '09-02-2026',
                    ends: '16-02-2026',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [479351, 375826, 315492, 220637, 154183]
                },
                {
                    open: false,
                    starts: '23-03-2026',
                    ends: '30-03-2026',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [491728, 364193, 308576, 226941, 147362]
                },
                {
                    open: false,
                    starts: '04-05-2026',
                    ends: '11-05-2026',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [464817, 392465, 319284, 213758, 151936]
                },
                {
                    open: false,
                    starts: '15-06-2026',
                    ends: '22-06-2026',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [501263, 356841, 297512, 230486, 144729]
                },
                {
                    open: false,
                    starts: '27-07-2026',
                    ends: '03-08-2026',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [477692, 381547, 311826, 219374, 156218]
                },
                {
                    open: false,
                    starts: '07-09-2026',
                    ends: '14-09-2026',
                    parties: ['party1', 'party2', 'party3', 'party4', 'party5'],
                    candidates: ['A', 'B', 'C', 'D', 'E'],
                    votes: [493816, 369254, 304781, 224693, 148572]
                },
                {
                    open: true,
                    starts: '07-10-2026',
                    ends: '26-10-2026',
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
                        712483, 526194, 391827, 298641,
                        225376, 231594, 193827, 198462,
                        161738, 100284, 95163, 46382,
                        38471, 18264, 14183, 19782
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
