import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { Form } from 'components/FeedbackPop/Form';
import {
  ChakraProvider,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
} from '@chakra-ui/react';

// mock axios for testing purposes
vi.mock('axios');

describe('Form Component', () => {
  test('renders email input and feedback textarea', async () => {
    render(
      <ChakraProvider>
        <Popover>
          <PopoverTrigger>
            <Button>Feedback</Button>
          </PopoverTrigger>
          <PopoverContent>
            <Form feedbackType="bug" onBack={() => {}} onSubmit={() => {}} />
          </PopoverContent>
        </Popover>
      </ChakraProvider>
    );
    const button = screen.getByText('Feedback');
    fireEvent.click(button);
    const emailInput = await screen.findByPlaceholderText(
      'Enter email (optional)'
    );
    expect(emailInput).toBeVisible();
    const feedbackTextarea = screen.getByPlaceholderText('Enter your feedback');
    expect(feedbackTextarea).toBeVisible();
  });

  //   test('shows error message on feedback submit error', async () => {
  //     vi.clearAllMocks();
  //     vi.fn().mockRejectedValueOnce(new Error('Some error'));
  //     render(
  //       <ChakraProvider>
  //         <Popover>
  //           <PopoverTrigger>
  //             <Button>Feedback</Button>
  //           </PopoverTrigger>
  //           <PopoverContent>
  //             <Form feedbackType="bug" onBack={() => {}} onSubmit={() => {}} />
  //           </PopoverContent>
  //         </Popover>
  //       </ChakraProvider>
  //     );
  //     const submitButton = screen.getByText('Submit');
  //     fireEvent.click(submitButton);
  //     const errorMessage = await screen.findByText(
  //       'Oops! There was an error submitting your feedback.'
  //     );
  //     expect(errorMessage).toBeInTheDocument();
  //   });

  //   test('calls onSubmit after successful feedback submission', async () => {
  //     axios.post.mockResolvedValueOnce({});
  //     const handleSubmit = jest.fn();
  //     render(<Form onBack={() => {}} onSubmit={handleSubmit} />);
  //     const submitButton = screen.getByText('Submit');
  //     fireEvent.click(submitButton);
  //     await waitFor(() => {
  //       expect(handleSubmit).toHaveBeenCalled();
  //     });
  //   });
});
