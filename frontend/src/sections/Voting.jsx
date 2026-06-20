import React from 'react'

import { Button, Flex, Text, Image } from '@chakra-ui/react'

import SectionBody from '../components/SectionBody'
import HeadBody from '../components/HeadBody'

function Voting() {
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

            <Text fontWeight={'bold'} fontSize={'2xl'} textAlign={'start'} mt={2} mb={3} px={5}>Choose your candidate: (Voting)</Text>
            {
                partiesList?.['patries']?.map((item, ind) => {
                    return (
                        <HeadBody position={'initial'} key={'pL' + ind}>
                            <Image></Image>
                            <Text w={'30%'}>{item.party}</Text>
                            <Text w={'50%'}>{item.candidate}</Text>
                            <Button w={0} rounded={'full'} bg={'transparent'} color={'black'} borderColor={'gray.300'} fontWeight={'bolder'} fontSize={'xl'} onClick={() => { signInFlip(); }}><i className='pi pi-check'></i></Button>
                        </HeadBody>
                    )
                })
            }

        </SectionBody>
    )
}

export default Voting