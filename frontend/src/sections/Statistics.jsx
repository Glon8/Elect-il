import React, { useEffect, useRef, useState, useContext } from 'react'

import { Flex, Text } from '@chakra-ui/react'
import * as echarts from 'echarts'
import { LanguageContext } from '../context/LanguageContext'

import SectionBody from '../components/SectionBody'
import HeadBody from '../components/HeadBody'

function Statistics() {
  const { translation } = useContext(LanguageContext);

  const parties = [
    "Likud",
    "Yesh Atid",
    "National Unity",
    "Yisrael Beiteinu",
    "Religious Zionism",
    "Otzma Yehudit",
    "Shas",
    "United Torah Judaism"
  ];

  const candidates = [
    "Benjamin Netanyahu",
    "Yair Lapid",
    "Benny Gantz",
    "Avigdor Lieberman",
    "Bezalel Smotrich",
    "Itamar Ben-Gvir",
    "Aryeh Deri",
    "Yitzhak Goldknopf"
  ];

  const votes = [
    1125437,
    734221,
    681992,
    312874,
    286541,
    254199,
    417853,
    298744
  ];

  const chartRef = useRef(null);

  const [useVotes, setVotes] = useState(0);
  const [useTop, setTop] = useState([]);

  const toParticipants = [
    "Likud",
    "Yesh Atid",
    "National Unity"
  ];

  const totalVotes = () => { votes.forEach((item) => { setVotes(useVotes + item) }); }

  useEffect(() => {
    totalVotes();

    setTop(toParticipants);

    const myChart = echarts.init(chartRef.current);

    myChart.setOption({
      title: {
        text: 'Votes per party:'
      },
      tooltip: {
      },
      xAxis: {
        data: parties,
        axisLabel: {
          rotate: -90
        }
      },
      yAxis: {
        axisLabel: {
          show: false
        }
      },
      series: [{
        type: 'bar',
        data: votes,
        label: {
          show: true,
          position: 'top'
        }
      }]
    });

    return () => {
      myChart.dispose();
    };
  }, [])

  return (
    <SectionBody justifyContent={'space-between'}>

      <Text fontWeight={'bold'} fontSize={'2xl'} textAlign={'start'} mt={2} mb={3} px={5}>{translation?.statistics?.title}</Text>
      <HeadBody h={'auto'} position={'initial'} flexDir={'column'} justifyContent={'space-evenly'}><Text>{translation?.statistics?.totalvotes}</Text><Text>{useVotes}</Text></HeadBody>
      <Flex ref={chartRef} style={{ width: '100%', height: '400px' }}></Flex>
      <HeadBody position={'initial'} flexDir={'column'} h={'6rem'} justifyContent={'space-evenly'}>

        <Text>{translation?.statistics?.topleaders}</Text>
        <Flex justifyContent={'space-evenly'} w={'100%'}>
          {
            useTop?.map((item, ind) => {
              return (
                <Flex flexDir={'column'} w={'30%'} textAlign={'center'}>
                  <Text>{1 + ind}</Text>
                  <Text>{item}</Text>
                </Flex>
              )
            })
          }
        </Flex>

      </HeadBody>

    </SectionBody>
  )
}

export default Statistics