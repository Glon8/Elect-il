import React, { useEffect, useState, useContext } from 'react'

import { Button, Flex } from '@chakra-ui/react';
import { ButtonContext } from '../context/ButtonContext';

import Body from '../components/Body'
import HeadBody from '../components/HeadBody';

function SignIn({ ...props }) {
    const { useSignIn, signInFlip } = useContext(ButtonContext);

    return (
        <Body w={'100vw'} h={'100vh'} top={0} left={0} display={useSignIn ? 'center' : 'none'} position={'fixed'} bg={'black/70'} rounded={0} {...props}>

            <Flex zIndex={10} w={'100%'} h={'100%'} onClick={() => { signInFlip(); }}></Flex>
            <Body zIndex={15} w={'20rem'} h={'25rem'} top={'50%'} left={'50%'} transform={'translate(-50%,-50%)'} position={'fixed'}>

                <HeadBody roundedTop={'xl'} >

                    <Button bg={'transparent'} color={'black'} borderColor={'black'} fontWeight={'bolder'} fontSize={'xl'} onClick={() => { signInFlip(); }}>x</Button>

                </HeadBody>

            </Body>

        </Body>
    )
}

export default SignIn