import { useContext } from 'react'

import { Flex, useMediaQuery } from '@chakra-ui/react'

import Headder from '../sections/Headder'
import LoginHeader from '../sections/LoginHeader'
import Opening from '../sections/Opening'
import Voting from '../sections/Voting'
import Statistics from '../sections/Statistics'
import History from '../sections/History'
import Footer from '../sections/Footer'
import SignIn from '../sections/SignIn'
import License from '../sections/License'
import Us from '../sections/Us'
import Encryption from '../sections/Encryption'
import VoteConfirm from '../sections/VoteConfirm'

import { PageContext } from '../context/PageContext'
import { SignContext } from '../context/SignContext'


function Body() {
    const [isSmall] = useMediaQuery("(max-width: 768px)");

    const { page } = useContext(PageContext);
    const { userData } = useContext(SignContext);

    return (
        <Flex bg='#A1CAE8' w={"100%"} minH={'100vh'} flexDir={'column'} position={'relative'} alignItems={'center'} gapY={isSmall ? 5 : 0}>

            <Headder />
            <LoginHeader />
            <SignIn />

            {page === 'election' ? <Opening /> : null}
            {page === 'election' ? <Voting /> : null}
            <VoteConfirm />
            {page === 'election' ? <Statistics /> : null}
            {page === 'election' ? <History /> : null}

            {page === 'us' ? <Us /> : null}

            {page === 'license' ? <License /> : null}

            {page === 'encryption' ? <Encryption /> : null}

            <Footer />

        </Flex >
    )
}

export default Body
