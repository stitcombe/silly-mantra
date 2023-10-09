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
  TagLeftIcon,
  TagLabel,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import ExpandableText from 'components/ExpandableText';
import { AiFillCaretDown } from 'react-icons/ai';
import {
  BiTimeFive,
  BiGitBranch,
  BiCodeCurly,
  BiPackage,
  BiDotsVerticalRounded,
  BiGlassesAlt,
  BiBugAlt,
} from 'react-icons/bi';
import { VscFeedback } from 'react-icons/vsc';
import { IoMdBrowsers } from 'react-icons/io';
import { BsFillSendFill } from 'react-icons/bs';
import feedbackData from 'mocks/feedback';
import ScrollToTopButton from 'components/ScrollToTopButton';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';
import { FeedbackTag } from 'components/FeedbackTag/FeedbackTag';

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
      {/* Table */}

      <Box
        border="1px solid"
        borderRadius="6px"
        mx={{ base: '0', sm: '4', md: '14' }}
        my="8"
        boxSizing="border-box"
        minWidth="480px"
      >
        {/* Table Header */}
        <Flex p="4" bgColor="blackAlpha.50" justifyContent="space-between">
          <Box flex="auto" display="block">
            <Heading as="h2" size="md">
              Feedback
            </Heading>
          </Box>
          <Flex justifyContent="flex-end">
            <Box pr="4">Type</Box>
            <Box px="4">Version</Box>
            <Box px="4">Browser</Box>
            <HStack pl="4" alignItems="center">
              <Text>Environment</Text>
              <Icon as={AiFillCaretDown} />
            </HStack>
          </Flex>
        </Flex>
        {/* Table Row */}
        {feedbackData.data?.map((item) => (
          <Box
            borderTop="1px"
            p="4"
            bgColor={item.read ? 'transparent' : 'azure'}
          >
            <Flex justifyContent="space-between" alignItems="start">
              {/* Left Content */}
              <HStack maxW="60%" alignItems="start">
                {/* Avatar */}
                <Box pr="6">
                  <Tooltip label={item.email} hasArrow>
                    <Avatar name={item.email} size="sm" />
                  </Tooltip>
                </Box>
                {/* Data */}
                <Box pr="8">
                  <Box pb="2">
                    <ExpandableText text={item.feedback} maxLength={150} />
                  </Box>
                  {/* Tag Stack */}
                  <HStack>
                    <FeedbackTag
                      variantType={item.feedbackType}
                      label={item.feedbackType}
                    />
                    <FeedbackTag
                      variantType="appVers"
                      label={`v${item.appVers}`}
                    />
                    <FeedbackTag
                      variantType="environemnt"
                      label={item.environemnt}
                    />
                    <FeedbackTag variantType="browser" label={item.browser} />
                  </HStack>
                </Box>
              </HStack>
              {/* Right Content */}
              <HStack maxW="40%" justify="space-between">
                <Box mx="4" display={{ base: 'none', lg: 'block' }}>
                  <HStack>
                    <Icon as={BiTimeFive} />
                    <Text>{item.timestamp}</Text>
                  </HStack>
                  <HStack>
                    <Icon as={BiCodeCurly} />
                    <Text>{item.url}</Text>
                  </HStack>
                </Box>
                <Box mr="2">
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label="row menu"
                      icon={<BiDotsVerticalRounded />}
                      variant="outline"
                    />
                    <MenuList>
                      <MenuItem
                        display={{ base: 'block', lg: 'none' }}
                        isDisabled
                        icon={<BiTimeFive />}
                      >
                        {item.timestamp}
                      </MenuItem>
                      <MenuItem
                        display={{ base: 'block', lg: 'none' }}
                        isDisabled
                        icon={<BiCodeCurly />}
                      >
                        {item.url}
                      </MenuItem>
                      <MenuDivider display={{ base: 'block', lg: 'none' }} />
                      <MenuItem icon={<BiGlassesAlt />}>Mark As Read</MenuItem>
                      <MenuItem icon={<BsFillSendFill />}>
                        Send To Jira
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
              </HStack>
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Home;
