import express, { Express } from 'express';
import { serverStatus } from '../dist';

const PORT = 3000;
const app: Express = express();

app.use('/status', serverStatus(app));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Listening: http://localhost:${PORT}`);
});
