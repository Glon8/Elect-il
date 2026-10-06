import { Button } from '@chakra-ui/react'

export function PseudoLink({ children, ...props }) {
    return (
        <Button h={'2rem'} px={2} bg={'transparent'} _hover={{ textDecoration: "underline" }} textUnderlineOffset="4px" color={'black'} {...props}>
            {children}
        </Button>
    )
}
