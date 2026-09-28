import { useContext } from 'react'

import { Flex, Input } from '@chakra-ui/react';

import { LanguageContext } from '../../context/LanguageContext';
import HeadA from '../../components/headers/HeadA';
import AText from '../../components/AText'

export default function PhaseA({ ...props }) {
    const { translation } = useContext(LanguageContext);

    return (
        <Flex w={'100%'} h={'100%'} px={3} py={5} flexDir={'column'} justifyContent={'center'} alignItems={'end'} gapY={3} {...props}>
            <HeadA color={'black'} w={'100%'} textAlign={'center'}>{translation?.signin?.phaseone?.title}</HeadA>
            <AText color={'black'} w={'100%'} textAlign={'center'}>{translation?.signin?.phaseone?.desc}</AText>
            <Input color={'black'} placeholder={translation?.signin?.phaseone?.placeholder} />
        </Flex>
    )
}
