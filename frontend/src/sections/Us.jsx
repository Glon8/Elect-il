import { useContext } from 'react'
import { Flex, useMediaQuery } from '@chakra-ui/react';

import { LanguageContext } from '../context/LanguageContext';

import SectionBody from '../components/SectionBody'
import HeaderA from '../components/headers/HeadA'
import AText from '../components/AText'

export default function Us() {
    const { translation } = useContext(LanguageContext);
    const [isSmall] = useMediaQuery("(max-width: 768px)");

    return (
        <SectionBody  justifyContent={isSmall ? 'bottom' : 'center'} overflowY={'auto'} gapY={3} my={'2rem'}>
            <HeaderA>{translation?.us?.title}</HeaderA>
            <Flex flexDir={'column'} gapY={3}>
                <AText>{translation?.us?.p1}</AText>
                <AText>{translation?.us?.p2}</AText>
                <AText>{translation?.us?.p3}</AText>
            </Flex>
        </SectionBody>
    )
}
