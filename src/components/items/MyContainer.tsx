import { Container } from '@chakra-ui/react'
import React from 'react'

const MyContainer: React.FC<{children: any}> = ({children}) => {
  return (
    <Container maxW={'6xl'}>{children}</Container>
  )
}

export default MyContainer