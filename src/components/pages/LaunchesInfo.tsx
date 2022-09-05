import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useLaunch } from '../../hooks/useLaunch'
import MyContainer from '../items/MyContainer'
import LaunchesInfoBody from './LaunchesInfoBody'
import LaunchesInfoComments from './LaunchesInfoComments'

const LaunchesInfo:React.FC = () => {
    const {id} = useParams() as {id: string}
    const query = useLaunch(id)
  return (
    <MyContainer>
    <SimpleGrid templateColumns={['1fr','1fr','2fr 1fr']}>
        <Box>
          <LaunchesInfoBody query={query} />
        </Box>
        <Box p={5} 
        // borderLeft={'2px'} 
        borderColor='rgba(127,127,127,0.5)'>
          <LaunchesInfoComments id={id}/>
          </Box>
    </SimpleGrid>
    </MyContainer>
  )
}

export default LaunchesInfo