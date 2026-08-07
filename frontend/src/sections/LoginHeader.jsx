import React from 'react'

import { Flex, Text, useMediaQuery } from '@chakra-ui/react'

import HeadBody from '../components/HeadBody';

export default function LoginHeader({ ...props }) {
    const [isSmall] = useMediaQuery("(max-width: 768px)");

    return (
        <HeadBody display={!isSmall ? 'none' : 'flex'} background={'white/80'} top={'4rem'} h={'2rem'} zIndex={1000} borderBottomStyle={'solid'} borderBottomWidth={1} borderBottomColor={'border.emphasized/40'} justifyContent={'space-between'} {...props} >
            <Flex w={'full'} flexDir={'row'} gapX={5}>
                <Text w={'50%'} color={'gray.400/70'} fontWeight={'medium'} alignContent={'center'} fontSize={'md'} textAlign={'center'}>Vasiliy Pupkin</Text>
                <Text w={'50%'} color={'gray.400/70'} fontWeight={'medium'} alignContent={'center'} fontSize={'md'} textAlign={'center'}>7654321</Text>
            </Flex>
        </HeadBody >
    )
}