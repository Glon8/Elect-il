import { useContext } from 'react'
import { Flex } from '@chakra-ui/react';

import { LanguageContext } from '../context/LanguageContext';

import SectionBody from '../components/SectionBody'
import HeaderA from '../components/headers/HeadA'
import AText from '../components/AText'

export default function Us() {
    const { translation } = useContext(LanguageContext);

    return (
        <SectionBody justifyContent={'center'} gapY={5}>
            <HeaderA>{translation?.us?.title}</HeaderA>
            <Flex flexDir={'column'} gapY={3}>
                <AText>{translation?.us?.p1}</AText>
                <AText>{translation?.us?.p2}</AText>
                <AText>{translation?.us?.p3}</AText>
            </Flex>
        </SectionBody>
    )
}
