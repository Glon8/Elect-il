import { useContext } from 'react'

import { Flex } from '@chakra-ui/react'
import { LanguageContext } from '../../context/LanguageContext'
import { HistoryContext } from '../../context/HistoryContext'

import HeadB from '../../components/headers/HeadB'
import HeadC from '../../components/headers/HeadC'
import AText from '../../components/AText'

export default function Greeting({ ...props }) {
    const { translation } = useContext(LanguageContext);
    const { dateObj } = useContext(HistoryContext);

    const dict = translation?.votinGreeting;

    const readify = (obj) => obj?.replace(/-/g, '.')

    return (
        <Flex w={'100%'} flexDir={'column'} justifyContent={'center'} gapY={3} mb={5} {...props}>

            <HeadB>{dict?.title}</HeadB>
            <Flex gapY={5} flexDir={'column'} p={2} rounded={'md'} borderWidth={1} borderColor={'gray.300'}>
                <AText>{dict?.greeting}</AText>
                <Flex gapX={3}>
                    <HeadC>{dict?.began}:</HeadC>
                    <AText>{readify(dateObj?.starts)}</AText>
                </Flex>
                <Flex gapX={3}>
                    <HeadC>{dict?.finish}:</HeadC>
                    <AText>{readify(dateObj?.ends)}</AText>
                </Flex>
                <AText>{dict?.summary}</AText>
            </Flex>

        </Flex>
    )
}