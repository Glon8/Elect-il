import React from 'react'

import { Text } from '@chakra-ui/react'

import SectionBody from '../components/SectionBody'
import Body from '../components/Body'

function Opening() {
    return (
        <SectionBody pt={'4rem'} justifyContent={'center'} alignItems={'center'} px={10} gapY={7}>
            <Text>Thank you for choosing us!</Text>
            <Text>We push toward clear and transparent voting, using encryption and a short time and only minor metadata storage, to make the voting SAFE and SECURE!</Text>
        </SectionBody>
    )
}

export default Opening