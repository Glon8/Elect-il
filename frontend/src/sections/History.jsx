import { useContext } from 'react'

import { Flex, Link, Text, Input, useMediaQuery, Button } from '@chakra-ui/react'
import { LanguageContext } from '../context/LanguageContext'
import { HistoryContext } from '../context/HistoryContext'

import SectionBody from '../components/SectionBody'
import HeadA from '../components/headers/HeadA'
import AText from '../components/AText'
import Missing from '../components/Missing'
import Seperator from '../components/Seperator'

function history() {
  const { translation } = useContext(LanguageContext);
  const { query, year, date, setDate, setYear, updateQuery } = useContext(HistoryContext);

  const [isSmall] = useMediaQuery("(max-width: 768px)");

  const dict = translation?.history;

  return (
    <SectionBody tcpl pb={'1rem'} justifyContent={'center'}>

      <HeadA mb={0}>{dict?.title}</HeadA>
      <Seperator />
      <AText p={2} color={'gray'} rounded={'md'} borderWidth={1} borderColor={'gray.300'}>{dict?.desc}</AText>
      <Flex w={'full'} justifyContent={'center'} mt={8} style={{ direction: 'ltr' }}>
        <Input value={year} letterSpacing={4} w={'10rem'} borderColor={'gray.300'} borderRightWidth={0} borderRightRadius={0} placeholder={dict?.search} maxLength={4} textAlign={'center'} inputMode='numeric'
          onChange={(e) => setYear(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' ? updateQuery() : null}></Input>
        <Button onClick={updateQuery} bg={'#384480'} color={'white'} borderLeftRadius={0}><i className='pi pi-search'></i></Button>
      </Flex>
      <Flex h={!isSmall ? '30%' : '40%'} justifyContent={'center'}>
        <Flex w={!isSmall ? '100%' : '80%'} h={'100%'} flexWrap={'wrap'} alignContent={'flex-start'} overflowY={'auto'} my={'1rem'} gapY={3} justifyContent={query !== null && query.length != 0 ? 'space-between' : 'center'} style={{ direction: 'ltr' }}>
          {
            query !== null && query.length != 0 ?
              query?.map((item, ind) => {
                return (
                  <Flex key={`history${ind}`} w={!isSmall ? '19%' : '48%'} h={'3rem'} justifyContent={'center'} rounded={'1rem'} bg={item.starts === date ? 'blue.500' : 'transparent'} borderWidth={1} borderColor={item.starts === date ? 'blue.600' : 'gray.300'}>
                    <Link h={'3rem'} justifyContent={'space-around'} color={item.starts === date ? 'white' : 'black'} rounded={'md'} onClick={(e) => {
                      e.preventDefault();

                      const latest = item.starts;

                      if (latest === date) return;

                      setDate(latest);
                    }}>
                      <Text fontWeight={'medium'} textAlign={'center'} textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'nowrap'}>{item.starts}</Text>
                    </Link>
                  </Flex>
                )
              }) : (<Missing >{dict?.nohistory}</Missing>)
          }
        </Flex>
      </Flex>

    </SectionBody >
  )
}

export default history
