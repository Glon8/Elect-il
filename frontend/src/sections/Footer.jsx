import React from 'react'

import { Flex, Link, Text } from '@chakra-ui/react'

import FootBody from '../components/FootBody'

function Footer() {
  const options = [
    { name: 'About Us', link: '#' },
    { name: 'Encryption', link: '#' },
    { name: 'Approval', link: '#' },
    //{name: , link: }
  ]
  return (
    <FootBody flexDir={'column'} alignItems={'center'} >

      <Text fontWeight={'bold'} fontSize={'lg'}>Overall</Text>
      {
        options?.map((item, ind) => {
          return (
            <Link key={'fo' + ind} href={item.link}>
              {item.name}
            </Link>
          )
        })
      }

    </FootBody>
  )
}

export default Footer