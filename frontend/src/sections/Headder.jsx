import React, { useContext } from 'react'

import { Button, Flex, Link, Text, useMediaQuery } from '@chakra-ui/react'
import 'primeicons/primeicons.css';

import { LanguageContext } from '../context/LanguageContext';
import { PageContext } from '../context/PageContext';
import { ModeContext } from '../context/ModeContext';
import { SignContext } from '../context/SignContext';

import HeadBody from '../components/HeadBody';
import LangSelect from '../components/LangSelect';

export default function Headder({ ...props }) {
  const { signPop, signPopFlip, pageUpdate } = useContext(PageContext);
  const { mode, modeSwitch } = useContext(ModeContext);
  const { translation } = useContext(LanguageContext);

  const [isSmall] = useMediaQuery("(max-width: 768px)");

  const navigate = (path) => {
    pageUpdate(path);

    window.scrollTo(0, 0);
  }

  return (
    <HeadBody zIndex={1000} borderBottomStyle={'solid'} borderBottomWidth={1} borderBottomColor={'border.emphasized'} justifyContent={'space-between'} {...props} >

      <Link minW={'20px'} h={'100%'} py={2} onClick={(e) => { e.preventDefault(); navigate('election'); }}>
        {/* website logo/image goes here */}
      </Link>
      <Flex gapX={5} width={'auto'} minWidth={'50%'} justifyContent={'end'}>
        {
          !isSmall &&
          (<Flex gapX={5}>
            <Text color={'gray.400'} fontWeight={'medium'} alignContent={'center'} fontSize={'md'} textAlign={'center'}>Vasiliy Pupkin</Text>
            <Text color={'gray.400'} fontWeight={'medium'} alignContent={'center'} fontSize={'md'}>7654321</Text>
          </Flex>)
        }
        <Flex gapX={3}>

          <Button w={0} rounded={'full'} bg={'transparent'} color={'black'} borderColor={'gray.300'} fontWeight={'bolder'} fontSize={'xl'} onClick={modeSwitch}>
            <i className={`pi ${mode == 'light' ? 'pi-moon' : 'pi-sun'}`}></i>
          </Button>
          <LangSelect />
          <Button rounded={'full'} bg={'transparent'} color={'black'} borderColor={'gray.300'} onClick={signPopFlip}>{isSmall ? (<i className='pi pi-sign-in'></i>) : translation?.header?.signin}</Button>

        </Flex>
      </Flex>

    </HeadBody>
  )
}