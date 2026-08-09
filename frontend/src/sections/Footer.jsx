import React, { useContext } from 'react'

import { Flex, Link, Text } from '@chakra-ui/react'

import { LanguageContext } from '../context/LanguageContext';

import FootBody from '../components/FootBody'
import { PageContext } from '../context/PageContext'

export default function Footer() {
  const { page, pageUpdate } = useContext(PageContext);
  const { translation } = useContext(LanguageContext);

  const navigate = (path) => {
    pageUpdate(path);

    window.scrollTo(0, 0);
  }

  const options = [
    { name: translation?.footer?.us, onClick: () => navigate('us') },
    { name: translation?.footer?.encr, onClick: () => navigate('encryption') },
    { name: translation?.footer?.appr, onClick: () => navigate('approval') },
  ]
  return (
    <FootBody flexDir={{ base: 'column', smToMd: 'column', md: 'row' }} alignItems={'center'} justifyContent={'center'} bg={'#0E2739'} gapX={'5rem'} gapY={'8px'} >
      {
        options?.map((item, ind) => {
          return (
            <Link key={`footer${ind}`} href={'#'} color={'white'} onClick={(e) => { e.preventDefault(); item.onClick(); }}>
              {item.name}
            </Link>
          )
        })
      }

    </FootBody>
  )
}