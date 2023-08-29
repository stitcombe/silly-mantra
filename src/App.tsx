import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import FeedbackPop from 'components/FeedbackPop';
import Home from 'pages/Home';

function App() {
  return (
    <ChakraProvider>
      <Box maxWidth="1280px" margin="0 auto" padding="2rem" textAlign="center">
        <Home />
        <FeedbackPop />
      </Box>
    </ChakraProvider>
  );
}

export default App;
