import { useState, useContext } from 'react'

import { Button, Flex, Input, Text, useMediaQuery } from '@chakra-ui/react'
import { LanguageContext } from '../../context/LanguageContext'

import HeadB from '../../components/headers/HeadB'
import { PseudoLink as Link } from '../../components/PseudoLink'

export default function SignUp({ ...props }) {
    const [isSmall] = useMediaQuery("(max-width: 768px)");

    const { orientation, translation } = useContext(LanguageContext);

    const [usePhase, setPhase] = useState(true);

    const phaseSwitch = () => setPhase(!usePhase);

    return (
        <Flex minH={'20rem'} flexDir={'column'} justifyContent={'center'} gapY={3} mx={isSmall ? '' : '1rem'} rounded={'md'} borderWidth={isSmall ? 0 : 1} borderColor={'gray.300'} px={5} {...props}>

            <Flex alignItems={'center'}>

                <Link disabled={usePhase} onClick={phaseSwitch}>
                    {
                        usePhase ?
                            <HeadB>{translation?.votingSignUp?.signUp}</HeadB> :
                            translation?.votingSignUp?.signUp
                    }
                </Link>
                <i className={`pi pi-angle-${orientation === 'ltr' ? 'right' : 'left'}`} />
                <Link disabled={!usePhase} onClick={phaseSwitch}>
                    {
                        !usePhase ?
                            <HeadB>{translation?.votingSignUp?.verify}</HeadB> :
                            translation?.votingSignUp?.verify
                    }
                </Link>

            </Flex>
            <Flex h={'auto'} flexDir={'column'} gapY={3}>

                <Text minH={'5rem'} h={'auto'} p={2} rounded={'md'} borderWidth={1} borderColor={'gray.300'} color={'gray'}>
                    {usePhase ? translation?.votingSignUp?.sug : translation?.votingSignUp?.vg}
                </Text>
                <Input placeholder={usePhase ? translation?.votingSignUp?.sup : translation?.votingSignUp?.vp}
                    type={"text"}
                    inputMode={"numeric"}
                    pattern={"[0-9]*"}
                    maxLength={usePhase ? 9 : 6} />
                <Flex w={'full'} justifyContent={'center'}>
                    <Button bgColor={'black'} w={'100%'} h={'2rem'} onClick={() => {
                        if (usePhase) phaseSwitch();
                    }}>{translation?.votingSignUp?.send}</Button>
                </Flex>

            </Flex>

        </Flex>
    )
}