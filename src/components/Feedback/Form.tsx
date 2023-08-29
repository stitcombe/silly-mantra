import React from 'react';
import {
  Button,
  PopoverBody,
  Input,
  VStack,
  Textarea,
  Flex,
  Spacer,
  FormControl,
} from '@chakra-ui/react';
import FocusLock from 'react-focus-lock';

export default function Form({
  onBackClick,
  onSubmit,
}: {
  onBackClick: React.MouseEventHandler<HTMLButtonElement>;
  onSubmit: React.MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
  return (
    <FocusLock returnFocus persistentFocus={false}>
      <PopoverBody>
        <VStack gap={3} mb={3}>
          <FormControl>
            <Input type="email" placeholder=" Enter email (optional)" />
          </FormControl>
          <FormControl isRequired>
            <Textarea placeholder="Enter your feedback" />
          </FormControl>
        </VStack>
        <Flex>
          <Button onClick={onBackClick}>Back</Button>
          <Spacer />
          <Button onClick={onSubmit} colorScheme="teal">
            Submit
          </Button>
        </Flex>
      </PopoverBody>
    </FocusLock>
  );
}
