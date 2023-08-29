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
import axios from 'axios';

export function Form({
  onBack,
  onSubmit,
}: {
  onBack: React.MouseEventHandler<HTMLButtonElement>;
  onSubmit: React.MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleMockSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    setTimeout(() => {
      setIsError(true);
    }, 3000);
  };

  const handleSubmit = async () => {
    // toggle button to laoding
    setIsLoading(true);
    try {
      // prepare data to send
      const data = {
        email,
        feedback,
      };
      // try feedback submit
      await axios.post('http://abc.com/api/feedback', data);
      // close popover and show thanks
      onSubmit();
    } catch (err) {
      // catch errors
      // display error message
      setIsError(true);
    } finally {
      // toggle button state
      setIsLoading(false);
    }
  };

  return (
    <FocusLock returnFocus persistentFocus={false}>
      <PopoverBody>
        <VStack gap={3} mb={3}>
          <FormControl>
            <Input
              type="email"
              placeholder=" Enter email (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <Textarea
              placeholder="Enter your feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </FormControl>
        </VStack>
        {isError ? (
          <Alert status="error" mb={3}>
            <AlertIcon />
            Oops! There was an error submitting your feedback.
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
