import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import MyContainer from './MyContainer';

const Navbar = () => {
    const {toggleColorMode} = useColorMode()
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')}>
      <MyContainer>
        <Flex justifyContent={'space-between'} alignItems="center" gap={3} p={3}>
          <Link to={'/'}><Heading fontWeight={'normal'}>SpaceX</Heading></Link>
          <Flex gap={3}>
            <IconButton 
            variant={'outline'} 
            aria-label='darkMode' 
            icon={useColorModeValue(<MoonIcon/>,<SunIcon/>)}
            onClick={toggleColorMode}
            />
            <Link to={'/'}>
              <Button colorScheme={'gray'} variant='solid'>Home</Button>
            </Link>
            <Link to={'/about'}>
              <Button colorScheme={'gray'} variant='solid'>About</Button>
            </Link>
          </Flex>
        </Flex>
      </MyContainer>
    </Box>
  );
};

export default Navbar;
