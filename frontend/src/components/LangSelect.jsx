import React, { useContext, useEffect, useState } from 'react'

import './css/LangSelect.css';

import { LanguageContext } from '../context/LanguageContext';

export default function LangSelect({ list }) {
    const { language, langUpdate, translation } = useContext(LanguageContext);

    const langSupported = [
        { he: translation?.langSelector?.he },
        { en: translation?.langSelector?.en },
        { ru: translation?.langSelector?.ru },
    ];

    return (
        <select className='def' value={language} onChange={(e) => langUpdate(e.target.value)}>
            {
                langSupported.map((item, ind) => {
                    const [[key, value]] = Object.entries(item);

                    return (<option disabled={language == key} key={`lang${ind}`} value={key}>{value}</option>);
                })
            }
        </select>
    )
}