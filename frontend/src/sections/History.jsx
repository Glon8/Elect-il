import React, { useContext, useState } from 'react'

import { Flex, Link, Text, Input, useMediaQuery, Button } from '@chakra-ui/react'
import { LanguageContext } from '../context/LanguageContext'
import { HistoryContext } from '../context/HistoryContext'

import SectionBody from '../components/SectionBody'
import Body from '../components/Body'

function history() {
  const { translation } = useContext(LanguageContext);
  const { useQuery, useDate, setDate, updateQuery } = useContext(HistoryContext);

  const [isSmall] = useMediaQuery("(max-width: 768px)");

  return (
    <SectionBody pb={'1rem'} alignItems={'center'} justifyContent={'center'}>

      <Text fontWeight={'bold'} fontSize={'2xl'} textAlign={'start'} mt={2} mb={3}>{translation?.history?.title}</Text>
      <Text>{translation?.history?.desc}</Text>
      <Flex mt={8} style={{ direction: 'ltr' }}>
        <Input value={useDate} letterSpacing={4} w={'10rem'} borderColor={'gray.300'} borderRightWidth={0} borderRightRadius={0} placeholder={translation?.history?.search} maxLength={4} textAlign={'center'} inputMode='numeric'
          onChange={(e) => setDate(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' ? updateQuery() : null}></Input>
        <Button onClick={updateQuery} bg={'black'} color={'white'} borderLeftRadius={0}><i className='pi pi-search'></i></Button>
      </Flex>
      <Flex w={!isSmall ? '100%' : '80%'} h={!isSmall ? '30%' : '40%'} flexWrap={'wrap'} alignContent={'flex-start'} overflowY={'auto'} my={'1rem'} gapY={3} justifyContent={useQuery !== null && useQuery.length != 0 ? 'space-between' : 'center'} style={{ direction: 'ltr' }}>
        {
          useQuery !== null && useQuery.length != 0 ?
            useQuery?.map((item, ind) => {
              return (
                <Flex key={`history${ind}`} w={!isSmall ? '19%' : '32%'} h={'3rem'} justifyContent={'center'} rounded={'1rem'} bg={'transparent'} borderWidth={1} borderColor={'gray.300'}>
                  <Link h={'3rem'} justifyContent={'space-around'} color={'black'} rounded={'md'} onClick={(e) => { e.preventDefault(); }}>
                    <Text textAlign={'center'} textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'nowrap'}>{item}</Text>
                  </Link>
                </Flex>
              )
            }) : (< Flex w={'full'} mt={'3rem'} h={'3rem'} justifyContent={'center'} alignItems={'center'} bg={'transparent'}>
              <Text minW={'90%'} rounded={'1rem'} py={2} borderWidth={1} borderColor={'gray.300'} alignContent={'center'} h={'3rem'} color={'black'} textAlign={'center'} textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'nowrap'}>{translation?.history?.nohistory}</Text>
            </Flex>)
        }
      </Flex>

    </SectionBody >
  )
}

export default history
