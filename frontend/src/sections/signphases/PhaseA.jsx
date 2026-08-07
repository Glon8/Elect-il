import React, { useContext } from 'react'

import { Flex, Input, Text } from '@chakra-ui/react';

import { LanguageContext } from '../../context/LanguageContext';

export default function PhaseA({ ...props }) {
    const { translation } = useContext(LanguageContext);

    return (
        <Flex w={'100%'} h={'100%'} px={3} py={5} flexDir={'column'} justifyContent={'center'} alignItems={'end'} gapY={3} {...props}>
            <Text color={'black'} w={'100%'} textAlign={'center'}>{translation?.signin?.phaseone?.title}</Text>
            <Text color={'black'} w={'100%'} textAlign={'center'}>{translation?.signin?.phaseone?.desc}</Text>
            <Input placeholder={translation?.signin?.phaseone?.placeholder} />
        </Flex>
    )
}
