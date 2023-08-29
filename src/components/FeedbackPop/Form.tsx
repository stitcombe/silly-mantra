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
  Alert,
  AlertIcon,
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
  const [isError, setIsError] = useState(false);
  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    setTimeout(() => {
      setIsError(true);
    }, 3000);
  };

  const handleSubmit2 = () => {
    setIsLoading(true);
    try {
    } catch (err) {
      toast;
    }
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
        {isError ? (
          <Alert status="error" mb={3}>
            <AlertIcon />
            Oops! There was an error submitting your feedback
          </Alert>
        ) : null}
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
