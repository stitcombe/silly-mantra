import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';
import FeedbackPop from 'components/FeedbackPop';
import { ChakraProvider } from '@chakra-ui/react';

// Mocking axios for testing purposes
vi.mock('axios');

describe('FeedbackPop Component', () => {
  test('renders Feedback button', () => {
    render(
      <ChakraProvider>
        <FeedbackPop />
      </ChakraProvider>
    );
    const feedbackButton = screen.getByText('Feedback');
    expect(feedbackButton).toBeVisible();
  });

  test('opens popover when Feedback button is clicked', async () => {
    render(
      <ChakraProvider>
        <FeedbackPop />
      </ChakraProvider>
    );
    const feedbackButton = screen.getByText('Feedback');
    fireEvent.click(feedbackButton);
    const popoverHeader = await screen.findByText('What feedback do you have?');
    expect(popoverHeader).toBeVisible();
  });

  test('closes popover when close button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <ChakraProvider>
        <FeedbackPop />
      </ChakraProvider>
    );
    const feedbackButton = screen.getByText('Feedback');
    user.click(feedbackButton);
    const closeButton = await screen.findByLabelText('close');
    user.click(closeButton);
    await waitFor(() => {
      expect(
        screen.queryByText('What feedback do you have?')
      ).not.toBeVisible();
    });
  });
});
