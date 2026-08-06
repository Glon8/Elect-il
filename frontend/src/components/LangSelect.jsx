import React from 'react'

import './css/LangSelect.css';

export default function LangSelect({ list }) {
    return (
        <select className='def' defaultValue={'he'}>
            {
                list.map((item, ind) => {
                    return (<option key={`lang${ind}`} value={item.toLowerCase()}>{item}</option>);
                })
            }
        </select>
    )
}