import { Text } from '@chakra-ui/react'

function HeadC({ children, ...props }) {
    return (<Text fontSize={'md'} fontWeight={'medium'} {...props}>
        {children}
    </Text>)
}

export default HeadC