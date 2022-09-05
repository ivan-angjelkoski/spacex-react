import { Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { useLaunches } from '../../hooks/useLaunches'

import LaunchItem from '../items/LaunchItem'
import MyContainer from '../items/MyContainer'

const Home:React.FC = () => {
    const {data,error,loading} = useLaunches()
    console.log(data);
    
    if (loading) {return <Heading textAlign={'center'} m={3}>Loading...</Heading>}
    else if (error) {return <Heading textAlign={'center'} m={3}>Error Loading...</Heading>}
    else {
        return (
            <>
            <MyContainer>
                <SimpleGrid 
                gridTemplateColumns={['1fr','1fr','1fr 1fr','1fr 1fr 1fr']}
                alignItems='stretch'
                justifyContent={''}
                p={3}
                gap={5}
                >
                {data?.launchesPast.map(item => (<LaunchItem key={item.id} launch={item}/>))}
                </SimpleGrid>
            </MyContainer>
        
            </>
          )
    }
}

export default Home