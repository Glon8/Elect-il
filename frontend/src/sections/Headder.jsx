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
  const { translation, orientation } = useContext(LanguageContext);
  const { userData, signOut } = useContext(SignContext);

  const [isSmall] = useMediaQuery("(max-width: 768px)");

  const navigate = (path) => {
    pageUpdate(path);

    window.scrollTo(0, 0);
  }

  return (
    <HeadBody zIndex={1000} borderBottomStyle={'solid'} borderBottomWidth={1} borderBottomColor={'border.emphasized'} justifyContent={'space-between'} {...props} >

      <Link rounded={'1rem'} borderWidth={1} px={3} borderColor={'gray.300'} minW={'20px'} h={'100%'} py={2} onClick={(e) => { e.preventDefault(); navigate('election'); }}>
        {/* website logo/image goes here */} No LOGO {'\u{1F612}'}
      </Link>
      <Flex gapX={5} width={'auto'} minWidth={'50%'} justifyContent={'end'}>

        {!userData?.token || !isSmall && (<Text color={'gray.400'} direction={orientation} fontWeight={'medium'} alignContent={'center'} fontSize={'md'} textAlign={'center'}>{translation?.header?.welcome} {userData?.fullName ?? 'Error 404'}</Text>)}
        <Flex gapX={3}>

          <Button w={0} rounded={'full'} bg={'transparent'} color={'black'} borderColor={'gray.300'} fontWeight={'bolder'} fontSize={'xl'} onClick={modeSwitch}>
            <i className={`pi ${mode == 'light' ? 'pi-moon' : 'pi-sun'}`}></i>
          </Button>
          <LangSelect />
          <Button width={isSmall ? 0 : 'auto'} rounded={'full'} bg={'transparent'} color={'black'} borderColor={'gray.300'} onClick={!userData?.token ? signPopFlip : signOut}>{!isSmall && (!userData?.token ? translation?.header?.signin : translation?.header?.signout)} <i className={`pi ${!userData?.token ? 'pi-sign-in' : 'pi-sign-out'}`}></i></Button>

        </Flex>
      </Flex>

    </HeadBody>
  )
}