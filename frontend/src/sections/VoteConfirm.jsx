import React, { useContext } from 'react'

import { Button, Checkbox, Flex, Text } from '@chakra-ui/react'

import { PageContext } from '../context/PageContext'
import { LanguageContext } from '../context/LanguageContext'

import PopUpBody from '../components/PopUpBody'

export default function VoteConfirm({ onConfirm }) {
    const { translation } = useContext(LanguageContext);
    const { votePop, votePopFlip } = useContext(PageContext);

    return (
        <PopUpBody displayTrig={votePop} bgOnClick={votePopFlip}>
            <Text>{translation?.voteconfirm?.title}</Text>
            <Text>{translation?.voteconfirm?.disclaimer}</Text>
            <Flex>
                <Text>{translation?.voteconfirm?.label}</Text>
                <input type='checkbox' />
            </Flex>
            <Text>{translation?.voteconfirm?.question}</Text>
            <Text></Text>
            <Flex>
                <Button onClick={onConfirm}>{translation?.voteconfirm?.positive}</Button>
                <Button onClick={votePopFlip}>{translation?.voteconfirm?.negative}</Button>
            </Flex>
        </PopUpBody>
    )
}
