import { useState, useContext } from 'react'

import { Button, Flex, Input } from '@chakra-ui/react'
import { LanguageContext } from '../../context/LanguageContext'

import HeadB from '../../components/headers/HeadB'
import AText from '../../components/AText'

export default function SignUp({ ...props }) {
    const { translation } = useContext(LanguageContext);

    return (
        <Flex minH={'20rem'} flexDir={'column'} justifyContent={'center'} gapY={3} {...props}>
            <HeadB>Sign-Up</HeadB>
            <AText>{translation?.signin?.phaseone?.desc}</AText>
            <Input placeholder={translation?.signin?.phaseone?.placeholder} />
            <HeadB>Verify</HeadB>
            <AText>{translation?.signin?.phasetwo?.desc}</AText>
            <Input placeholder={translation?.signin?.phasetwo?.placeholder} />
            <Flex w={'full'} justifyContent={'center'}><Button w={'96%'} h={'2rem'}>Back</Button></Flex>
        </Flex>
    )
}