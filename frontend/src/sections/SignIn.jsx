import React, { useEffect, useState, useContext } from 'react'

import { Button, Flex, Input, Text } from '@chakra-ui/react';

import { PageContext } from '../context/PageContext';
import { SignContext } from '../context/SignContext';
import { LanguageContext } from '../context/LanguageContext';

import PopUpBody from '../components/PopUpBody'
import HeadBody from '../components/HeadBody';
import PhaseA from './signphases/PhaseA';
import PhaseB from './signphases/PhaseB';

export default function SignIn({ ...props }) {
    const { signPop, signPopFlip } = useContext(PageContext);
    const { translation } = useContext(LanguageContext);
    const [usePhase, setPhase] = useState('login');

    const send = () => { }

    return (
        <PopUpBody displayTrig={signPop} bgOnClick={signPopFlip}>

            <HeadBody roundedTop={'xl'} >
                <Button w={0} rounded={'full'} bg={'transparent'} color={'black'} borderColor={'gray.300'} fontWeight={'bolder'} fontSize={'xl'} onClick={signPopFlip}><i className='pi pi-times'></i></Button>
            </HeadBody>
            {
                <PhaseA />
            }
            {
                //<PhaseB />
            }
            <Button w={'60%'} bgColor={'gray'} color={'white'}>{translation?.signin?.button}</Button>

        </PopUpBody>
    )
}