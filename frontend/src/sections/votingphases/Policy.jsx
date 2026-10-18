import { useState, useContext } from 'react'

import { Flex, Text, useMediaQuery } from '@chakra-ui/react'
import { LanguageContext } from '../../context/LanguageContext'

import HeadB from '../../components/headers/HeadB'
import HeadC from '../../components/headers/HeadC'
import AText from '../../components/AText'

export default function Policy({ policySwitch, ...props }) {
    const { translation } = useContext(LanguageContext);

    const [isSmall] = useMediaQuery("(max-width: 768px)");

    const [useChecked, setChecked] = useState(false);

    const dict = translation?.votingPolicy;

    return (
        <Flex w={'100%'} flexDir={'column'} justifyContent={'center'} gapY={3} mb={5} {...props}>

            <HeadB>{dict?.title}</HeadB>
            <Flex w={'full'} alignItems={'center'} gapY={5} flexDir={'column'}>
                {
                    isSmall ? (<Flex gapY={5} flexDir={'column'} p={2} rounded={'md'} borderWidth={1} borderColor={'gray.300'}>
                        <Text>{dict?.disclaimer}</Text>
                        <Text>{dict?.guide}</Text>
                    </Flex>) :
                        (<Flex gapY={5} flexDir={'column'} p={2} rounded={'md'} borderWidth={1} borderColor={'gray.300'}>
                            <AText>{dict?.disclaimer}</AText>
                            <AText>{dict?.guide}</AText>
                        </Flex>)
                }
                <Flex w={'full'} gapX={3}>
                    <input type='checkbox' checked={useChecked} onChange={() => { setChecked(!useChecked); policySwitch(); }} />
                    <HeadC color={'black'}>{dict?.checkbox}</HeadC>
                </Flex>
            </Flex>

        </Flex>
    )
}