import React from 'react';
import { Button, PopoverBody, Heading } from '@chakra-ui/react';

export default function Submitted({ onStartOver }) {
  return (
    <PopoverBody>
      <Heading as="h2" size="sm" margin={2}>
        Thanks for submitting your feedback!
      </Heading>
      <Button onClick={() => onStartOver()}>Start Over</Button>
    </PopoverBody>
  );
}
