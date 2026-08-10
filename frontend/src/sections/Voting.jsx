import React, { useContext } from 'react'

import { Button, Flex, Text, Image } from '@chakra-ui/react'
import { LanguageContext } from '../context/LanguageContext'
import { VotingContext } from '../context/VotingContext'

import SectionBody from '../components/SectionBody'
import HeadBody from '../components/HeadBody'
import { PageContext } from '../context/PageContext'

export default function Voting() {
    const { translation } = useContext(LanguageContext);
    const { parties } = useContext(VotingContext);
    const { votePopFlip } = useContext(PageContext);

    return (
        <SectionBody justifyContent={'center'} alignContent={'center'}>

            <Text fontWeight={'bold'} fontSize={'2xl'} textAlign={'start'} mt={2} mb={3}>{translation?.voting?.title}</Text>
            {
                parties != null && parties.length != 0 ? (<><Flex justifyContent={'space-around'} style={{ direction: 'ltr' }}>
                    <Text w={'40%'} p={'2rem'}>{translation?.voting?.party}</Text>
                    <Text w={'40%'} p={'2rem'}>{translation?.voting?.leader}</Text>
                    <Text alignContent={'center'}>{translation?.voting?.vote}</Text>
                </Flex>
                    <Flex flexDir={'column'} h={'70%'} overflowY={'auto'} mt={2} gapY={3} style={{ direction: 'ltr' }}>
                        {
                            parties?.map((item, ind) => {
                                return (
                                    <HeadBody minH={'5rem'} h={'auto'} position={'initial'} key={`vote${ind}`} rounded={'md'} py={2}>
                                        <Image></Image>
                                        <Text w={'40%'} overflow={'hidden'} textOverflow={'ellipsis'} whiteSpace={'nowrap'}>{item?.party}</Text>
                                        <Text w={'40%'} overflow={'hidden'} textOverflow={'ellipsis'} whiteSpace={'nowrap'}>{item?.candidate}</Text>
                                        <Button w={0} rounded={'full'} bg={'transparent'} color={'black'} borderColor={'gray.300'} fontWeight={'bolder'} fontSize={'xl'} onClick={() => { votePopFlip(); }}><i className='pi pi-check'></i></Button>
                                    </HeadBody>
                                )
                            })
                        }
                    </Flex></>)
                    : (<Flex w={'full'} mt={'3rem'} h={'3rem'} justifyContent={'center'} alignItems={'center'} bg={'transparent'}>
                        <Text minW={'90%'} rounded={'1rem'} py={2} borderWidth={1} borderColor={'gray.300'} alignContent={'center'} h={'3rem'} color={'black'} textAlign={'center'} textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'nowrap'}>{translation?.voting?.error}</Text>
                    </Flex>)
            }

        </SectionBody>
    )
}
