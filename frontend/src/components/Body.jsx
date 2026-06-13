import React from 'react'

import { Center } from '@chakra-ui/react'

function Body({ children, ...props }) {
    return (<Center minW={'100px'} minH={'50px'} rounded={'xl'} bg={'bg'} {...props}>
        {children}
    </Center>)
}

export default Body