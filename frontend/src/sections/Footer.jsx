import React, { useContext } from 'react'

import { Flex, Link, Text } from '@chakra-ui/react'

import FootBody from '../components/FootBody'
import { PageContext } from '../context/PageContext'

function Footer() {
  const { page, setPage } = useContext(PageContext);

  const navigate = (path) => {
    if (typeof path != 'string' || path === page) return;

    path = path.trim().toLowerCase();

    setPage(path);

    window.scrollTo(0, 0);
  }

  const options = [
    { name: 'Us', onClick: () => navigate('us') },
    { name: 'Encryption', onClick: () => navigate('encryption') },
    { name: 'Approval', onClick: () => navigate('approval') },
  ]
  return (
    <FootBody flexDir={{ base: 'column', smToMd: 'column', md: 'row' }} alignItems={'center'} justifyContent={'center'} bg={'#0E2739'} gapX={'5rem'} gapY={'8px'} >
      {
        options?.map((item, ind) => {
          return (
            <Link key={'fo' + ind} href={'#'} color={'white'} onClick={(e) => { e.preventDefault(); item.onClick(); }}>
              {item.name}
            </Link>
          )
        })
      }

    </FootBody>
  )
}

export default Footer