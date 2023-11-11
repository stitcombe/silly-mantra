import React from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

function NotAuthorized(): JSX.Element {
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
        Nice Try
      </Heading>
      <Text fontSize="large">
        You don&apos;t have permission to access this page.
      </Text>
      <Button marginTop={6} colorScheme="purple" size="lg" variant="outline">
        Request Access
      </Button>
    </Box>
  );
}

export default NotAuthorized;
