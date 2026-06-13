import React, { useState } from 'react'

import { Flex } from '@chakra-ui/react'

import Headder from '../sections/Headder'
import Voting from '../sections/Voting'
import Statistics from '../sections/Statistics'
import History from '../sections/History'
import Footer from '../sections/Footer'

import SignIn from '../sections/SignIn'

function Home() {
    const [useSignIn, setSignIn] = useState(false);

    const switchSignInForm = () => setSignIn(!useSignIn);

    return (<Flex bg='cyan.muted' w={"100vw"} minH={'100vh'} px={'5'} py={'2'} flexDir={'column'} position={'relative'}>

        <Headder onClick={switchSignInForm} />
        <Voting />
        <Statistics />
        <History />
        <Footer />
        <SignIn display={useSignIn ? 'flex' : 'none'} />

    </Flex >)
}

export default Home