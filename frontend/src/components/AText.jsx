import { Text } from '@chakra-ui/react'

function StValues({ children, ...props }) {
    return (<Text fontSize={'lg'} {...props}>
        {children}
    </Text>)
}

export default StValues