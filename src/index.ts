/*!
 * express-now
 * Copyright(c) 2023 Phurit D.
 * MIT Licensed
 */

import os from 'os';
// import mongoose from "mongoose";
import type {
  Express,
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from 'express';
import type {
  NodeInfo,
  RequestStats,
  RequestWithServerStatus,
  ResponseWithServerStatus,
  ServerInfo,
  ServerStatus,
  SystemInfo,
} from './types';
import { sum, average, resetCounter, timeSince } from './utils';

const requests = { total: 0 } as RequestStats;
const requests_per_minute: number[] = Array<number>(60).fill(0);

const uptime_start = new Date();

// Every minute, we reset the oldest entry
setInterval(() => resetCounter(requests_per_minute), 60 * 1000);

/**
 * ### serverStatus
 * Generates a middleware that returns the server status
 *
 * @param {Express} app - Express app instance
 * @returns {RequestHandler} Express middleware
 */
const serverStatus = (app: Express): RequestHandler => {
  const server = { status: 'up' } as ServerInfo;

  try {
    server.name = process.env.npm_package_name ?? null;
    server.version = process.env.npm_package_version ?? null;
  } catch (e) {
    console.error('express-now> Error loading package.json', e);
  }

  // Create a middleware to count requests
  app.use((req: Request, res: Response, next: NextFunction): void => {
    requests.total++;
    const minute = new Date().getMinutes();
    requests_per_minute[minute]++;
    return next();
  });

  const response = (
    req: RequestWithServerStatus,
    res: ResponseWithServerStatus,
    next: NextFunction
  ): void => {
    req.stats = {} as RequestWithServerStatus['stats'];
    if (req.stats) req.stats.start = new Date();

    // decorate response `end` method from express
    const end = res.end;
    res.end = (...args): void => {
      if (req.stats) {
        req.stats.responseTime =
          new Date().getTime() - req.stats.start.getTime();
        // call to original express `res.end()` method
        res.setHeader('X-Response-Time', req.stats.responseTime);
      }
      end.apply(res, args);
    };

    const minute = new Date().getMinutes();
    server.started_at = uptime_start.toISOString();
    server.uptime = Math.round(
      (new Date().getTime() - uptime_start.getTime()) / 1000
    );
    server.uptime_human = timeSince(uptime_start);
    // server.env = env.NODE_ENV;
    // server.db_status = mongoose.STATES[
    //   mongoose.connection.readyState
    // ] as keyof typeof mongoose.STATES;

    const node: NodeInfo = {
      version: process.version,
      memoryUsage: {
        value: Math.round(process.memoryUsage().rss / 1024 / 1024),
        unit: 'MiB',
      },
      uptime: process.uptime(),
    };
    const system: SystemInfo = {
      loadavg: os.loadavg(),
      freeMemory: {
        value: Math.round(os.freemem() / 1024 / 1024),
        unit: 'MiB',
      },
      hostname: os.hostname(),
      os: os.platform(),
    };

    // requests.per_minute = requests_per_minute;
    requests.last_minute = sum(requests_per_minute, minute, 1);
    requests.last_5mn_avg = sum(requests_per_minute, minute, 5);
    requests.last_15mn_avg = average(requests_per_minute, 0, 15);
    server.requests = requests;

    const status: ServerStatus = { server, node, system };

    res.send(status);
  };

  return response;
};

export { serverStatus, timeSince };
export default serverStatus;
