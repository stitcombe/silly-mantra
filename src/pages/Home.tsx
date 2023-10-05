import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  Code,
  keyframes,
  Switch,
  Avatar,
  Tooltip,
  Icon,
  Tag,
  Spacer,
  TagLeftIcon,
  TagLabel,
} from '@chakra-ui/react';
import { AiFillCaretDown } from 'react-icons/ai';
import { BiTimeFive, BiGitBranch } from 'react-icons/bi';
import { VscFeedback } from 'react-icons/vsc';
import { IoMdBrowsers } from 'react-icons/io';
import { MdOutlineWhereToVote } from 'react-icons/md';
import feedbackData from 'mocks/feedback';
import ScrollToTopButton from 'components/ScrollToTopButton';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}
`;

function Home({ toggleFeedback }: { toggleFeedback: () => void }): JSX.Element {
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
      <Switch onChange={toggleFeedback}>Toggle Feedback</Switch>
      <ScrollToTopButton />
      <Box
        border="1px solid"
        borderRadius="6px"
        mx="12"
        my="8"
        boxSizing="border-box"
        minWidth="container.sm"
      >
        <Flex p="4" bgColor="blackAlpha.50" justifyContent="space-between">
          <Box flex="auto" display="block">
            <Heading as="h2" size="md">
              Feedback
            </Heading>
          </Box>
          <Flex justifyContent="flex-end">
            <Box pr="4">Type</Box>
            <Box px="4">Status</Box>
            <HStack pl="4" alignItems="center">
              <Text>Date</Text>
              <Icon as={AiFillCaretDown} />
            </HStack>
          </Flex>
        </Flex>
        {feedbackData.data?.map((item) => (
          <Box borderTop="1px" p="4">
            <Flex justifyContent="flex-start" alignItems="center">
              <Box pr="6">
                <Tooltip label={item.email} hasArrow>
                  <Avatar name={item.email} size="sm" />
                </Tooltip>
              </Box>
              <Box>
                <Text>{item.feedback}</Text>
                <HStack>
                  <Tag variant="subtle" colorScheme="cyan">
                    <TagLeftIcon as={VscFeedback} />
                    <TagLabel>{item.feedbackType}</TagLabel>
                  </Tag>
                  <Tag variant="subtle" colorScheme="blue">
                    <TagLeftIcon as={BiGitBranch} />
                    <TagLabel>v{item.appVers}</TagLabel>
                  </Tag>
                  <Tag variant="subtle" colorScheme="orange">
                    <TagLeftIcon as={IoMdBrowsers} />
                    {item.browser}
                  </Tag>
                </HStack>
              </Box>
              <Spacer />
              <Box>
                <HStack>
                  <Icon as={BiTimeFive} />
                  <Text>{item.timestamp}</Text>
                </HStack>
                <HStack>
                  <Icon as={MdOutlineWhereToVote} />
                  <Text>{item.url}</Text>
                </HStack>
              </Box>
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Home;
