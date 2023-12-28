import React from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

function NotFound(): JSX.Element {
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
        404
      </Heading>
      <Text align="center" fontSize="large">
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </Text>
      <Button marginTop={6} colorScheme="purple" size="lg" variant="outline">
        Go Back Home
      </Button>
    </Box>
  );
}

export default NotFound;
