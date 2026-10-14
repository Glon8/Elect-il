import { Flex, useMediaQuery } from '@chakra-ui/react'

export default function SectionBody({ tcpr, tcpl, bcpl, bcpr, children, ...props }) {
    const [isSmall] = useMediaQuery("(max-width: 768px)");

    return (
        <Flex w={{ base: '100%', smToMd: '100%', md: '80%', lg: '60%', xl: '40%' }} h={'100vh'} gap={0} alignItems={'center'} justifyContent={'center'} flexDir={'column'}>

            {
                (tcpr || tcpl) && !isSmall ? <Flex w={'100%'} h={`2rem`} bg={'white'} borderLeftWidth={1} borderLeftColor={'white'} style={{ clipPath: tcpl ? 'polygon(0% 100%, 100% 100%, 100% 95%, 0% 0%)' : (tcpr ? 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 95%)' : '') }} /> : ''
            }
            <Flex w={'100%'} maxH={isSmall ? 'full' : '55rem'} marginTop={tcpr || tcpl ? '-1px' : ''} marginBottom={bcpl || bcpr ? '-1px' : ''} roundedTop={tcpr || tcpl || isSmall ? 0 : 'lg'} roundedBottom={bcpl || bcpr || isSmall ? 0 : 'lg'} h={{ base: '100%', smToMd: '100%', md: '85%', lg: '65%', xl: '85%' }} bg={'white'} justifyContent={'center'} >

                <Flex maxW={{ base: '100%', smToMd: '100%', md: '40rem' }} w={'100%'} flexDirection={'column'} py={'3rem'} color={'black'} px={5} {...props}>
                    {children}
                </Flex>

            </Flex>
            {
                (bcpl || bcpr) && !isSmall ? <Flex w={'100%'} h={`2rem`} bg={'white'} borderRightWidth={1} borderRightColor={'white'} style={{ clipPath: bcpr ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 5%)' : (bcpl ? 'polygon(0% 0%, 100% 0%, 100% 5%, 0% 100%)' : '') }} /> : ''
            }

        </Flex >
    )
}
