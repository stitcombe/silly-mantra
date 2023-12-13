import React from 'react';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';

export default function Gridy() {
  return (
    <Box pt={10}>
      <Flex direction="column" gap={12}>
        <Grid
          templateColumns={{ base: 'none', md: 'repeat(3, minmax(0,1fr))' }}
          gap={6}
          gridAutoRows="auto"
        >
          <GridItem w="100%" h="10" bg="blue.500" />
          <GridItem w="100%" h="10" bg="blue.500" />
          <GridItem w="100%" h="10" bg="blue.500" />
          <GridItem w="100%" h="10" bg="blue.500" />
          <GridItem w="100%" h="10" bg="blue.500" />
          <GridItem w="100%" h="10" bg="blue.500" />
          <GridItem w="100%" h="10" bg="blue.500" />
          <GridItem w="100%" h="10" bg="blue.500" />
          <GridItem w="100%" h="10" bg="blue.500" />
        </Grid>
      </Flex>
    </Box>
  );
}
