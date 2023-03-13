import express, { Express } from 'express';
import supertest, { SuperTest, Test } from 'supertest';

import { serverStatus } from '../dist';

const app: Express = express();
app.use('/status', serverStatus(app));

const request: SuperTest<Test> = supertest(app);

describe('serverStatus', () => {
  it('should response the GET method', async () => {
    const response = await request.get('/status');
    try {
      expect(response.statusCode).toBe(200);
    } catch (error) {
      expect(response.statusCode).toBe(401);
    }
  });

  it('should response the `server.status` as `up`', async () => {
    const response = await request.get('/status');
    try {
      expect(response.body.server.status).toBe('up');
    } catch (error) {
      expect(response.statusCode).toBe(401);
    }
  });

  it('should response the `server.env as `test`', async () => {
    const response = await request.get('/status');
    try {
      expect(response.body.server.env).toBe('test');
    } catch (error) {
      expect(response.statusCode).toBe(401);
    }
  });
});
