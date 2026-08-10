import React, { createContext, useState } from 'react'

export const HistoryContext = createContext(null);

export function HistoryProvider({ children }) {
    const [useQuery, setQuery] = useState([]);
    const [useDate, setDate] = useState(null);

    const electionHistory = [{
        date: '2018',
        data: ["2018-01-14",
            "2018-03-27",
            "2018-05-09",
            "2018-06-22",
            "2018-08-16",
            "2018-10-03",
            "2018-11-19",]
    },
    {
        date: '2019',
        data: ["2019-01-07",
            "2019-03-24",
            "2019-05-11",
            "2019-06-29",
            "2019-08-13",
            "2019-10-26",
            "2019-12-04",]
    },
    {
        date: '2020',
        data: ["2020-01-21",
            "2020-03-08",
            "2020-05-17",
            "2020-06-30",
            "2020-08-14",
            "2020-10-05",
            "2020-11-23",]
    }, {
        date: '2021',
        data: ["2021-01-12",
            "2021-03-28",
            "2021-05-06",
            "2021-06-19",
            "2021-08-03",
            "2021-10-17",
            "2021-12-09",]
    }, {
        date: '2022',
        data: ["2022-01-26",
            "2022-03-14",
            "2022-05-02",
            "2022-06-21",
            "2022-08-11",
            "2022-10-29",
            "2022-12-16",]
    }, {
        date: '2023',
        data: ["2023-02-07",
            "2023-03-25",
            "2023-05-13",
            "2023-07-01",
            "2023-08-18",
            "2023-10-06",
            "2023-11-27",]
    }, {
        date: '2024',
        data: ["2024-01-15",
            "2024-03-04",
            "2024-04-26",
            "2024-06-12",
            "2024-08-01",
            "2024-09-19",
            "2024-11-08",
            "2024-12-23",]
    }, {
        date: '2025',
        data: ["2025-02-10",
            "2025-03-29",
            "2025-05-17",
            "2025-07-05",
            "2025-08-24",
            "2025-10-11",
            "2025-12-02",]
    }, {
        date: '2026',
        data: ["2026-01-20",
            "2026-03-09",
            "2026-04-27",
            "2026-06-15",
            "2026-08-03",
            "2026-09-22",
            "2026-11-10",
            "2026-12-28",]
    }, {
        date: '2027',
        data: ["2027-02-15",
            "2027-04-05",
            "2027-05-24",
            "2027-07-12",
            "2027-08-31",
            "2027-10-19",
            "2027-12-07",]
    }, {
        date: '2028',
        data: ["2028-01-25",
            "2028-03-14",
            "2028-05-02",
            "2028-06-20",
            "2028-08-08",
            "2028-09-27",
            "2028-11-15",
            "2028-12-31",]
    }, {
        date: '2029',
        data: ["2029-02-18",
            "2029-04-08",
            "2029-05-27",
            "2029-07-15",
            "2029-09-03",
            "2029-10-22",
            "2029-12-10",]
    }, {
        date: '2030',
        data: ["2030-01-28",
            "2030-03-18",
            "2030-05-06",
            "2030-06-25",
            "2030-08-13",
            "2030-10-01",
            "2030-11-20",]
    }, {
        date: '2031',
        data: ["2031-01-08",
            "2031-02-26",
            "2031-04-16",
            "2031-06-04",
            "2031-07-23",
            "2031-09-11",
            "2031-10-30"]
    }
    ];

    const updateQuery = () => {
        if (typeof useDate != 'string' || useDate.length < 4) return;

        console.log('entered');

        const newYear = Number(useDate);

        if (Number.isNaN(newYear)) setDate(new Date().getFullYear());

        if (useDate > 1900 && useDate <= 3000) {
            // < pull on query from the server
            console.log('size is ok');

            // temporary display
            const clearedYear = useDate.trim();

            const result = electionHistory.find(item => item.date === clearedYear);

            setQuery(result?.data ?? []);
        }
    }
    // for local search > temporary display initiation
    const findQuery = (year) => {
        if (typeof year != 'string' || year.length < 4) return;

        const clearedYear = year.trim();

        const result = electionHistory.find(item => item.date === clearedYear);

        setQuery(result?.data ?? []);
    }

    return (
        <HistoryContext.Provider value={{ useDate, setDate, useQuery, setQuery, updateQuery, findQuery }}>
            {children}
        </HistoryContext.Provider>
    )
}
