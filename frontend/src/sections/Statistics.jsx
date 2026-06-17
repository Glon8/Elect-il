import React, { useEffect, useRef } from 'react'

import { Flex, Text } from '@chakra-ui/react'
import * as echarts from 'echarts'

import SectionBody from '../components/SectionBody'

function Statistics() {
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

  useEffect(() => {

    const myChart = echarts.init(chartRef.current);

    myChart.setOption({
      title: {
        text: 'Votes per party:'
      },
      tooltip: {},
      xAxis: {
        data: parties
      },
      yAxis: {},
      series: [
        {
          name: 'Votes',
          type: 'bar',
          data: votes
        }
      ]
    });

    return () => {
      myChart.dispose();
    };
  }, [])

  return (
    <SectionBody>

      <Text fontWeight={'bold'} fontSize={'2xl'} textAlign={'start'} mt={2} mb={3} px={5}>Current voting state: (Statiscs)</Text>
      <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>

    </SectionBody>
  )
}

export default Statistics