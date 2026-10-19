import { useState, useContext } from 'react'

import { Button, Flex } from '@chakra-ui/react';

import { LanguageContext } from '../context/LanguageContext'
import { HistoryContext } from '../context/HistoryContext'

import SectionBody from '../components/SectionBody'
import HeadA from '../components/headers/HeadA';
import Missing from '../components/Missing'
import Greeting from './votingphases/Greeting'
import Policy from './votingphases/Policy';
import SignUp from './votingphases/SignUp';
import Vote from './votingphases/Vote'
import Seperator from '../components/Seperator';

export default function Voting() {
    const { translation } = useContext(LanguageContext);
    const { voteObj } = useContext(HistoryContext);

    const [usePageState, setPageState] = useState(1);
    const [usePolicyState, setPolicyState] = useState(false);
    const [useSignState, setSignState] = useState(false);

    const dict = translation?.voting;

    const cancel = () => { setPageState(1); setSignState(false); setPolicyState(false); }
    const nextPhase = () => setPageState(usePageState === 4 ? 1 : usePageState + 1);
    const policyState = () => setPolicyState(!usePolicyState);
    const signState = (state) => setSignState(state);


    return (
        <SectionBody tcpl bcpl justifyContent={'center'} alignContent={'center'} my={'3rem'}>

            <HeadA mb={0}>{dict?.title}</HeadA>
            <Seperator />
            {
                !!voteObj && Object.keys(voteObj).length !== 0 ? (
                    <>
                        {usePageState === 1 ? <Greeting /> : ''}
                        {usePageState === 2 ? <Policy policySwitch={policyState} /> : ''}
                        {usePageState === 3 ? <SignUp signSet={signState} /> : ''}
                        {usePageState === 4 ? <Vote /> : ''}

                        {
                            voteObj?.open ?
                                (<Flex mt={'1rem'} gapX={5} justifyContent={'space-around'}>
                                    {usePageState === 1 ? '' : (
                                        <Button w={'45%'} bg={'#384480'} color={'white'} onClick={() => { cancel(); setPolicyState(false); }}>
                                            {usePageState === 1 ? '' : dict?.cancel}
                                        </Button>
                                    )}
                                    {usePageState === 4 ? '' : (
                                        <Button disabled={usePageState == 2 && !usePolicyState || usePageState == 3 && !useSignState} w={'45%'} bg={'#384480'} color={'white'} onClick={nextPhase}>
                                            {usePageState === 4 ? '' : dict?.continue}
                                        </Button>
                                    )}
                                </Flex>) : ''
                        }
                    </>
                ) : (<Missing >{dict?.error}</Missing>)
            }

        </SectionBody>
    )
}
