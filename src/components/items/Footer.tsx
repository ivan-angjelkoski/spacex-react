import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <Box bg={useColorModeValue('gray.100','gray.900')} py={5}>
        <Heading textAlign={'center'} size='sm'>
            SpaceX - {new Date().getFullYear()} - By Ivan Angjelkoski
        </Heading>
    </Box>
  )
}

export default Footer