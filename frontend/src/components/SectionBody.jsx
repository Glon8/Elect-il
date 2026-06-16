import React from 'react'

import { Flex } from '@chakra-ui/react'

function SectionBody({ children, ...props }) {
    return (
        <Flex w={'100%'} h={'100vh'}>

            <Flex w={'100%'} h={'100vh'} pt={'4rem'} {...props} >
                {children}
            </Flex>

        </Flex>
    )
}

export default SectionBody