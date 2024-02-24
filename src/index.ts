import 'express-async-errors';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import baseRoute from '@common/base-route';
import errorHandler from '@middleware/error.mid';

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.use('/api', baseRoute);

app.use(errorHandler);

app.listen(process.env.PORT ?? 3000, async () => {
  console.log(`Running on port: ${port}`);
});
