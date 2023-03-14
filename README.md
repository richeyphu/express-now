# express-now

[![NPM version](https://img.shields.io/npm/v/express-now.svg)](https://www.npmjs.com/package/express-now)
[![NPM total downloads](https://img.shields.io/npm/dt/express-now)](https://npmjs.org/package/express-now)
[![install size](https://packagephobia.com/badge?p=express-now)](https://packagephobia.com/result?p=express-now)
[![minified size](https://img.shields.io/bundlephobia/min/express-now)](https://bundlephobia.com/package/express-now)

Get a quick current status overview of an Express server at a glance.

> This project was inspired by [`express-server-status`](https://github.com/OpenCollective/express-server-status), rewritten in TypeScript and 💙.

## Install

```sh
$ npm i express-now
# or
$ yarn add express-now
# or
$ pnpm add express-now
```

## Usage

```js
import express from 'express';
const app = express();

// Import the middleware
import serverStatus from 'express-now';

// Use this middleware before any other routes
app.use('/status', serverStatus(app));
```

```js
// Or use `require` for importing (CommonJS)
const { serverStatus } = require('express-now');
```

## Example

### Request

```sh
$ curl localhost:3000/status
```

### Response

```json
{"server":{"status":"up","name":"express-server","version":"1.0.0","started_at":"2023-03-14T00:35:08.334Z","uptime":299,"uptime_human":"5 minutes ago","env":"development","requests":{"total":250,"last_minute":77,"last_5mn_avg":237,"last_15mn_avg":4}},"node":{"version":"v18.14.0","memoryUsage":{"value":45,"unit":"MiB"},"uptime":301.320525357},"system":{"loadavg":[4.80859375,8.017578125,6.0859375],"freeMemory":{"value":377,"unit":"MiB"},"hostname":"Phurit-MBP","os":"darwin"}}
```

## License

Licensed under the [MIT License](LICENSE).
