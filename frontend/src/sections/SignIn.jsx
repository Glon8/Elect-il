import { useState, useContext } from 'react'

import { Button, Input, Flex, Text } from '@chakra-ui/react';

import { PageContext } from '../context/PageContext';
import { SignContext } from '../context/SignContext';
import { LanguageContext } from '../context/LanguageContext';

import PopUpBody from '../components/PopUpBody'
import HeadBody from '../components/HeadBody';
import HeadA from '../components/headers/HeadA';
import Seperator from '../components/Seperator';

export default function SignIn() {
    const { signPop, signPopFlip } = useContext(PageContext);
    const { translation } = useContext(LanguageContext);
    const [usePhase, setPhase] = useState('cred');

    const switchPhase = () => {
        setPhase(usePhase === 'cred' ? 'verify' : 'cred')
    }

    const send = () => { }

    return (
        <PopUpBody displayTrig={signPop} bgOnClick={signPopFlip}>

            <HeadBody roundedTop={'xl'} >

                <Button w={0} rounded={'full'} bg={'transparent'} color={'black'} borderColor={'gray.300'} fontWeight={'bolder'} fontSize={'xl'} onClick={signPopFlip}><i className='pi pi-times'></i></Button>

            </HeadBody>
            <Flex alignItems={'center'} w={'100%'} px={'1rem'} flexDir={'column'} gapY={3}>

                <HeadA w={'100%'} mb={0}>{translation?.signin?.title}</HeadA>
                <Seperator mt={2} mb={3} />
                <Input placeholder={translation?.signin?.username}
                    type={"text"}
                    pattern={"[A-Za-z0-9!@#$%&_-?]*"}
                    maxLength={24} />
                <Input placeholder={translation?.signin?.password}
                    type={"text"}
                    pattern={"[A-Za-z0-9!@#$%&?]*"}
                    maxLength={24} />
                <Flex gap={3} p={1} w={'100%'} borderWidth={1} borderColor={'gray.300'} color={'gray'} rounded={'md'} alignItems={'center'}>
                    <Flex w={6} h={6} borderWidth={1} borderColor={'gray'} rounded={'full'} alignItems={'center'} justifyContent={'center'}><i className='pi pi-info' /></Flex>
                    <Text>{translation?.signin?.warning}</Text>
                </Flex>
                <Button w={'100%'} bg={'black'} color={'white'} onClick={switchPhase}>{translation?.signin?.send}</Button>

            </Flex>

        </PopUpBody>
    )
}