import React, { useState } from 'react';
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

export function Form({
  onBack,
  onSubmit,
}: {
  onBack: React.MouseEventHandler<HTMLButtonElement>;
  onSubmit: React.MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    setTimeout(() => {
      onSubmit();
    }, 3000);
  };

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
          <Button onClick={onBack}>Back</Button>
          <Spacer />
          <Button
            onClick={handleSubmit}
            isLoading={isLoading}
            colorScheme="teal"
          >
            Submit
          </Button>
        </Flex>
      </PopoverBody>
    </FocusLock>
  );
}
