import express, { Express } from 'express';
import supertest, { SuperTest, Test } from 'supertest';

import { serverStatus } from '../dist';

const app: Express = express();
const route = '/status';
app.use(route, serverStatus(app));

const request: SuperTest<Test> = supertest(app);

describe('serverStatus', () => {
  it('should response the GET method', async () => {
    const response = await request.get(route);
    try {
      expect(response.statusCode).toBe(200);
    } catch (error) {
      expect(response.statusCode).toBe(401);
    }
  });

  it('should response the `server.status` as `up`', async () => {
    const response = await request.get(route);
    try {
      expect(response.body.server.status).toBe('up');
    } catch (error) {
      expect(response.statusCode).toBe(401);
    }
  });

  it('should response the `server.env` as `test`', async () => {
    const response = await request.get(route);
    try {
      expect(response.body.server.env).toBe('test');
    } catch (error) {
      expect(response.statusCode).toBe(401);
    }
  });

  it('should response the `server.name` as in `package.json`', async () => {
    const response = await request.get(route);
    const packageJson = await import('../package.json');
    const serverName = packageJson.name;
    try {
      expect(response.body.server.name).toBe(serverName);
    } catch (error) {
      expect(response.statusCode).toBe(401);
    }
  });

  it('should response the `server.version` as in `package.json`', async () => {
    const response = await request.get(route);
    const packageJson = await import('../package.json');
    const serverVersion = packageJson.version;
    try {
      expect(response.body.server.version).toBe(serverVersion);
    } catch (error) {
      expect(response.statusCode).toBe(401);
    }
  });
});
