import { useState, useEffect, useContext } from 'react'

import { Button, Flex, Input, Text, useMediaQuery } from '@chakra-ui/react'
import { LanguageContext } from '../../context/LanguageContext'

import { verify } from '../../util'

import HeadB from '../../components/headers/HeadB'
import { PseudoLink as Link } from '../../components/PseudoLink'

export default function SignUp({ signSet, ...props }) {
    const [isSmall] = useMediaQuery("(max-width: 768px)");

    const { orientation, translation } = useContext(LanguageContext);

    const [usePhase, setPhase] = useState(true);
    const [useId, setId] = useState('');
    const [useCode, setcode] = useState('');
    const [useTypo, setTypo] = useState(false);
    const [useSent, setSent] = useState(false);

    const phaseSwitch = () => setPhase(!usePhase);
    const send = () => {
        if (usePhase && !useTypo && useId.length === 9) phaseSwitch();
        else if (!usePhase && !useTypo && useCode.length === 6) {
            signSet(true);
            setSent(true);
        }
    }
    const change = (e) => {
        const val = e.target.value;

        if (usePhase && val != useId) setId(val);
        else if (!usePhase && val != useCode) setcode(val);
    }

    useEffect(() => {
        const check = verify(usePhase ? useId : useCode,
            /^[0-9]+$/,
            usePhase ? 9 : 6);

        if (useTypo != !check) setTypo(!useTypo);
    }, [useId, useCode]);

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
                <Link disabled={!usePhase} onClick={() => !useTypo && useId.length === 9 ? phaseSwitch() : null}>
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
                    value={usePhase ? useId : useCode}
                    onChange={change}
                    type={"text"}
                    inputMode={"numeric"}
                    pattern={"[0-9]*"}
                    maxLength={usePhase ? 9 : 6}
                    color={useTypo ? 'red' : 'black'} />
                <Flex w={'full'} justifyContent={'center'}>
                    <Button disabled={useSent} bgColor={'black'} color={'white'} w={'100%'} h={'2rem'} onClick={send}>{translation?.votingSignUp?.send}</Button>
                </Flex>

            </Flex>

        </Flex>
    )
}