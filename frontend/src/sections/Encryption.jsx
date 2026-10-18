import { useContext } from 'react'

import { useMediaQuery } from '@chakra-ui/react'

import { LanguageContext } from '../context/LanguageContext';

import SectionBody from '../components/SectionBody'
import HeaderA from '../components/headers/HeadA'
import HeaderB from '../components/headers/HeadB'
import HeaderC from '../components/headers/HeadC'
import AText from '../components/AText'
import Seperator from '../components/Seperator';

export default function Encryption() {
    const { translation } = useContext(LanguageContext);

    const [isSmall] = useMediaQuery("(max-width: 768px)");

    const dict = translation?.encryption;

    return (
        <SectionBody justifyContent={'bottom'} overflowY={'auto'} gapY={3} my={'2rem'}>
            <HeaderA mb={0} mt={isSmall ? 2 : 0}>{dict?.title}</HeaderA>
            <Seperator mt={2} mb={3} />
            <AText> {dict?.p1} </AText>
            <HeaderB>{dict?.subTitle1}</HeaderB>
            <AText> {dict?.p2} </AText>
            <AText> {dict?.p3} </AText>
            <AText> {dict?.p4} </AText>
            <HeaderC> {dict?.p5} </HeaderC>
            <AText> {dict?.p6} </AText>
            <HeaderB>{dict?.subTitle2}</HeaderB>
            <AText> {dict?.p7} </AText>
            <AText> {dict?.p8} </AText>
            <AText> {dict?.p9} </AText>
            <HeaderC> {dict?.p10} </HeaderC>
        </SectionBody>
    )
}
