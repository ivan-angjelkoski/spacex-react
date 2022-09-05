import { Box, Flex, Heading, Img, Link, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import profile_pic from '../../assets/profile_pic.jpg'

const AboutBody: React.FC = () => {
  return (
    <Box>
        <Flex alignItems={'center'} justifyContent='center' flexDir={'column'} >
            <Box 
            textAlign={'center'} 
            my={15}
            rounded={10}
            border={'2px'}
            borderColor={useColorModeValue('gray.200','gray.700')}
            p={5}>
                    <Heading opacity={0.9}>SpaceX API + GraphQL</Heading>
                    <Heading opacity={0.7} size='md'> with Typescript,ChakraUI and Database With BackEnd</Heading>
            </Box>
        </Flex>
        <Box>
            <Heading textAlign={'center'}>Developed By</Heading>
            <Img mx='auto' my={5} w={'200px'} h={'200px'} objectFit={'cover'} objectPosition='top' rounded={6} src={profile_pic}/>
            <Link href='https://ivan-angjelkoski.vercel.app/' target='_blank'>
            <Heading textAlign={'center'} mb={5} pb={5} borderBottom='2px'>Ivan Angjelkoski</Heading>
            </Link>
            <Heading size='md' opacity={0.8}>Technologies and Techniques used:</Heading>
            <Box pl={5} my={5}>
            <Heading size='sm'>- React</Heading>
            <Heading size='sm'>- GraphQl</Heading>
            <Heading size='sm'>- Chakra UI</Heading>
            <Heading size='sm'>- Typescript</Heading>
            <Heading size='sm'>- MongoDB</Heading>
            <Heading size='sm'>- Express</Heading>
            <Heading size='sm'>- Custom Hooks</Heading>
            </Box>
        </Box>
    </Box>
  )
}

export default AboutBody