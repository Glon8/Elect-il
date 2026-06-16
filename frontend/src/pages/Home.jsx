import React, { useState } from 'react'

import { Flex } from '@chakra-ui/react'

import Headder from '../sections/Headder'
import Voting from '../sections/Voting'
import Statistics from '../sections/Statistics'
import History from '../sections/History'
import Footer from '../sections/Footer'

import SignIn from '../sections/SignIn'

function Home() {

    return (
        <Flex bg='bg.subtle' w={"100vw"} minH={'100vh'} flexDir={'column'} position={'relative'}>

            <Headder />
            <Voting />
            <Statistics />
            <History />
            <Footer />
            <SignIn />

        </Flex >
    )
}

export default Home