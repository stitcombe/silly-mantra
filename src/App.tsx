import React, { useState } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import FeedbackPop from 'components/FeedbackPop';
import Home from 'pages/Home';
import Header from 'layout/header';
import { Hero } from 'pages/Hero';

function App() {
  const [showFeedback, setShowFeedback] = useState(false);

  const setFeedback = () => {
    setShowFeedback((prevShowFeedback) => !prevShowFeedback);
  };

  return (
    <ChakraProvider>
      <Box width="100vw" minWidth="20em">
        <Header />
        <Hero />
        <Home toggleFeedback={setFeedback} />
        {showFeedback ? <FeedbackPop /> : null}
      </Box>
    </ChakraProvider>
  );
}

export default App;
