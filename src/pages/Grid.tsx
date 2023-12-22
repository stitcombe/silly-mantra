import React from 'react';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Link,
  Text,
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

function SearchHeader() {
  return (
    <Box
      as="section"
      bgColor="black"
      height="10em"
      px={{ base: '1em', md: '8em' }}
      py="1.5em"
    >
      <Heading color="white" size="lg">
        Answers to your questions
      </Heading>
      <InputGroup>
        <InputLeftElement top={5}>
          <Icon as={FaSearch} color="gray.300" />
        </InputLeftElement>
        <Input
          variant="filled"
          placeholder="Search for..."
          size="lg"
          mt="1em"
          type="search"
          focusBorderColor="white"
          textColor="white"
          bgColor="gray.800"
          _hover={{
            bgColor: 'gray.700',
          }}
          _focus={{
            bgColor: 'white',
            textColor: 'black',
          }}
        />
      </InputGroup>
    </Box>
  );
}

function MenuCard() {
  return (
    <GridItem
      w="100%"
      h="13em"
      border="1px"
      borderColor="gray.300"
      borderRadius={8}
      boxShadow="sm"
      _hover={{
        borderColor: 'gray.900',
      }}
      transitionTimingFunction="linear"
      transitionProperty="border-color"
      transitionDuration=".25s"
      cursor="pointer"
    />
  );
}

function Footer() {
  return (
    <Box as="footer" mt="6em" py="3em">
      <Flex px="2em" justifyContent="center">
        <VStack spacing="2em">
          <Link
            href="https://chakra-ui.com"
            color="gray.300"
            _hover={{ color: 'black', textDecoration: 'none' }}
          >
            <Heading size="lg">DocsIO</Heading>
          </Link>
          <HStack spacing="3em">
            <Link
              href="https://chakra-ui.com"
              color="gray.300"
              _hover={{ color: 'black', textDecoration: 'none' }}
            >
              <Text>API</Text>
            </Link>
            <Link
              href="https://chakra-ui.com"
              color="gray.300"
              _hover={{ color: 'black', textDecoration: 'none' }}
            >
              <Text>API</Text>
            </Link>
            <Link
              href="https://chakra-ui.com"
              color="gray.300"
              _hover={{ color: 'black', textDecoration: 'none' }}
            >
              <Text>API</Text>
            </Link>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
}

export default function Gridy() {
  return (
    <>
      <SearchHeader />
      <Box px={{ base: '1em', md: '8em' }} pt="2em">
        <Flex direction="column" gap={12}>
          <Grid
            templateColumns={{ base: 'none', md: 'repeat(3, minmax(0,1fr))' }}
            gap={6}
            gridAutoRows="auto"
          >
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </Grid>
        </Flex>
      </Box>
      <Footer />
    </>
  );
}
