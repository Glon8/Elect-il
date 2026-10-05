import { useContext } from 'react'

import { LanguageContext } from '../context/LanguageContext'

import SectionBody from '../components/SectionBody'
import HeadA from '../components/headers/HeadA'
import AText from '../components/AText'
import Seperator from '../components/Seperator'
import { Flex } from '@chakra-ui/react'

export default function Opening() {
    const { translation } = useContext(LanguageContext);

    return (
        <SectionBody pt={'4rem'} justifyContent={'center'} alignItems={'center'}>
            <HeadA mb={0}>{translation?.opening?.title}</HeadA>
            <Seperator />
            <Flex flexDir={'column'} gapY={5}>
            <AText>{translation?.opening?.p1}</AText>
            <AText>{translation?.opening?.p2}</AText>
            </Flex>
        </SectionBody>
    )
}