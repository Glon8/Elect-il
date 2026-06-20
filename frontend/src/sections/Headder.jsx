import React, { useContext } from 'react'

import { Button, Flex, Text } from '@chakra-ui/react'
import 'primeicons/primeicons.css';
import { SignContext } from '../context/SignContext';

import HeadBody from '../components/HeadBody';

function Headder({ ...props }) {
  const { useSignIn, signInFlip } = useContext(SignContext);

  return (
    <HeadBody zIndex={1000} borderBottomStyle={'solid'} borderBottomWidth={1} borderBottomColor={'border.emphasized'} {...props} >

      <Text color={'gray.400'} fontWeight={'medium'} fontSize={'md'}>Vasiliy Pupkin</Text>
      <Text color={'gray.400'} fontWeight={'medium'} fontSize={'md'}>7654321</Text>
      <Flex gapX={3}>
        <Button w={0} rounded={'full'} bg={'transparent'} color={'black'} borderColor={'gray.300'} fontWeight={'bolder'} fontSize={'xl'} onClick={() => { }}>
          <i className='pi pi-moon'></i>
        </Button>
        <Button rounded={'full'} bg={'transparent'} color={'black'} borderColor={'gray.300'} onClick={() => { signInFlip(); }}>Sign In</Button>
      </Flex>

    </HeadBody>
  )
}

export default Headder