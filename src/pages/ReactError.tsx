import React from 'react';
import { Box, Button, HStack, Heading, Text } from '@chakra-ui/react';

function ReactError(): JSX.Element {
  return (
    <Box
      marginTop={40}
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Heading
        as="h1"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="9xl"
        fontWeight="extrabold"
      >
        Oh No!
      </Heading>
      <Text fontSize="large">
        Something went wrong while rendering the app.
      </Text>
      <HStack spacing={6} marginTop={6}>
        <Button colorScheme="purple" size="lg" variant="solid">
          Submit Feedback
        </Button>
        <Button colorScheme="purple" size="lg" variant="outline">
          Go Back Home
        </Button>
      </HStack>
    </Box>
  );
}

export default ReactError;
