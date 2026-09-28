import { useState, useContext } from 'react'

import { Button } from '@chakra-ui/react';

import { PageContext } from '../context/PageContext';
import { SignContext } from '../context/SignContext';
import { LanguageContext } from '../context/LanguageContext';

import PopUpBody from '../components/PopUpBody'
import HeadBody from '../components/HeadBody';
import PhaseA from './signphases/PhaseA';
import PhaseB from './signphases/PhaseB';

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
            {
                usePhase === "cred" ? <PhaseA /> : null
            }
            {
                usePhase === "verify" ? <PhaseB /> : null
            }
            <Button w={'60%'} bg={'black'} color={'white'} onClick={switchPhase}>{translation?.signin?.button}</Button>

        </PopUpBody>
    )
}