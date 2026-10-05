import { useContext } from 'react'

import { Flex } from '@chakra-ui/react'
import { LanguageContext } from '../../context/LanguageContext'

import HeadB from '../../components/headers/HeadB'
import HeadC from '../../components/headers/HeadC'
import AText from '../../components/AText'

export default function Greeting({ ...props }) {
    const { translation } = useContext(LanguageContext);

    return (
        <Flex w={'100%'} flexDir={'column'} justifyContent={'center'} gapY={3} mb={5} {...props}>

            <HeadB>{translation?.votinGreeting?.title}</HeadB>
            <Flex gapY={5} flexDir={'column'} p={2} rounded={'md'} borderWidth={1} borderColor={'gray.300'}>
                <AText>{translation?.votinGreeting?.greeting}</AText>
                <Flex gapX={3}>
                    <HeadC>{translation?.votinGreeting?.began}:</HeadC>
                    <AText>[date]</AText>
                </Flex>
                <Flex gapX={3}>
                    <HeadC>{translation?.votinGreeting?.finish}:</HeadC>
                    <AText>[date]</AText>
                </Flex>
                <AText>{translation?.votinGreeting?.summary}</AText>
            </Flex>
        </Flex>
    )
}