import React from 'react'

import { Flex, Link, Text } from '@chakra-ui/react'

import SectionBody from '../components/SectionBody'
import Body from '../components/Body'

function history() {
  const electionHistory = {
    "history": [
      { "name": "election 1", "date": "2025-01-01" },
      { "name": "election 2", "date": "2025-04-01" },
      { "name": "election 3", "date": "2025-07-01" },
      { "name": "election 4", "date": "2025-10-01" },
      { "name": "election 5", "date": "2026-01-01" }
    ]
  }

  return (
    <SectionBody pb={'1rem'}>

      <Text fontWeight={'bold'} fontSize={'2xl'} textAlign={'start'} mt={2} mb={3} px={5}>History title:</Text>
      <Flex justifyContent={'space-around'} px={'1rem'}>
        <Text w={'50%'} textAlign={'center'}>Name</Text>
        <Text w={'40%'} textAlign={'center'}>Time</Text>
      </Flex>
      <Flex flexDir={'column'} w={'100%'} h={'100%'} overflowY={'auto'} px={'1rem'} mt={2} gapY={3}>
        {
          electionHistory?.['history']?.map((item, ind) => {
            return (
              <Link key={'eH' + ind} h={'3rem'} justifyContent={'space-around'} bg={'white'} color={'black'} rounded={'md'} onClick={(e) => { e.preventDefault(); }}>
                <Text w={'50%'} textAlign={'center'} textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'nowrap'}>{item.name}</Text>
                <Text w={'40%'} textAlign={'center'} textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'nowrap'}>{item.date}</Text>
              </Link>
            )
          })
        }
      </Flex>

    </SectionBody>
  )
}

export default history
