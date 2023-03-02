[![NPM version](https://www.npmjs.com/package/express-now.svg)](https://www.npmjs.com/package/express-now)
# express-now

Get current status overview of an Express server

## Usage

```js
import express from 'express';
const app = express();

// Import middleware
import serverStatus from 'express-now';

// Use this middleware before other routes
app.use('/status', serverStatus(app));
```

## License

Licensed under the [MIT License](LICENSE).
