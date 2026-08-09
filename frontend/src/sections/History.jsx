import React, { useContext } from 'react'

import { Flex, Link, Text, Input, useMediaQuery, Button } from '@chakra-ui/react'
import { LanguageContext } from '../context/LanguageContext'
import { HistoryContext } from '../context/HistoryContext'

import SectionBody from '../components/SectionBody'
import Body from '../components/Body'

function history() {
  const { translation } = useContext(LanguageContext);
  const { useQuery, useDate, setDate, updateQuery } = useContext(HistoryContext);

  const [isSmall] = useMediaQuery("(max-width: 768px)");

  const electionHistory = [
    "2018-01-14",
    "2018-03-27",
    "2018-05-09",
    "2018-06-22",
    "2018-08-16",
    "2018-10-03",
    "2018-11-19",
    "2019-01-07",
    "2019-03-24",
    "2019-05-11",
    "2019-06-29",
    "2019-08-13",
    "2019-10-26",
    "2019-12-04",
    "2020-01-21",
    "2020-03-08",
    "2020-05-17",
    "2020-06-30",
    "2020-08-14",
    "2020-10-05",
    "2020-11-23",
    "2021-01-12",
    "2021-03-28",
    "2021-05-06",
    "2021-06-19",
    "2021-08-03",
    "2021-10-17",
    "2021-12-09",
    "2022-01-26",
    "2022-03-14",
    "2022-05-02",
    "2022-06-21",
    "2022-08-11",
    "2022-10-29",
    "2022-12-16",
    "2023-02-07",
    "2023-03-25",
    "2023-05-13",
    "2023-07-01",
    "2023-08-18",
    "2023-10-06",
    "2023-11-27",
    "2024-01-15",
    "2024-03-04",
    "2024-04-26",
    "2024-06-12",
    "2024-08-01",
    "2024-09-19",
    "2024-11-08",
    "2024-12-23",
    "2025-02-10",
    "2025-03-29",
    "2025-05-17",
    "2025-07-05",
    "2025-08-24",
    "2025-10-11",
    "2025-12-02",
    "2026-01-20",
    "2026-03-09",
    "2026-04-27",
    "2026-06-15",
    "2026-08-03",
    "2026-09-22",
    "2026-11-10",
    "2026-12-28",
    "2027-02-15",
    "2027-04-05",
    "2027-05-24",
    "2027-07-12",
    "2027-08-31",
    "2027-10-19",
    "2027-12-07",
    "2028-01-25",
    "2028-03-14",
    "2028-05-02",
    "2028-06-20",
    "2028-08-08",
    "2028-09-27",
    "2028-11-15",
    "2028-12-31",
    "2029-02-18",
    "2029-04-08",
    "2029-05-27",
    "2029-07-15",
    "2029-09-03",
    "2029-10-22",
    "2029-12-10",
    "2030-01-28",
    "2030-03-18",
    "2030-05-06",
    "2030-06-25",
    "2030-08-13",
    "2030-10-01",
    "2030-11-20",
    "2031-01-08",
    "2031-02-26",
    "2031-04-16",
    "2031-06-04",
    "2031-07-23",
    "2031-09-11",
    "2031-10-30"
  ];

  return (
    <SectionBody pb={'1rem'} alignItems={'center'}>

      <Text fontWeight={'bold'} fontSize={'2xl'} textAlign={'start'} mt={2} mb={3} px={5}>{translation?.history?.title}</Text>
      <Text px={{ base: '1rem', smToMd: '1rem' }}>{translation?.history?.desc}</Text>
      <Flex justifyContent={'center'} mt={8} style={{ direction: 'ltr' }}>
        <Input letterSpacing={4} borderRightWidth={0} w={'10rem'} borderRightRadius={0} placeholder={translation?.history?.search} type='number' textAlign={'center'} inputMode='numeric'></Input>
        <Button borderWidth={1} borderLeftWidth={1} borderColor={'gray.300'} color={'gray.300'} bg={'white'} borderLeftRadius={0}><i className='pi pi-search'></i></Button>
      </Flex>
      <Flex w={!isSmall ? '100%' : '80%'} h={'90%'} flexWrap={'wrap'} overflowY={'auto'} px={'1rem'} my={'1rem'} gapY={3} justifyContent={'space-between'} style={{ direction: 'ltr' }}>
        {
          electionHistory?.map((item, ind) => {
            return (
              <Flex key={`history${ind}`} w={!isSmall ? '19%' : '32%'} h={'3rem'} justifyContent={'center'} rounded={'1rem'} bg={'transparent'} borderWidth={1} borderColor={'gray.300'}>
                <Link h={'3rem'} justifyContent={'space-around'} color={'black'} rounded={'md'} onClick={(e) => { e.preventDefault(); }}>
                  <Text textAlign={'center'} textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'nowrap'}>{item}</Text>
                </Link>
              </Flex>
            )
          })
        }
      </Flex>

    </SectionBody>
  )
}

export default history
