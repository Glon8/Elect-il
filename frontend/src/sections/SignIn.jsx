import React, { useEffect, useState } from 'react'

import Body from '../components/Body'
import Headder from './Headder';

function SignIn({ show, ...props }) {
    const [useShow, setShow] = useState(false);
    const [useLock, setLock] = useState(true);

    const showUp = () => { setShow(!useShow); }

    useEffect(() => {
        useLock ? setLock(false) : showUp();
    }, [show]);

    return (
        <Body zIndex={10} w={'100vw'} h={'100vh'} display={useShow ? 'center' : 'none'} onClick={() => { showUp(); }} top={0} left={0} position={'fixed'} bg={'black/70'} rounded={0} {...props}>

            <Body zIndex={15} w={'20rem'} h={'25rem'} top={'50%'} left={'50%'} transform={'translate(-50%,-50%)'} position={'fixed'}>

                <Headder roundedTop={'xl'} onClick={() => { showUp(); }} />

            </Body>

        </Body>
    )
}

export default SignIn