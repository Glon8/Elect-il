import React from 'react'

import { Flex } from '@chakra-ui/react'

export default function SectionBody({ children, ...props }) {
    return (
        <Flex w={'100%'} h={'100vh'} alignItems={'center'} justifyContent={'center'}>

            <Flex w={'100%'} h={{ base: '100%', smToMd: '100%', md: '85%' }} bg={'white'} justifyContent={'center'} >

                <Flex maxW={{ base: '100%', smToMd: '100%', md: '40rem' }} w={'100%'} flexDirection={'column'} py={'3rem'} color={'black'} px={5} {...props}>
                    {children}
                </Flex>

            </Flex>

        </Flex>
    )
}
