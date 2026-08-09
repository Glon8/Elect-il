import React, { createContext, useState } from 'react'

export const HistoryContext = createContext(null);

export function HistoryProvider({ children }) {
    const [useQuery, setQuery] = useState([]);
    const [useDate, setDate] = useState(null);

    const updateQuery = (year) => { }

    return (
        <HistoryContext.Provider value={{ useDate, setDate, useQuery, setQuery, updateQuery }}>
            {children}
        </HistoryContext.Provider>
    )
}
