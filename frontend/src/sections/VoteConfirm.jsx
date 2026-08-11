import React, { useContext, useState } from 'react'

import { Button, Checkbox, Flex, Text, useMediaQuery } from '@chakra-ui/react'

import { PageContext } from '../context/PageContext'
import { LanguageContext } from '../context/LanguageContext'
import { VotingContext } from '../context/VotingContext'

import PopUpBody from '../components/PopUpBody'

export default function VoteConfirm() {
    const { translation } = useContext(LanguageContext);
    const { votePop, votePopFlip } = useContext(PageContext);
    const { selected, setSelected, vote } = useContext(VotingContext);

    const [useChecked, setChecked] = useState(false);

    const [isSmall] = useMediaQuery("(max-width: 767px)");

    const reset = () => { setSelected(null); setChecked(false); votePopFlip(); }

    return (
        <PopUpBody displayTrig={votePop} bgOnClick={reset} gapY={3} py={isSmall ? '2rem' : '4rem'} minW={'20rem'} w={isSmall ? '95%' : '30rem'} h={isSmall ? 'auto' : '35rem'} maxH={isSmall ? '80%' : ''} px={5} justifyContent={'space-between'}>
            <Text color={'black'}>{translation?.voteconfirm?.title}</Text>
            <Flex w={'full'} alignItems={'center'} gapY={1} flexDir={'column'}>
                <Text>{translation?.voteconfirm?.disclaimer}</Text>
                <Flex w={'full'} gapX={3}>
                    <input type='checkbox' checked={useChecked} onChange={() => setChecked(!useChecked)} />
                    <Text color={'black'}>{translation?.voteconfirm?.label}</Text>
                </Flex>
            </Flex>
            <Flex color={'black'} w={'full'} alignItems={'center'} gapY={1} flexDir={'column'}>
                <Text>{translation?.voteconfirm?.question}</Text>
                <Text>{selected ? `${selected?.party} > ${selected?.candidate}` : 'Party > Candidate'}</Text>
            </Flex>
            <Flex w={'full'} justifyContent={'space-evenly'} alignItems={'center'} flexDir={isSmall ? '' : 'column-reverse'} gapY={3}>
                <Button disabled={!useChecked} w={'40%'} bg={'black'} color={'white'} onClick={() => { vote(); reset(); }}>{translation?.voteconfirm?.positive}</Button>
                <Button w={'40%'} bg={'black'} color={'white'} onClick={reset}>{translation?.voteconfirm?.negative}</Button>
            </Flex>
        </PopUpBody>
    )
}
