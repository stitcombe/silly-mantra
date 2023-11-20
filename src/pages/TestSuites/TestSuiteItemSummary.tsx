import React from 'react';
import { Box, Heading, Card, Text, HStack } from '@chakra-ui/react';

export default function TestSuiteItemSummary() {
  return (
    <Box mx={6}>
      <Heading as="h1" size="xl">
        Summary
      </Heading>
      <HStack
        justify="space-evenly"
        alignContent="stretch"
        alignItems="stretch"
        py={6}
      >
        <Card align="center" variant="outline" minW="sm" h="lg">
          <Text fontSize="xl">Card 1</Text>
        </Card>
        <Card align="center" variant="outline" minW="sm">
          <Text fontSize="xl">Card 2</Text>
        </Card>
        <Card align="center" variant="outline" minW="sm">
          <Text fontSize="xl">Card 3</Text>
        </Card>
      </HStack>
    </Box>
  );
}
