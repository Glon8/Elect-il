import React, { useContext } from 'react'

import { Flex, Input, Text } from '@chakra-ui/react';

import { LanguageContext } from '../../context/LanguageContext';
import HeadA from '../../components/headers/HeadA';
import AText from '../../components/AText'

export default function PhaseB({ ...props }) {
    const { translation } = useContext(LanguageContext);

    return (
        <Flex w={'100%'} h={'100%'} px={3} py={5} flexDir={'column'} justifyContent={'center'} alignItems={'end'} gapY={3} {...props}>
            <HeadA color={'black'} w={'100%'} textAlign={'center'}>{translation?.signin?.phasetwo?.title}</HeadA>
            <AText color={'black'} w={'100%'} textAlign={'center'}>{translation?.signin?.phasetwo?.desc}</AText>
            <Input color={'black'} placeholder={translation?.signin?.phasetwo?.placeholder} />
        </Flex>
    )
}