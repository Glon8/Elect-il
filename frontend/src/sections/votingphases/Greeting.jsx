import { useContext } from 'react'

import { Flex } from '@chakra-ui/react'
import { LanguageContext } from '../../context/LanguageContext'

import HeadB from '../../components/headers/HeadB'
import AText from '../../components/AText'

export default function Greeting({ ...props }) {
    const { translation } = useContext(LanguageContext);

    return (
        <Flex w={'100%'} flexDir={'column'} justifyContent={'center'} gapY={3} {...props}>

            <HeadB>On Going Voting</HeadB>
            <AText>Voting began at [date] and is about to finish at [date], join in before the time get expired!</AText>

        </Flex>
    )
}