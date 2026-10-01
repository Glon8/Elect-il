import { useContext } from 'react'

import { LanguageContext } from '../context/LanguageContext';

import SectionBody from '../components/SectionBody'
import HeaderA from '../components/headers/HeadA'
import AText from '../components/AText'

export default function License() {
    const { translation } = useContext(LanguageContext);

    return (
        <SectionBody justifyContent={'center'}>
            <HeaderA>License</HeaderA>
            <AText>Some text</AText>
        </SectionBody>
    )
}
