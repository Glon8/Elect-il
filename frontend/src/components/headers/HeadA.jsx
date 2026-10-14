import { Text } from '@chakra-ui/react'

function HeadA({ children, ...props }) {
    return (<Text color={'#371094'} fontSize={'2xl'} fontWeight={'bold'} textAlign={'start'} mt={2} mb={3} {...props}>
        {children}
    </Text>)
}

export default HeadA