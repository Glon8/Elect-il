import React, { useContext } from 'react'

import { Button, Flex, Text } from '@chakra-ui/react'
import 'primeicons/primeicons.css';
import { PageContext } from '../context/PageContext';
import { ModeContext } from '../context/ModeContext';
import { SignContext } from '../context/SignContext';

import HeadBody from '../components/HeadBody';

function Headder({ ...props }) {
  const { signPop, signPopFlip } = useContext(PageContext);
  const { mode, modeSwitch } = useContext(ModeContext);

  return (
    <HeadBody zIndex={1000} borderBottomStyle={'solid'} borderBottomWidth={1} borderBottomColor={'border.emphasized'} {...props} >

      <Text color={'gray.400'} fontWeight={'medium'} fontSize={'md'}>Vasiliy Pupkin</Text>
      <Text color={'gray.400'} fontWeight={'medium'} fontSize={'md'}>7654321</Text>
      <Flex gapX={3}>
        <Button w={0} rounded={'full'} bg={'transparent'} color={'black'} borderColor={'gray.300'} fontWeight={'bolder'} fontSize={'xl'} onClick={modeSwitch}>
          <i className={`pi ${mode == 'light' ? 'pi-moon' : 'pi-sun'}`}></i>
        </Button>
        <Button rounded={'full'} bg={'transparent'} color={'black'} borderColor={'gray.300'} onClick={signPopFlip}>Sign In</Button>
      </Flex>

    </HeadBody>
  )
}

export default Headder