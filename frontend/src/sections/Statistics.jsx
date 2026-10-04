import { useEffect, useState, useContext } from 'react'

import { Flex, Text, useMediaQuery } from '@chakra-ui/react'
import { LanguageContext } from '../context/LanguageContext'

import SectionBody from '../components/SectionBody'
import HeadBody from '../components/HeadBody'
import { VotingContext } from '../context/VotingContext'
import HeadA from '../components/headers/HeadA'
import HeadB from '../components/headers/HeadB'
import StValues from '../components/StValues'
import Missing from '../components/Missing'

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

      <HeadA mb={5}>{translation?.statistics?.title}</HeadA>
      {
        parties != null && parties.length != 0 ?
          (<> <HeadBody h={'auto'} position={'initial'} flexDir={'column'} justifyContent={'space-evenly'} rounded={'md'} borderWidth={1} borderColor={'gray.300'}>
            <HeadB>{translation?.statistics?.totalvotes}</HeadB>
            <StValues>{useVotes}</StValues>
          </HeadBody>
            <HeadB mt={3} textAlign={'center'}>{translation?.statistics?.graphtitle}</HeadB>
            <Flex w={'100%'} h={!isSmall ? 'auto' : 'auto'} flexDir={'column'} gapY={1} overflowY={'auto'} style={{ direction: 'ltr' }}>
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
            </>)
          : (<Missing spinner >{translation?.statistics?.error}</Missing>)
      }

    </SectionBody>
  )
}