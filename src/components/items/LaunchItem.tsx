import { Box, Heading, Img, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { launchesPast } from '../../types/types'
import rocketsvg from '../../assets/rocket.svg'
import { Link } from 'react-router-dom'

const LaunchItem: React.FC<{launch: launchesPast}> = ({launch}) => {
  return (
    <Link style={{width: '100%',maxWidth: '300px',margin: '0 auto'}} to={`/launch/${launch.id}`}>
    <Box 
    h='full'
    rounded={5} 
    border='1px'
    transition={'all 0.2s'}
    borderColor={useColorModeValue('blackAlpha.100','whiteAlpha.100')}
    _hover={{bgColor: 'rgba(127,127,255,0.2)'}}
    >
        <Box p={3} w='full' style={{aspectRatio: '1/1'}}>
        <Img 
        src={launch.links.flickr_images.length > 0 ? launch.links.flickr_images[0] : rocketsvg}
        width={'full'}
        height={'full'}
        rounded={10}
        objectFit={'cover'}
        />
        </Box>
        <Box p={3}>
            <Heading 
            size='sm' 
            opacity={0.8}
            borderTop='2px'
            pt={2}
            borderColor={useColorModeValue('blackAlpha.300','whiteAlpha.300')}
            >{launch.rocket.rocket_name}</Heading>
            <Heading size='md'>{launch.mission_name}</Heading>
        </Box>
    </Box>
    </Link>
  )
}

export default LaunchItem