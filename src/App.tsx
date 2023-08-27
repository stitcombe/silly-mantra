import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Home from './pages/Home';
import Feedback from './components/Feedback';

function App() {
  return (
    <ChakraProvider>
      <Box maxWidth="1280px" margin="0 auto" padding="2rem" textAlign="center">
        <Home />
        <Feedback />
      </Box>
    </ChakraProvider>
  );
}

export default App;
