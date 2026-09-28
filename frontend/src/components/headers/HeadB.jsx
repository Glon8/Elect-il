import { Text } from '@chakra-ui/react'

function HeadB({ children, ...props }) {
    return (<Text fontSize={'xl'} fontWeight={'medium'} {...props}>
        {children}
    </Text>)
}

export default HeadB