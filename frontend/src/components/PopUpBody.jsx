import React from 'react'

import { Flex } from '@chakra-ui/react'

import Body from './Body'

export default function PopUpBody({ children, displayTrig, bgOnClick, ...props }) {
    return (
        <Body zIndex={900} w={'100vw'} h={'100vh'} top={0} left={0} display={displayTrig ? 'center' : 'none'} position={'fixed'} bg={'black/70'} rounded={0} {...props}>

            <Flex zIndex={10} w={'100%'} h={'100%'} onClick={bgOnClick}></Flex>
            <Body bg={'white'} py={'4rem'} zIndex={15} w={'20rem'} h={'25rem'} top={'50%'} left={'50%'} transform={'translate(-50%,-50%)'} position={'fixed'} display={'flex'} flexDir={'column'} justifyContent={'start'}>
                {children}
            </Body>

        </Body>
    )
}
