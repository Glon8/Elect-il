import React, { useEffect, useState, useContext } from 'react'

import { Flex, Text, useMediaQuery } from '@chakra-ui/react'
import { LanguageContext } from '../context/LanguageContext'

import SectionBody from '../components/SectionBody'
import HeadBody from '../components/HeadBody'
import { VotingContext } from '../context/VotingContext'

export default function Statistics() {
  const { translation } = useContext(LanguageContext);
  const { parties } = useContext(VotingContext);

  const [isSmall] = useMediaQuery("(max-width: 768px)");

  const [useVotes, setVotes] = useState(0);
  const [useTop, setTop] = useState([]);

  const totalVotes = () => {
    const sum = parties.reduce((total, item) => total + item.votes, 0);

    setVotes(sum);
  }

  const topPartys = () => {
    const partyList = [...parties]
      .sort((a, b) => { a.votes - b.votes })
      .slice(0, 3);

    setTop(partyList);
  }

  useEffect(() => {
    totalVotes();
    topPartys();
  }, [parties]);

  return (
    <SectionBody justifyContent={'center'}>

      <Text fontWeight={'bold'} fontSize={'2xl'} textAlign={'start'} mt={2} mb={5}>{translation?.statistics?.title}</Text>
      {
        parties != null && parties.length != 0 ?
          (<> <HeadBody h={'auto'} position={'initial'} flexDir={'column'} justifyContent={'space-evenly'}>
            <Text>{translation?.statistics?.totalvotes}</Text>
            <Text>{useVotes}</Text>
          </HeadBody>
            <Text mt={3} textAlign={'center'}>{translation?.statistics?.graphtitle}</Text>
            <Flex w={'100%'} h={!isSmall ? '100%' : '40%'} flexDir={'column'} gapY={1} overflowY={'auto'}>
              {
                parties?.map((item, ind) => {
                  const width = Math.floor((item.votes * 100) / useVotes);

                  return <Flex w={'100%'} borderXWidth={3} borderColor={'black'} bg={'blue.100'} position={'relative'}>
                    <Flex w={`${width}%`} minH={'3rem'} bg={'blue.500'}> </Flex>
                    <Text position={'absolute'} left={5} top={3} px={1} textAlign={'center'} bg={'white'} rounded={'md'} borderColor={'gray.300'}>{item.party}</Text>
                    <Text position={'absolute'} right={5} top={3} px={1} textAlign={'center'} bg={'white'} rounded={'md'} borderColor={'gray.300'}>{item.votes}</Text>
                  </Flex>
                })
              }
            </Flex>
            <HeadBody mt={3} position={'initial'} flexDir={'column'} h={'6rem'} justifyContent={'space-evenly'}>

              <Text>{translation?.statistics?.topleaders}</Text>
              <Flex justifyContent={'space-evenly'} w={'100%'}>
                {
                  useTop?.map((item, ind) => {
                    return (
                      <Flex key={`statistics${ind}`} flexDir={'column'} w={'30%'} textAlign={'center'}>
                        <Text>{1 + ind}</Text>
                        <Text>{item.party}</Text>
                      </Flex>
                    )
                  })
                }
              </Flex>

            </HeadBody></>)
          : (<Flex w={'full'} mt={'3rem'} h={'3rem'} justifyContent={'center'} alignItems={'center'} bg={'transparent'}>
            <Text minW={'90%'} rounded={'1rem'} py={2} borderWidth={1} borderColor={'gray.300'} alignContent={'center'} h={'3rem'} color={'black'} textAlign={'center'} textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'nowrap'}>{translation?.statistics?.error}</Text>
          </Flex>)
      }

    </SectionBody>
  )
}