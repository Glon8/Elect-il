import { Text } from '@chakra-ui/react'

function StValues({ children, ...props }) {
    return (<Text fontSize={'2xl'} fontWeight={'normal'} textAlign={'center'} {...props}>
        {children}
    </Text>)
}

export default StValues