import { useContext } from 'react'

import { Link } from '@chakra-ui/react'

import { LanguageContext } from '../context/LanguageContext';

import FootBody from '../components/FootBody'
import { PageContext } from '../context/PageContext'

export default function Footer() {
  const { pageUpdate } = useContext(PageContext);
  const { translation } = useContext(LanguageContext);

  const dict = translation?.footer;

  const navigate = (path) => {
    pageUpdate(path);

    window.scrollTo(0, 0);
  }

  const options = [
    { name: dict?.us, onClick: () => navigate('us') },
    { name: dict?.encr, onClick: () => navigate('encryption') },
    { name: dict?.appr, onClick: () => navigate('license') },
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