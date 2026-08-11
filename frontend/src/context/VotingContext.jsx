import React, { createContext, useState } from 'react'

export const VotingContext = createContext(null);

export const VotingProvider = ({ children }) => {
    const [useParties, setParties] = useState([]);
    const [useSelected, setSelected] = useState(null);

    const example = [{
        party: "Likud",
        candidate: "Benjamin Netanyahu",
        votes: 1125437,
    },
    {
        party: "Yesh Atid",
        candidate: "Yair Lapid",
        votes: 734221,
    },
    {
        party: "National Unity",
        candidate: "Benny Gantz",
        votes: 681992,
    },
    {
        party: "Yisrael Beiteinu",
        candidate: "Avigdor Lieberman",
        votes: 312874,
    },
    {
        party: "Religious Zionism",
        candidate: "Bezalel Smotrich",
        votes: 286541,
    },
    {
        party: "Otzma Yehudit",
        candidate: "Itamar Ben-Gvir",
        votes: 254199,
    },
    {
        party: "Shas",
        candidate: "Aryeh Deri",
        votes: 417853,
    },
    {
        party: "United Torah Judaism",
        candidate: "Yitzhak Goldknopf",
        votes: 298744,
    }];

    const pullPartiesData = () => { // < returs the data tha has been pulled (UPON INITIATION)
        // < pull the lates parties off the server for THOSE elections (choosen)

        // temporary data for example
        return example;
    };

    const updateParties = (year) => { //< updates the useParties list (FOR HISTORY)
        // < pull the lates parties off the server for THOSE elections (choosen)

        // temporary data for example
        setParties(example);
    }

    const vote = () => { }

    return (
        <VotingContext.Provider value={{ parties: useParties, setParties, updateParties, pullPartiesData, vote, selected: useSelected, setSelected }}>
            {children}
        </VotingContext.Provider>
    )
}
