import React from 'react';
import { Box, Flex, Heading, Icon } from '@chakra-ui/react';
import { GoRocket } from 'react-icons/go';

export default function ArticlesCard() {
  return (
    <Box>
      <Flex alignItems="center">
        <Icon as={GoRocket} mr={2} />
        <Heading as="h2" size="md">
          Get started
        </Heading>
      </Flex>
    </Box>
  );
}
