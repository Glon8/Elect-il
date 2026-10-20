import { useContext, useState, useEffect } from 'react'

import { Flex } from '@chakra-ui/react'

import { LanguageContext } from '../context/LanguageContext'
import { HistoryContext } from '../context/HistoryContext'

import { dateReadify } from '../../util'

import SectionBody from '../components/SectionBody'
import HeadA from '../components/headers/HeadA'
import HeadB from '../components/headers/HeadB'
import HeadC from '../components/headers/HeadC'
import AText from '../components/AText'
import Seperator from '../components/Seperator'

export default function Moderation() {
    const { translation } = useContext(LanguageContext);
    const { voteObj } = useContext(HistoryContext);

    const [useVotes, setVotes] = useState(0);

    //const dict = translation?.moderation;

    const totalVotes = (object) => object?.votes.reduce((total, value) => total + value, 0);

    useEffect(() => {
        if (!voteObj) return;

        const sum = totalVotes(voteObj);

        setVotes(sum);
    }, [voteObj]);

    const buttonsList = [
        {
            value: 'Cancel voting',
            todo: () => { console.log('Voting has been canceled') }
        },
        {
            value: 'Start voting',
            todo: () => { console.log('Voting has been started') }
        },
        {
            value: 'Switch On/Off AI manager',
            todo: () => { console.log('AI manager has been switched') }
        },
    ];

    return (
        <SectionBody justifyContent={'center'} gapY={3}>

            <HeadA mb={0}>Moderation page</HeadA>
            <Seperator mt={2} mb={3} />
            <HeadB>Ongoing voting</HeadB>
            {
                voteObj?.open ?
                    <>
                        <Flex gapY={2} flexDir={'column'} p={2} rounded={'md'} borderWidth={1} borderColor={'gray.300'}>
                            <Flex gapX={3} borderBottomWidth={1} borderColor={'gray.300'}>
                                <Flex gapX={1}>
                                    <HeadC>From - </HeadC>
                                    <AText>{dateReadify(voteObj?.starts)}</AText>
                                </Flex>
                                <Flex gapX={1}>
                                    <HeadC>To - </HeadC>
                                    <AText>{dateReadify(voteObj?.ends)}</AText>
                                </Flex>
                                <Flex gapX={1}>
                                    <HeadC>Total votes: </HeadC>
                                    <AText>{useVotes}</AText>
                                </Flex>
                            </Flex>
                            <Flex gapX={1} flexDir={'column'}>
                                <HeadC>Custom label says:</HeadC>
                                <AText>{translation?.votinGreeting?.greeting}</AText>
                            </Flex>
                        </Flex>
                        <HeadB>Client Hashes</HeadB>
                        <Flex gapY={2} flexDir={'column'} p={2} rounded={'md'} borderWidth={1} borderColor={'gray.300'}>
                            <Flex gapX={1}>
                                <HeadC>Hashes count: </HeadC>
                                {/*REQUIRED TO ADD A LIST OF CLIENTS HASHES! AND PULL FOR ITS COUNT!*/}
                                <AText>{useVotes}</AText>
                            </Flex>
                        </Flex>
                    </> : <AText p={2} rounded={'md'} borderWidth={1} borderColor={'gray.300'}>Currently no active votings!</AText>
            }
            <HeadB>Options</HeadB>
            <Flex flexDir={'column'}>
                { }
            </Flex>

        </SectionBody>
    )
}