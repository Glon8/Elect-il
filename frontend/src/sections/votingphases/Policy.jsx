import { useState, useContext } from 'react'

import { Flex } from '@chakra-ui/react'
import { LanguageContext } from '../../context/LanguageContext'

import HeadB from '../../components/headers/HeadB'
import HeadC from '../../components/headers/HeadC'
import AText from '../../components/AText'

export default function Policy({ ...props }) {
    const { translation } = useContext(LanguageContext);

    const [useChecked, setChecked] = useState(false);

    return (
        <Flex w={'100%'} flexDir={'column'} justifyContent={'center'} gapY={3} {...props}>

            <HeadB>Disclaimer & Security</HeadB>
            <Flex w={'full'} alignItems={'center'} gapY={5} flexDir={'column'}>
                <AText>{translation?.voteconfirm?.disclaimer}</AText>
                <AText>For full security and encryption explanation, read the Encryption section in the end of the page.</AText>
                <Flex w={'full'} gapX={3}>
                    <input type='checkbox' checked={useChecked} onChange={() => setChecked(!useChecked)} />
                    <HeadC color={'black'}>{translation?.voteconfirm?.label}</HeadC>
                </Flex>
            </Flex>

        </Flex>
    )
}