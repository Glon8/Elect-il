import { useContext } from 'react'

import { Button, Flex, Text, Image } from '@chakra-ui/react'

import { LanguageContext } from '../../context/LanguageContext'
import { VotingContext } from '../../context/VotingContext'
import { PageContext } from '../../context/PageContext'

import HeadBody from '../../components/HeadBody'
import HeadB from '../../components/headers/HeadB'
import HeadC from '../../components/headers/HeadC'

export default function Vote({ ...props }) {
    const { translation } = useContext(LanguageContext);
    const { parties, setSelected } = useContext(VotingContext);
    const { votePopFlip } = useContext(PageContext);

    return (
        <Flex w={'100%'} h={'90%'} flexDir={'column'} justifyContent={'center'} gapY={3}{...props}>
            <HeadB>{translation?.votingVote?.title}</HeadB>
            <Flex justifyContent={'space-around'} style={{ direction: 'ltr' }}>
                <HeadBody minH={'5rem'} h={'auto'} position={'initial'} rounded={'md'} py={2} borderWidth={1} borderColor={'gray.300'} justifyContent={'space-between'}>
                    <HeadC w={'10rem'} textAlign={'center'} overflow={'hidden'} textOverflow={'ellipsis'} whiteSpace={'nowrap'}>{translation?.votingVote?.party}</HeadC>
                    <HeadC w={'10rem'} textAlign={'center'} overflow={'hidden'} textOverflow={'ellipsis'} whiteSpace={'nowrap'}>{translation?.votingVote?.leader}</HeadC>
                    <HeadC w={'5rem'} textAlign={'center'} overflow={'hidden'} textOverflow={'ellipsis'} whiteSpace={'nowrap'}>{translation?.votingVote?.vote}</HeadC>
                </HeadBody>
            </Flex>
            <Flex flexDir={'column'} h={'95%'} overflowY={'auto'} mt={2} gapY={3} style={{ direction: 'ltr' }}>
                {
                    parties?.map((item, ind) => {
                        const even = ind % 2 == 0;
                        return (
                            <HeadBody bg={even ? 'blue.100' : 'wite'} minH={'5rem'} h={'auto'} position={'initial'} key={`vote${ind}`} py={2} borderYWidth={1} borderColor={'gray.300'}>
                                <Image></Image>
                                <Text w={'40%'} overflow={'hidden'} textOverflow={'ellipsis'} whiteSpace={'nowrap'}>{item?.party}</Text>
                                <Text w={'40%'} overflow={'hidden'} textOverflow={'ellipsis'} whiteSpace={'nowrap'}>{item?.candidate}</Text>
                                <Button w={0} rounded={'full'} bg={'white'} color={'black'} borderColor={'gray.300'} fontWeight={'bolder'} fontSize={'xl'} onClick={() => { setSelected(item); votePopFlip(); }}><i className='pi pi-check'></i></Button>
                            </HeadBody>
                        )
                    })
                }
            </Flex>
        </Flex>
    )
}