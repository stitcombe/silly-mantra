import React from 'react';
import {
  Box,
  HStack,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  Code,
} from '@chakra-ui/react';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';
import '../App.css';

function Home() {
  return (
    <Box>
      <HStack spacing={4}>
        <LinkBox as="image">
          <LinkOverlay
            href="https://vitejs.dev"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={viteLogo}
              alt="vite logo"
              height="6em"
              padding="1.5em"
              will-change="filter"
              transition="filter 300ms"
              _hover={{
                filter: 'drop-shadow(0 0 2em #646cffaa)',
              }}
            />
          </LinkOverlay>
        </LinkBox>
        <LinkBox as="image">
          <LinkOverlay
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={reactLogo}
              alt="react logo"
              height="6em"
              padding="1.5em"
              will-change="filter"
              transition="filter 300ms"
              _hover={{
                filter: 'drop-shadow(0 0 2em #646cffaa)',
              }}
            />
          </LinkOverlay>
        </LinkBox>
      </HStack>
      <Heading as="h1">Vite + React</Heading>
      <Text>
        Edit <Code>src/App.tsx</Code> and save to test HMR
      </Text>
      <Text color="#888">Click on the Vite and React logos to learn more</Text>
    </Box>
  );
}

export default Home;
