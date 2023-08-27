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
  keyframes,
} from '@chakra-ui/react';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';
import '../App.css';

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}
`;

function Home() {
  const spinAnimation = `${spin} infinite 20s linear`;
  return (
    <Box>
      <HStack spacing={4} alignContent="center">
        <LinkBox>
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
              transition="filter 300ms"
              filter="auto"
              sx={{
                willChange: 'filter',
              }}
              _hover={{
                dropShadow: '0 0 2em #646cffaa',
              }}
            />
          </LinkOverlay>
        </LinkBox>
        <LinkBox>
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
              transition="filter 300ms"
              filter="auto"
              sx={{
                willChange: 'filter',
              }}
              _hover={{
                dropShadow: '0 0 2em #646cffaa',
              }}
              animation={spinAnimation}
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
