import { useState, useContext } from 'react'

import { Button, Flex } from '@chakra-ui/react';

import { LanguageContext } from '../context/LanguageContext'
import { VotingContext } from '../context/VotingContext'

import SectionBody from '../components/SectionBody'
import HeadA from '../components/headers/HeadA';
import Missing from '../components/Missing'
import Greeting from './votingphases/Greeting'
import Policy from './votingphases/Policy';
import SignUp from './votingphases/SignUp';
import Vote from './votingphases/Vote'

export default function Voting() {
    const { translation } = useContext(LanguageContext);
    const { parties } = useContext(VotingContext);

    const [usePageState, setPageState] = useState(1);
    const [usePolicyState, setPolicyState] = useState(false);

    const cancel = () => setPageState(1);
    const nextPhase = () => setPageState(usePageState === 4 ? 1 : usePageState + 1);
    const policyState = () => setPolicyState(!usePolicyState);


    return (
        <SectionBody justifyContent={'center'} alignContent={'center'} gapY={'1rem'} my={'3rem'}>

            <HeadA>{translation?.voting?.title}</HeadA>
            {
                parties != null && parties.length != 0 ? (
                    <>
                        {usePageState === 1 ? <Greeting /> : ''}
                        {usePageState === 2 ? <Policy policySwitch={policyState} /> : ''}
                        {usePageState === 3 ? <SignUp /> : ''}
                        {usePageState === 4 ? <Vote /> : ''}

                        <Flex gapX={5} justifyContent={'space-around'}>
                            {usePageState === 1 ? '' : (
                                <Button w={'45%'} bg={'black'} color={'white'} onClick={() => { cancel(); setPolicyState(false); }}>
                                    {usePageState === 1 ? '' : translation?.voting?.cancel}
                                </Button>
                            )}
                            {usePageState === 4 ? '' : (
                                <Button disabled={usePageState == 2 && !usePolicyState} w={'45%'} bg={'black'} color={'white'} onClick={nextPhase}>
                                    {usePageState === 4 ? '' : translation?.voting?.continue}
                                </Button>
                            )}
                        </Flex>
                    </>
                ) : (<Missing >{translation?.voting?.error}</Missing>)
            }

        </SectionBody>
    )
}
