import React, { useState } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import FeedbackPop from 'components/FeedbackPop';
import Home from 'pages/Home';

function App() {
  const [showFeedback, setShowFeedback] = useState(false);

  const setFeedback = () => {
    setShowFeedback((prevShowFeedback) => !prevShowFeedback);
  };

  return (
    <ChakraProvider>
      <Box maxWidth="1280px" margin="0 auto" padding="2rem" textAlign="center">
        <Home toggleFeedback={setFeedback} />
        {showFeedback ? <FeedbackPop /> : null}
      </Box>
    </ChakraProvider>
  );
}

export default App;
