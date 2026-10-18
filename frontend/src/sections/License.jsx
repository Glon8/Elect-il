import { useContext } from 'react'

import { LanguageContext } from '../context/LanguageContext';

import SectionBody from '../components/SectionBody'
import HeaderA from '../components/headers/HeadA'
import AText from '../components/AText'
import Seperator from '../components/Seperator';

export default function License() {
    const { translation } = useContext(LanguageContext);

    const dict = translation?.license;

    return (
        <SectionBody justifyContent={'center'}>
            <HeaderA mb={0}>{dict?.title}</HeaderA>
            <Seperator mt={2} mb={3} />
            <AText>{dict?.p1}</AText>
        </SectionBody>
    )
}
