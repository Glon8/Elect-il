import React from 'react'

import { Flex } from '@chakra-ui/react'

function HeadBody({ children, ...props }) {
    return (
        <Flex w={'full'} h={'4rem'} position={'fixed'} top={0} left={0} bg={'white'} px={'1rem'} alignItems={'center'} flexDir={'row'} justifyContent={'right'} gapX={5} {...props} >
            {children}
        </Flex>
    )
}

export default HeadBody