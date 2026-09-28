import { useContext } from 'react'

import { Text } from '@chakra-ui/react'
import { LanguageContext } from '../context/LanguageContext'

import SectionBody from '../components/SectionBody'
import AText from '../components/AText'

export default function Opening() {
    const { translation } = useContext(LanguageContext);

    return (
        <SectionBody pt={'4rem'} justifyContent={'center'} alignItems={'center'}>
            <Text fontSize={'2xl'} fontWeight={'bold'} textAlign={'center'} mb={5}>{translation?.opening?.title}</Text>
            <AText>{translation?.opening?.desc}</AText>
        </SectionBody>
    )
}