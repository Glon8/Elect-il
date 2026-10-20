import { useContext } from 'react'

import { Link } from '@chakra-ui/react'

import { LanguageContext } from '../context/LanguageContext';

import FootBody from '../components/FootBody'
import { PageContext } from '../context/PageContext'

export default function Footer() {
  const { pageUpdate } = useContext(PageContext);
  const { translation } = useContext(LanguageContext);

  const dict = translation?.footer;

  const options = [
    { name: dict?.us, onClick: () => pageUpdate('us') },
    { name: dict?.encr, onClick: () => pageUpdate('encryption') },
    { name: dict?.appr, onClick: () => pageUpdate('license') },
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