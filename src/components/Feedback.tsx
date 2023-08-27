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
import React from 'react';

function Feedback() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Feedback</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverCloseButton color="white" />
        <PopoverHeader background="black" color="white" fontSize={26}>
          Feedback Example
        </PopoverHeader>
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
            <Button>😀 General feedback</Button>
            <Button>💡 I have an idea</Button>
            <Button>🐞 I found a bug</Button>
          </ButtonGroup>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default Feedback;
