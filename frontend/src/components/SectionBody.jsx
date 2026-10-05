import { Flex, useMediaQuery } from '@chakra-ui/react'

export default function SectionBody({ children, ...props }) {
    const [isSmall] = useMediaQuery("(max-width: 768px)");

    return (
        <Flex w={{ base: '100%', smToMd: '100%', md: '80%', lg: '60%', xl: '40%' }} h={'100vh'} alignItems={'center'} justifyContent={'center'}>

            <Flex w={'100%'} maxH={isSmall ? 'auto' : '55rem'} rounded={'lg'} h={{ base: '100%', smToMd: '100%', md: '85%', lg: '65%', xl: '85%' }} bg={'white'} justifyContent={'center'} >

                <Flex maxW={{ base: '100%', smToMd: '100%', md: '40rem' }} w={'100%'} flexDirection={'column'} py={'3rem'} color={'black'} px={5} {...props}>
                    {children}
                </Flex>

            </Flex>

        </Flex >
    )
}
