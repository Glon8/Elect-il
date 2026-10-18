import { useContext } from 'react'
import { Flex, useMediaQuery } from '@chakra-ui/react';

import { LanguageContext } from '../context/LanguageContext';

import SectionBody from '../components/SectionBody'
import HeaderA from '../components/headers/HeadA'
import AText from '../components/AText'
import Seperator from '../components/Seperator';

export default function Us() {
    const { translation } = useContext(LanguageContext);

    const [isSmall] = useMediaQuery("(max-width: 768px)");

    const dict = translation?.us;

    return (
        <SectionBody justifyContent={isSmall ? 'bottom' : 'center'} overflowY={'auto'} gapY={3} my={'2rem'}>
            <HeaderA mb={0}>{dict?.title}</HeaderA>
            <Seperator mt={2} mb={3} />
            <Flex flexDir={'column'} gapY={3}>
                <AText>{dict?.p1}</AText>
                <AText>{dict?.p2}</AText>
                <AText>{dict?.p3}</AText>
            </Flex>
        </SectionBody>
    )
}
