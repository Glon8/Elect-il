import React from 'react'

import { } from '@chakra-ui/react'

import Body from '../components/Body'

function SignIn({ ...props }) {
    return (<Body h='20rem' w={'20rem'} top='28' left='7' position={'absolute'} bg={'red'} {...props}>
        Sign in form
    </Body>)
}

export default SignIn