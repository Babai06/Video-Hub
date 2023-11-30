import { Box, Button, HStack, Heading, VStack } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'BlackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading
            size="md"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to get Update
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px Solid white']}
          borderRight={['none', '1px Solid white']}
        >
          <Heading textTransform={'uppercaseh3'} textAlign={'center'}>
            Video Hub
          </Heading>
          <text>Allrights recieved</text>
        </VStack>
        9
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme="white">
            <a
              target={'blank'}
              href="https://www.youtube.com/watch?v=8NbpwbrJrFA"
            >
              {' '}
              Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a
              target={'blank'}
              href="https://www.youtube.com/watch?v=3vDyCnOHo7w"
            >
              {' '}
              Instragram
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a
              target={'blank'}
              href="https://www.youtube.com/watch?v=MpMpKZ4Mb6Q"
            >
              {' '}
              FaceBook
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
