import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Comment } from '../../types/types';

const AddComment: React.FC<{ addComment: (comment: Comment) => void,launch_id: string }> = ({ addComment,launch_id }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    addComment({
        comment,
        name,
        launch_id
    })
    setName('')
    setComment('')
  };
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Flex 
        flexDir={'column'}
        gap={3}
        >
        <Heading size='sm'>Name:</Heading>
        <Input value={name} onChange={(e: React.FormEvent<HTMLInputElement>)=>{setName(e.currentTarget.value)}}/>
        <Heading size='sm'>Comment:</Heading>
        <Input value={comment} onChange={(e: React.FormEvent<HTMLInputElement>)=>{setComment(e.currentTarget.value)}}/>
        <Button colorScheme={'blue'} type={'submit'}>Add</Button>
        </Flex>
      </form>
    </Box>
  );
};

export default AddComment;
