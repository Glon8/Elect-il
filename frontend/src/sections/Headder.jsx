import React from 'react'

import { Button, Flex, Text } from '@chakra-ui/react'

import HeadBody from '../components/HeadBody';

function Headder({ onClick, ...props }) {
  return (
    <HeadBody borderBottomStyle={'solid'} borderBottomWidth={1} borderBottomColor={'border.emphasized'} {...props} >

      <Text color={'gray.400'} fontWeight={'medium'} fontSize={'md'}>Vasiliy Pupkin</Text>
      <Text color={'gray.400'} fontWeight={'medium'} fontSize={'md'}>7654321</Text>
      <Button onClick={() => { onClick?.(); }}>Sign In</Button>

    </HeadBody>
  )
}

export default Headder