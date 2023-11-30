import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
  Center,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading textAlign={'center'}>Welcome Back</Heading>
          <Input
            placeholder="Email"
            type={'email'}
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="Password"
            type={'password'}
            required
            focusBorderColor="purple.500"
          />
          <Button variant={'link'} alignself={'flex-end'}>
            <Link to={'/forgetpassword'} textAlign={'right'}>
              Forget Password?
            </Link>
          </Button>
          <Button colorScheme="purple" type="submit">
            Log In
          </Button>
          <Text textAlign={'center'}>New User?</Text>
          <Button variant={'link'} colorScheme="purple">
            <Link to={'/signup'}>Sign Up</Link>
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
