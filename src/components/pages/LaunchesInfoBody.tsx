import { ApolloQueryResult } from '@apollo/client'
import { Badge, Box, Flex, Heading, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { launchData } from '../../types/types'
import rocketsvg from '../../assets/rocket.svg'

const LaunchesInfoBody: React.FC<{query: ApolloQueryResult<launchData>}> = ({query}) => {
    
    if (query.loading) {return <Heading>Loading...</Heading>}
    if (query.error) {return <Heading>Error...</Heading>}
    else
  return (
    <>
    {query.data.launch && (
    <Flex flexDir='column' p={5} gap={5}>
        <Heading opacity={0.9}>{query.data.launch.mission_name}</Heading>
        <Box borderTop='2px' borderBottom={'2px'} my={4} py={4} borderColor='rgba(127,127,127,0.2)'>
        <Img 
        mx='auto' 
        h={'300px'} 
        src={query.data.launch.links.flickr_images.length > 0 ? query.data.launch.links.flickr_images[0] : rocketsvg}
        objectFit='contain'
        />
        </Box>
        <Box>
            <Heading size='sm' opacity={0.8}>Rocket Name:</Heading>
            <Heading mb={3}>{query.data.launch.rocket.rocket_name}</Heading>
            <Heading size='sm' opacity={0.8}>Rocket Type:</Heading>
            <Heading mb={3}>{query.data.launch.rocket.rocket_type}</Heading>
            <Heading size='sm' opacity={0.8}>Land Success:</Heading>
            {query.data.launch.rocket.first_stage.cores[0].land_success ? <Badge colorScheme={'green'}>Success</Badge> : <Badge colorScheme={'red'}>Failure</Badge>}
            <Text my={3}>{query.data.launch.details}</Text>
            <Heading size={'sm'} opacity={0.8}>Launch Year:</Heading>
            {/* <Heading >{query.data.launch.launch_year}</Heading> */}
            <Heading size='md'>{new Date(query.data.launch.launch_date_unix * 1000).toLocaleDateString(undefined,{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</Heading>
        </Box>
        <SimpleGrid 
        templateColumns={['1fr','1fr 1fr','1fr 1fr','1fr 1fr','1fr 1fr 1fr']}
        p={3}
        gap={3}
        >
            {query.data.launch.links.flickr_images.length > 0 && (
                query.data.launch.links.flickr_images.map((img,i) => {
                    return <Box key={i}>
                        <Img 
                        w={'full'} 
                        h={'full'}
                        transition={'all 0.1s'}
                        _hover={{transform: 'scale(1.01)'}}
                        src={img}
                        objectFit='cover' />
                    </Box>
                })
            ) }
        </SimpleGrid>
    </Flex>
  )}
    </>
  )
}

export default LaunchesInfoBody