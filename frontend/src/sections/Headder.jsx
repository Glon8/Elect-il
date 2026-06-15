import React from 'react'

import { Button, Flex } from '@chakra-ui/react'

import Body from '../components/Body';

function Headder({ onClick, ...props }) {
  return (
    <Flex w={'full'} h={'3rem'} position={'fixed'} top={0} left={0} bg={'white/65'} px={'1rem'} alignItems={'center'} flexDir={'row'} justifyContent={'right'} gapX={5} {...props} >

      <Body bg={'auto'}>Vasiliy Pupkin</Body>
      <Body bg={'auto'}>7654321</Body>
      <Button onClick={() => { onClick?.(); }}>Sign In</Button>

    </Flex>
  )
}

export default Headder