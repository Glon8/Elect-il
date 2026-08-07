import React, { useEffect, useState, useContext } from 'react'

import { Button, Flex, Input, Text } from '@chakra-ui/react';

import { PageContext } from '../context/PageContext';
import { SignContext } from '../context/SignContext';
import { LanguageContext } from '../context/LanguageContext';

import Body from '../components/Body'
import HeadBody from '../components/HeadBody';
import PhaseA from './signphases/PhaseA';
import PhaseB from './signphases/PhaseB';

export default function SignIn({ ...props }) {
    const { signPop, signPopFlip } = useContext(PageContext);
    const { translation } = useContext(LanguageContext);
    const [usePhase, setPhase] = useState('login');

    const send = () => { }

    return (
        <Body w={'100vw'} h={'100vh'} top={0} left={0} display={signPop ? 'center' : 'none'} position={'fixed'} bg={'black/70'} rounded={0} {...props}>

            <Flex zIndex={10} w={'100%'} h={'100%'} onClick={() => { signPopFlip(); }}></Flex>
            <Body py={'4rem'} zIndex={15} w={'20rem'} h={'25rem'} top={'50%'} left={'50%'} transform={'translate(-50%,-50%)'} position={'fixed'} display={'flex'} flexDir={'column'} justifyContent={'start'}>

                <HeadBody roundedTop={'xl'} >
                    <Button w={0} rounded={'full'} bg={'transparent'} color={'black'} borderColor={'gray.300'} fontWeight={'bolder'} fontSize={'xl'} onClick={() => { signPopFlip(); }}><i className='pi pi-times'></i></Button>
                </HeadBody>
                {
                    <PhaseA />
                }
                {
                    //<PhaseB />
                }
                <Button w={'60%'} bgColor={'gray'}>{translation?.signin?.button}</Button>

            </Body>

        </Body>
    )
}