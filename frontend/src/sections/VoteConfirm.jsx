import { useContext, useState } from 'react'

import { Button, Flex, Text, useMediaQuery } from '@chakra-ui/react'

import { PageContext } from '../context/PageContext'
import { LanguageContext } from '../context/LanguageContext'
import { VotingContext } from '../context/VotingContext'

import PopUpBody from '../components/PopUpBody'
import HeadA from '../components/headers/HeadA'
import HeadC from '../components/headers/HeadC'

export default function VoteConfirm() {
    const { translation } = useContext(LanguageContext);
    const { votePop, votePopFlip } = useContext(PageContext);
    const { selected, setSelected, vote } = useContext(VotingContext);

    const [useChecked, setChecked] = useState(false);

    const [isSmall] = useMediaQuery("(max-width: 767px)");

    const reset = () => { setSelected(null); setChecked(false); votePopFlip(); }

    return (
        <PopUpBody displayTrig={votePop} bgOnClick={reset} gapY={3} py={isSmall ? '2rem' : '4rem'} minW={'20rem'} w={isSmall ? '95%' : '30rem'} h={isSmall ? 'auto' : '35rem'} maxH={isSmall ? '80%' : ''} px={5} justifyContent={'space-between'}>
            <HeadA m={0} color={'black'}>{translation?.voteconfirm?.title}</HeadA>
            <Flex w={'full'} alignItems={'center'} gapY={1} flexDir={'column'}>
                <Text color={'black'}>{translation?.voteconfirm?.disclaimer}</Text>
                <Flex w={'full'} gapX={3}>
                    <input type='checkbox' checked={useChecked} onChange={() => setChecked(!useChecked)} />
                    <HeadC color={'black'}>{translation?.voteconfirm?.label}</HeadC>
                </Flex>
            </Flex>
            <Flex color={'black'} w={'full'} alignItems={'center'} gapY={1} flexDir={'column'}>
                <Text>{translation?.voteconfirm?.question}</Text>
                <HeadC>{selected ? `${selected?.party} > ${selected?.candidate}` : 'Party > Candidate'}</HeadC>
            </Flex>
            <Flex w={'full'} justifyContent={'space-evenly'} alignItems={'center'} flexDir={isSmall ? '' : 'column-reverse'} gapY={3}>
                <Button disabled={!useChecked} w={'40%'} bg={'black'} color={'white'} onClick={() => { vote(); reset(); }}>{translation?.voteconfirm?.positive}</Button>
                <Button w={'40%'} bg={'black'} color={'white'} onClick={reset}>{translation?.voteconfirm?.negative}</Button>
            </Flex>
        </PopUpBody>
    )
}
