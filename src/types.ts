/*!
 * express-now
 * Copyright(c) 2023 Phurit D.
 * MIT Licensed
 */

import type { Request, Response } from 'express';

export interface RequestStats {
  total: number;
  last_minute: number;
  last_5mn_avg: number;
  last_15mn_avg: number;
}

export interface ServerInfo {
  status: 'up' | 'down';
  name: string | null;
  version: string | null;
  started_at: string;
  uptime: number;
  uptime_human: string;
  requests: RequestStats;
  env: string | null;
  // db_status: keyof typeof mongoose.STATES;
}

export interface NodeInfo {
  version: string;
  memoryUsage: MemoryInfo;
  uptime: number;
}

export interface SystemInfo {
  loadavg: number[];
  freeMemory: MemoryInfo;
  hostname: string;
  os: string;
}

export interface MemoryInfo {
  value: number;
  unit: 'MiB';
}

export interface ServerStatus {
  server: ServerInfo;
  node: NodeInfo;
  system: SystemInfo;
}

export interface RequestWithServerStatus extends Request {
  stats?: {
    start: Date;
    end: Date;
    responseTime: number;
  };
}

export interface ResponseWithServerStatus extends Omit<Response, 'end'> {
  end: (...args: never[]) => void;
}
