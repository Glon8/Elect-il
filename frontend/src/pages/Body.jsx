import React, { useContext, useEffect, useState } from 'react'

import { Flex } from '@chakra-ui/react'

import Headder from '../sections/Headder'
import LoginHeader from '../sections/LoginHeader'
import Opening from '../sections/Opening'
import Voting from '../sections/Voting'
import Statistics from '../sections/Statistics'
import History from '../sections/History'
import Footer from '../sections/Footer'
import SignIn from '../sections/SignIn'
import Approval from '../sections/Approval'
import Us from '../sections/Us'
import Encryption from '../sections/Encryption'
import VoteConfirm from '../sections/VoteConfirm'

import { PageContext } from '../context/PageContext'
import { SignContext } from '../context/SignContext'


function Body() {
    const { page } = useContext(PageContext);
    const { userData } = useContext(SignContext);

    return (
        <Flex bg='#A1CAE8' w={"100%"} minH={'100vh'} flexDir={'column'} position={'relative'}>

            <Headder />
            <LoginHeader />
            <SignIn />

            {page === 'election' ? <Opening /> : null}
            {page === 'election' && !!userData.token ? <Voting /> : null}
            <VoteConfirm />
            {page === 'election' ? <Statistics /> : null}
            {page === 'election' ? <History /> : null}

            {page === 'us' ? <Us /> : null}

            {page === 'approval' ? <Approval /> : null}

            {page === 'encryption' ? <Encryption /> : null}

            <Footer />

        </Flex >
    )
}

export default Body
