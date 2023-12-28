/* eslint-disable */

import { http, HttpResponse } from 'msw';

const handlers = [
  http.post('https://abc.com/api/feedback', async ({ request }) => {
    const newPost = await request.json();

    return HttpResponse.json(newPost, { status: 201 });
  }),
];

export { handlers };
