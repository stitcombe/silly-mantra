import React, { useState } from 'react';
import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Heading,
  ButtonGroup,
} from '@chakra-ui/react';
import Submitted from './Feedback/Submitted';

function Feedback() {
  const [showSubmitted, setShowSubmitted] = useState(false);
  const [popHeader, setPopHeader] = useState('Feedback Example');

  const toggleSubmitted = () => {
    setShowSubmitted(true);
    setPopHeader('😀 General feedback');
  };

  const handleStartOver = () => {
    setShowSubmitted(false);
    setPopHeader('Feedback Example');
  };

  return (
    <Popover isLazy placement="top-end">
      <PopoverTrigger>
        <Button>Feedback</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverCloseButton color="white" />
        <PopoverHeader background="black" color="white" fontSize={26}>
          {popHeader}
        </PopoverHeader>
        {showSubmitted ? (
          <Submitted onStartOver={handleStartOver} />
        ) : (
          <PopoverBody>
            <Heading as="h2" size="sm" margin={2}>
              What feedback do you have?
            </Heading>
            <ButtonGroup
              flexDirection="column"
              alignContent="center"
              variant="ghost"
              spacing={2}
            >
              <Button onClick={toggleSubmitted}>😀 General feedback</Button>
              <Button>💡 I have an idea</Button>
              <Button>🐞 I found a bug</Button>
            </ButtonGroup>
          </PopoverBody>
        )}
      </PopoverContent>
    </Popover>
  );
}

export default Feedback;
