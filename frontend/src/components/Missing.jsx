import { Flex, Spinner } from '@chakra-ui/react'

import HeadC from './headers/HeadC'

function Missing({ spinner, children }) {
    return (
        <Flex flexDir={'column'} w={'full'} h={'full'} justifyContent={'center'} alignItems={'center'} bg={'gray.100/50'} rounded={'1rem'} borderWidth={1} borderColor={'gray.300'} gapY={spinner === true ? 3 : ''}>
            {spinner === true ? <Spinner size={'xl'} color={'gray'} /> : ''}
            <HeadC w={'full'} h={'3rem'} color={'gray'} textAlign={'center'} textOverflow={'ellipsis'} overflow={'hidden'}>{children}</HeadC>
        </Flex>
    )
}

export default Missing