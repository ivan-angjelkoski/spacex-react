import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { useComments } from '../../hooks/useComments';
import AddComment from '../items/AddComment';
import Comments from '../items/Comments';


const LaunchesInfoComments: React.FC<{id: string}> = ({id}) => {
    const {data,loading,addComment} = useComments(id)
    
  return (
    <Flex flexDir='column' gap={5}>
        <AddComment launch_id={id} addComment={addComment}/>
        {loading ? <Heading m={3}>Loading...</Heading> : <Comments comments={data}/>}
    </Flex>
  )
}

export default LaunchesInfoComments