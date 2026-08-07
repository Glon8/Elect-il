import React from 'react'

import { Flex } from '@chakra-ui/react'

export default function FootBody({ children, ...props }) {
    return (
        <Flex w={'full'} minH={'9rem'} bg={'bg.info'} px={2} py={3} {...props} >
            {children}
        </Flex>
    )
}