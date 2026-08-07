import React, { useContext } from 'react'

import { Button, Flex, Text, Image } from '@chakra-ui/react'
import { LanguageContext } from '../context/LanguageContext'

import SectionBody from '../components/SectionBody'
import HeadBody from '../components/HeadBody'

export default function Voting() {
    const { translation } = useContext(LanguageContext);

    const partiesList = {
        "patries": [
            {
                "party": "Likud",
                "candidate": "Benjamin Netanyahu"
            },
            {
                "party": "Yesh Atid",
                "candidate": "Yair Lapid"
            },
            {
                "party": "National Unity",
                "candidate": "Benny Gantz"
            },
            {
                "party": "Yisrael Beiteinu",
                "candidate": "Avigdor Lieberman"
            },
            {
                "party": "Religious Zionism",
                "candidate": "Bezalel Smotrich"
            },
            {
                "party": "Otzma Yehudit",
                "candidate": "Itamar Ben-Gvir"
            },
            {
                "party": "Shas",
                "candidate": "Aryeh Deri"
            },
            {
                "party": "United Torah Judaism",
                "candidate": "Yitzhak Goldknopf"
            }
        ]
    }

    return (
        <SectionBody>

            <Text fontWeight={'bold'} fontSize={'2xl'} textAlign={'start'} mt={2} mb={3} px={5}>{translation?.voting?.title}</Text>
            <Flex justifyContent={'space-around'} px={'1rem'} style={{ direction: 'ltr' }}>
                <Text w={'40%'} p={'2rem'}>{translation?.voting?.party}</Text>
                <Text w={'40%'} p={'2rem'}>{translation?.voting?.leader}</Text>
                <Text alignContent={'center'}>{translation?.voting?.vote}</Text>
            </Flex>
            <Flex flexDir={'column'} h={'100%'} overflowY={'auto'} px={'1rem'} mt={2} gapY={3} style={{ direction: 'ltr' }}>
                {
                    partiesList?.['patries']?.map((item, ind) => {
                        return (
                            <HeadBody minH={'6rem'} h={'auto'} position={'initial'} key={'pL' + ind} rounded={'md'} py={2}>
                                <Image></Image>
                                <Text w={'40%'} overflow={'hidden'} textOverflow={'ellipsis'} whiteSpace={'nowrap'}>{item.party}</Text>
                                <Text w={'40%'} overflow={'hidden'} textOverflow={'ellipsis'} whiteSpace={'nowrap'}>{item.candidate}</Text>
                                <Button w={0} rounded={'full'} bg={'transparent'} color={'black'} borderColor={'gray.300'} fontWeight={'bolder'} fontSize={'xl'} onClick={() => { signInFlip(); }}><i className='pi pi-check'></i></Button>
                            </HeadBody>
                        )
                    })
                }
            </Flex>

        </SectionBody>
    )
}
