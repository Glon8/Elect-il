import React, { useContext } from 'react'

import { Flex, Text, useMediaQuery } from '@chakra-ui/react'

import HeadBody from '../components/HeadBody';
import { SignContext } from '../context/SignContext';
import { LanguageContext } from '../context/LanguageContext';

export default function LoginHeader({ ...props }) {
    const { userData } = useContext(SignContext);
    const { translation, orientation } = useContext(LanguageContext);

    const [isSmall] = useMediaQuery("(max-width: 768px)");

    return (
        <HeadBody display={!userData?.token || !isSmall ? 'none' : 'flex'} background={'white/80'} top={'4rem'} h={'2rem'} zIndex={1000} borderBottomStyle={'solid'} borderBottomWidth={1} borderBottomColor={'border.emphasized/40'} justifyContent={'center'} {...props} >
            <Text direction={orientation} w={'50%'} color={'gray.400'} fontWeight={'medium'} alignContent={'center'} fontSize={'md'} textAlign={'center'}>{translation?.header?.welcome}  {userData?.fullName ?? 'Error 404'}</Text>
        </HeadBody >
    )
}