import { useContext, useState } from 'react'

import { Button, Flex, Text, useMediaQuery } from '@chakra-ui/react'

import { PageContext } from '../context/PageContext'
import { LanguageContext } from '../context/LanguageContext'
import { HistoryContext } from '../context/HistoryContext'

import PopUpBody from '../components/PopUpBody'
import HeadA from '../components/headers/HeadA'
import HeadC from '../components/headers/HeadC'
import Seperator from '../components/Seperator'

export default function VoteConfirm() {
    const { translation } = useContext(LanguageContext);
    const { votePop, votePopFlip } = useContext(PageContext);
    const { selected, dateObj, setSelected, vote } = useContext(HistoryContext);

    const [isSmall] = useMediaQuery("(max-width: 767px)");

    const [useChecked, setChecked] = useState(false);

    const dict = translation?.voteconfirm;

    const reset = () => { setSelected(-1); setChecked(false); votePopFlip(); }

    return (
        <PopUpBody displayTrig={votePop} bgOnClick={reset} gapY={3} py={isSmall ? '2rem' : '4rem'} minW={'20rem'} w={isSmall ? '95%' : '30rem'} h={'auto'} maxH={isSmall ? '80%' : ''} px={5} justifyContent={'space-between'}>
            <HeadA m={0}>{dict?.title}</HeadA>
            <Seperator m={0} />
            <Flex w={'full'} alignItems={'center'} gapY={3} flexDir={'column'}>
                <Text color={'black'} p={2} rounded={'md'} borderWidth={1} borderColor={'gray.300'}>{dict?.disclaimer}</Text>
                <Flex w={'full'} gapX={3}>
                    <input type='checkbox' checked={useChecked} onChange={() => setChecked(!useChecked)} />
                    <HeadC color={'black'}>{dict?.label}</HeadC>
                </Flex>
            </Flex>
            <Flex color={'black'} w={'full'} alignItems={'center'} gapY={1} flexDir={'column'} p={2} rounded={'md'} borderWidth={1} borderColor={'gray.300'}>
                <Text>{dict?.question}</Text>
                <HeadC>{selected !== -1 ? `${dateObj?.parties[selected]} > ${dateObj?.candidates[selected]}` : 'Party > Candidate'}</HeadC>
            </Flex>
            <Flex w={'full'} justifyContent={'space-evenly'} alignItems={'center'} flexDir={isSmall ? '' : 'column-reverse'} gapY={3}>
                <Button disabled={!useChecked} w={'40%'} bg={'#384480'} color={'white'} onClick={() => { vote(); reset(); }}>{dict?.positive}</Button>
                <Button w={'40%'} bg={'#384480'} color={'white'} onClick={reset}>{dict?.negative}</Button>
            </Flex>
        </PopUpBody>
    )
}
