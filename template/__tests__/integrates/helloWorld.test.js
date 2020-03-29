import request from 'supertest';

import app from '../../src/app';

describe('Hello World', () => {
  it('checks if the endpoint is functioning normally', async () => {
    const {
      body: { msg },
      status,
    } = await request(app)
      .get('/helloWorld')
      .send();

    expect(status).toBe(200);
    expect(msg).toBe('Hello World');
  });
});
