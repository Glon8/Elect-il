import React from 'react'

import { Flex, Text } from '@chakra-ui/react'

import SectionBody from '../components/SectionBody'

function Statistics() {
  const partiesList = {
    "voting": [
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

  const partiesStatistics = {
    "statistics": [
      {
        "party": "Likud",
        "votes": 1125437
      },
      {
        "party": "Yesh Atid",
        "votes": 734221
      },
      {
        "party": "National Unity",
        "votes": 681992
      },
      {
        "party": "Yisrael Beiteinu",
        "votes": 312874
      },
      {
        "party": "Religious Zionism",
        "votes": 286541
      },
      {
        "party": "Otzma Yehudit",
        "votes": 254199
      },
      {
        "party": "Shas",
        "votes": 417853
      },
      {
        "party": "United Torah Judaism",
        "votes": 298744
      }
    ]
  }

  return (
    <SectionBody>

      <Text fontWeight={'bold'} fontSize={'2xl'}>Statiscs</Text>

    </SectionBody>
  )
}

export default Statistics