import React, { useContext, useEffect, useState } from 'react'

import './css/LangSelect.css';

import { LanguageContext } from '../context/LanguageContext';

export default function LangSelect({ list }) {
    const { language, langUpdate } = useContext(LanguageContext);

    return (
        <select className='def' value={language} onChange={(e) => langUpdate(e.target.value)}>
            {
                list.map((item, ind) => {
                    return (<option disabled={language == item.toLowerCase()} key={`lang${ind}`} value={item.toLowerCase()}>{item}</option>);
                })
            }
        </select>
    )
}