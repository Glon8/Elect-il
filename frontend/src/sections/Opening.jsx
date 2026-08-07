import React, { useContext } from 'react'

import { Text } from '@chakra-ui/react'
import { LanguageContext } from '../context/LanguageContext'

import SectionBody from '../components/SectionBody'
import Body from '../components/Body'

export default function Opening() {
    const { translation } = useContext(LanguageContext);

    return (
        <SectionBody pt={'4rem'} justifyContent={'center'} alignItems={'center'} px={{ base: '1rem', smToMd: '1rem' }}>
            <Text>{translation?.opening?.title}</Text>
            <Text>{translation?.opening?.desc}</Text>
        </SectionBody>
    )
}