import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Home from './pages/Home';
import FeedbackPop from 'components/FeedbackPop';

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
