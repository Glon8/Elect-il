import React from 'react'

import { Flex, Text } from '@chakra-ui/react'

import SectionBody from '../components/SectionBody'
import Body from '../components/Body'

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
        <SectionBody pt={'4rem'}>

            <Text fontWeight={'bold'} fontSize={'2xl'}>Voting</Text>
            {
                partiesList?.['patries']?.map((item, ind) => {
                    return (
                        <Body key={'pL' + ind} h={'3rem'}>
                            <Text>{item.party}</Text>
                            <Text>{item.candidate}</Text>
                        </Body>
                    )
                })
            }

        </SectionBody>
    )
}

export default Voting