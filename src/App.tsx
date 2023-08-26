import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Home from './pages/Home';

function App() {
  return (
    <ChakraProvider>
      <Box
        max-width="1280px"
        margin="0 auto"
        padding="2rem"
        text-align="center"
      >
        <Home />
      </Box>
    </ChakraProvider>
  );
}

export default App;
