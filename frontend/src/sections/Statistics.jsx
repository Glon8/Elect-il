import { useEffect, useState, useContext } from 'react'

import { Flex, Text, useMediaQuery } from '@chakra-ui/react'
import { LanguageContext } from '../context/LanguageContext'
import { HistoryContext } from '../context/HistoryContext'

import { dateReadify } from '../../util'

import SectionBody from '../components/SectionBody'
import HeadBody from '../components/HeadBody'
import HeadA from '../components/headers/HeadA'
import HeadB from '../components/headers/HeadB'
import HeadC from '../components/headers/HeadC'
import AText from '../components/AText'
import StValues from '../components/StValues'
import Missing from '../components/Missing'
import Seperator from '../components/Seperator'

export default function Statistics() {
  const { translation } = useContext(LanguageContext);
  const { date, dateObj } = useContext(HistoryContext);

  const [isSmall] = useMediaQuery("(max-width: 768px)");

  const [useVotes, setVotes] = useState(0);

  const totalVotes = (object) => object?.votes.reduce((total, value) => total + value, 0);

  const dict = translation?.statistics;

  useEffect(() => {
    if (!dateObj) return;

    const sum = totalVotes(dateObj);

    setVotes(sum);
  }, [dateObj]);

  return (
    <SectionBody tcpr bcpr justifyContent={'center'} my={'3rem'}>

      <HeadA mb={0}>{dict?.title}</HeadA>
      <Seperator />
      {
        !!dateObj ?
          (<>
            <Flex gapX={3} mb={3}>
              <HeadC>{dict?.date}:</HeadC>
              <AText>{dateReadify(date) ?? "404"}</AText>
            </Flex>
            <HeadBody h={'auto'} position={'initial'} flexDir={'column'} justifyContent={'space-evenly'} rounded={'md'} borderWidth={1} borderColor={'gray.300'}>
              <HeadB>{dict?.totalvotes}</HeadB>
              <StValues color={'#4E5EB1'} letterSpacing={2} fontSize={'2rem'} fontWeight={'bolder'}>{useVotes}</StValues>
            </HeadBody>
            <HeadB mt={3} textAlign={'center'}>{dict?.graphtitle}</HeadB>
            <Flex w={'100%'} h={!isSmall ? 'auto' : 'auto'} flexDir={'column'} gapY={1} overflowY={'auto'} style={{ direction: 'ltr' }}>
              {
                dateObj?.parties.map((party, ind) => {
                  const key = `stats${ind}`

                  const vote = dateObj.votes[ind];
                  const width = Math.floor((vote * 100) / useVotes);

                  return <Flex key={key} w={'100%'} borderXWidth={3} borderColor={'black'} bg={'#C8D9EE/55'} position={'relative'}>
                    <Flex w={`${width}%`} minH={'3rem'} bg={'blue.500'}> </Flex>
                    <Text position={'absolute'} left={5} top={3} px={1} textAlign={'center'} bg={'white'} rounded={'md'} borderColor={'gray.300'}>{party}</Text>
                    <Text position={'absolute'} right={5} top={3} px={1} textAlign={'center'} bg={'white'} rounded={'md'} borderColor={'gray.300'}>{vote}</Text>
                  </Flex>
                })
              }
            </Flex>
          </>)
          : (<Missing spinner >{dict?.error}</Missing>)
      }

    </SectionBody>
  )
}