import React, { useContext } from 'react'

import { Flex, Link, Text } from '@chakra-ui/react'
import { LanguageContext } from '../context/LanguageContext'

import SectionBody from '../components/SectionBody'
import Body from '../components/Body'

function history() {
  const { translation } = useContext(LanguageContext);

  const electionHistory = [
    "2025-01-01",
    "2025-04-01",
    "2025-07-01",
    "2025-10-01",
    "2026-01-01",
  ];

  return (
    <SectionBody pb={'1rem'}>

      <Text fontWeight={'bold'} fontSize={'2xl'} textAlign={'start'} mt={2} mb={3} px={5}>{translation?.history?.title}</Text>
      <Text px={{ base: '1rem', smToMd: '1rem' }}>{translation?.history?.desc}</Text>
      <Flex flexDir={'column'} w={'100%'} h={'100%'} overflowY={'auto'} px={'1rem'} mt={2} gapY={3}>
        {
          electionHistory?.map((item, ind) => {
            return (
              <Link key={'eH' + ind} h={'3rem'} justifyContent={'space-around'} bg={'white'} color={'black'} rounded={'md'} onClick={(e) => { e.preventDefault(); }}>
                <Text textAlign={'center'} textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'nowrap'}>{item}</Text>
              </Link>
            )
          })
        }
      </Flex>

    </SectionBody>
  )
}

export default history
