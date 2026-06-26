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
    <FootBody flexDir={{ base: 'column', smToMd: 'column', md: 'row' }} alignItems={'center'} justifyContent={'center'} bg={'#0E2739'} gapX={'5rem'} gapY={'8px'} >
      {
        options?.map((item, ind) => {
          return (
            <Link key={'fo' + ind} href={item.link} color={'white'}>
              {item.name}
            </Link>
          )
        })
      }

    </FootBody>
  )
}

export default Footer