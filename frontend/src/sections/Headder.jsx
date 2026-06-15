import React from 'react'

import { Button, Flex } from '@chakra-ui/react'

function Headder({ onClick, ...props }) {
  return (
    <Flex w={'full'} h={'3rem'} position={'absolute'} top={0} left={0} bg={'white/65'} px={'1rem'} alignItems={'center'} flexDir={'row-reverse'} {...props} >
      
      <Button onClick={() => { onClick?.(); }}>Sign In</Button>
      
    </Flex>
  )
}

export default Headder