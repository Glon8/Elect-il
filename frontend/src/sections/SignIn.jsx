import { useState, useContext, useEffect } from 'react'

import { Button, Input, Flex, Text } from '@chakra-ui/react';

import { PageContext } from '../context/PageContext';
import { SignContext } from '../context/SignContext';
import { LanguageContext } from '../context/LanguageContext';

import { verify } from '../util'

import PopUpBody from '../components/PopUpBody'
import HeadBody from '../components/HeadBody';
import HeadA from '../components/headers/HeadA';
import Seperator from '../components/Seperator';

export default function SignIn() {
    const { signPop, signPopFlip } = useContext(PageContext);
    const { translation } = useContext(LanguageContext);

    const [useName, setName] = useState('');
    const [usePass, setPass] = useState('');
    const [useTypo, setTypo] = useState(false);

    const send = () => {
        if (!useName || !usePass) {
            if (!useName) console.log('Error: User name invalid');
            if (!usePass) console.log('Error: Pasword invalid');

            return;
        }

        console.log('sent');

        setName('');
        setPass('');
    }
    const nameChange = (e) => { const val = e.target.value; if (val != useName) setName(val); }
    const passChange = (e) => { const val = e.target.value; if (val != usePass) setPass(val); }
    const close = () => {
        signPopFlip();

        setName('');
        setPass('');
    }

    useEffect(() => {
        const check = verify(useName, /^[A-Za-z0-9!@#$%&_?-]+$/, 24);

        if (useTypo != !check) setTypo(!useTypo);
    }, [useName]);

    useEffect(() => {
        const check = verify(usePass, /^[A-Za-z0-9!@#$%&?]+$/, 24);

        if (useTypo != !check) setTypo(!useTypo);
    }, [usePass]);

    return (
        <PopUpBody displayTrig={signPop} bgOnClick={close}>

            <HeadBody roundedTop={'xl'} >

                <Button w={0} rounded={'full'} bg={'transparent'} color={'black'} borderColor={'gray.300'} fontWeight={'bolder'} fontSize={'xl'} onClick={close}><i className='pi pi-times'></i></Button>

            </HeadBody>
            <Flex alignItems={'center'} w={'100%'} px={'1rem'} flexDir={'column'} gapY={3}>

                <HeadA w={'100%'} mb={0} color={'black'}>{translation?.signin?.title}</HeadA>
                <Seperator mt={2} mb={3} />
                <Input value={useName}
                    placeholder={translation?.signin?.username}
                    onChange={nameChange}
                    type={"text"}
                    pattern={"[A-Za-z0-9!@#$%&_-?]*"}
                    maxLength={24}
                    color={'black'} />
                <Input value={usePass}
                    placeholder={translation?.signin?.password}
                    onChange={passChange}
                    type={"text"}
                    pattern={"[A-Za-z0-9!@#$%&?]*"}
                    maxLength={24}
                    color={'black'} />
                <Flex gap={3} p={1} w={'100%'} borderWidth={1} borderColor={'gray.300'} color={'gray'} rounded={'md'} alignItems={'center'}>
                    <Flex w={6} h={6} borderWidth={1} borderColor={'gray'} rounded={'full'} alignItems={'center'} justifyContent={'center'}><i className='pi pi-info' /></Flex>
                    <Text>{translation?.signin?.warning}</Text>
                </Flex>
                <Button disabled={useName.length < 2 || usePass.length < 6 || useTypo} w={'100%'} bg={'black'} color={'white'} onClick={send}>{translation?.signin?.send}</Button>

            </Flex>

        </PopUpBody>
    )
}