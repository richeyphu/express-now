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

// Use this middleware before other routes
app.use('/status', serverStatus(app));
```

## License

Licensed under the [MIT License](LICENSE).
