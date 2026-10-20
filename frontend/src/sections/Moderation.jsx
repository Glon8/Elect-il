import { useContext } from 'react'

import { LanguageContext } from '../context/LanguageContext';

import SectionBody from '../components/SectionBody'
import HeaderA from '../components/headers/HeadA'
import AText from '../components/AText'
import Seperator from '../components/Seperator';

export default function Moderation() {
    const { translation } = useContext(LanguageContext);

    //const dict = translation?.moderation;

    return (
        <SectionBody justifyContent={'center'}>
            <HeaderA mb={0}>Moderation page</HeaderA>
            <Seperator mt={2} mb={3} />
            <AText>Here you ll be able to manage the entire site!</AText>
        </SectionBody>
    )
}