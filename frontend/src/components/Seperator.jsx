import { Flex } from '@chakra-ui/react'

export default function Seperator({ ...props }) {
    return (
        <Flex w={'100%'} borderBottomWidth={2} borderBottomColor={'gray.300'} mt={2} mb={3} {...props} />
    )
}
