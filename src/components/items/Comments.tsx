import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Comment } from '../../types/types'

const Comments: React.FC<{comments: Comment[]}> = ({comments}) => {
    const bgColor = useColorModeValue('gray.100','gray.900')
  return (
    <Box>
        <Heading size='md' mb={4}>Comments:</Heading>
        <Flex 
        flexDir='column'
        gap={3}
        >
            {comments.length > 0 ? comments.map((comment,i) => (<Box 
            key={i}
            bg={bgColor}
            p={3}
            rounded={6}
            >
                <Heading size='sm' opacity={0.7} mb={2}>{comment.name}</Heading>
                <Heading size='sm'>{comment.comment}</Heading>
            </Box>)) : <Heading m={3}>No Comments</Heading>}
        </Flex>
    </Box>
  )
}

export default Comments