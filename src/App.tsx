import React, { useState } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import FeedbackPop from 'components/FeedbackPop';
import Home from 'pages/Home';
import Header from 'layout/Header';
import { Hero } from 'pages/Landing/Hero';
import ArticlesCard from 'pages/Landing/ArticlesCard';

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
        <ArticlesCard />
        <Home toggleFeedback={setFeedback} />
        {showFeedback ? <FeedbackPop /> : null}
      </Box>
    </ChakraProvider>
  );
}

export default App;
