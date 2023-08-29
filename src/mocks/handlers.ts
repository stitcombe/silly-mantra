/* eslint-disable */

import { rest } from 'msw';

const handlers = [
  rest.post('http://abc.com/api/feedback', async (req, res, ctx) => {
    // Simulate a 2-second delay before responding
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return res(
      ctx.status(200),
      ctx.json({ message: 'Feedback submitted successfully' })
    );
  }),
];

export { handlers };
