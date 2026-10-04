import { useContext } from 'react'

import { useMediaQuery } from '@chakra-ui/react'

import { LanguageContext } from '../context/LanguageContext';

import SectionBody from '../components/SectionBody'
import HeaderA from '../components/headers/HeadA'
import HeaderB from '../components/headers/HeadB'
import HeaderC from '../components/headers/HeadC'
import AText from '../components/AText'

export default function Encryption() {
    const [isSmall] = useMediaQuery("(max-width: 768px)");
    
    const { translation } = useContext(LanguageContext);

    return (
        <SectionBody justifyContent={'bottom'} overflowY={'auto'} gapY={3} my={'2rem'}>
            <HeaderA mt={isSmall ? 2 : 0}>{translation?.encryption?.title}</HeaderA>
            <AText> {translation?.encryption?.p1} </AText>
            <HeaderB>{translation?.encryption?.subTitle1}</HeaderB>
            <AText> {translation?.encryption?.p2} </AText>
            <AText> {translation?.encryption?.p3} </AText>
            <AText> {translation?.encryption?.p4} </AText>
            <HeaderC> {translation?.encryption?.p5} </HeaderC>
            <AText> {translation?.encryption?.p6} </AText>
            <HeaderB>{translation?.encryption?.subTitle2}</HeaderB>
            <AText> {translation?.encryption?.p7} </AText>
            <AText> {translation?.encryption?.p8} </AText>
            <AText> {translation?.encryption?.p9} </AText>
            <HeaderC> {translation?.encryption?.p10} </HeaderC>
        </SectionBody>
    )
}
