import React, { useState } from 'react'

import { Flex } from '@chakra-ui/react'

import { log, setDebug, setConfig } from 'logs-js'

import Headder from '../sections/Headder'
import Opening from '../sections/Opening'
import Voting from '../sections/Voting'
import Statistics from '../sections/Statistics'
import History from '../sections/History'
import Footer from '../sections/Footer'

import SignIn from '../sections/SignIn'

function Body() {
    log({ data: 'Test', tag: 'i' });
    return (
        <Flex bg='#A1CAE8' w={"100%"} minH={'100vh'} flexDir={'column'} position={'relative'}>

            <Headder />
            <Opening />
            <Voting />
            <Statistics />
            <History />
            <Footer />
            <SignIn />

        </Flex >
    )
}

export default Body
