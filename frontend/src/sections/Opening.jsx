import { useContext } from 'react'

import { Text } from '@chakra-ui/react'
import { LanguageContext } from '../context/LanguageContext'

import SectionBody from '../components/SectionBody'

export default function Opening() {
    const { translation } = useContext(LanguageContext);

    return (
        <SectionBody pt={'4rem'} justifyContent={'center'} alignItems={'center'}>
            <Text fontSize={'2xl'} fontWeight={'bold'} textAlign={'center'} mb={5}>{translation?.opening?.title}</Text>
            <Text fontSize={'lg'}>{translation?.opening?.desc}</Text>
        </SectionBody>
    )
}