import React from 'react'

import { Button, Flex } from '@chakra-ui/react'

function Headder({ onClick }) {
  return (
    <Flex h={'3rem'} bg={'white'} px={'1rem'} alignItems={'center'} flexDir={'row-reverse'} borderBottomRadius='sm' borderTopRadius='xl' >
      <Button onClick={() => { onClick?.(); }}>Sign In</Button>
    </Flex>
  )
}

export default Headder