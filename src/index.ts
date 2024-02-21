import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.get('/', (req: any, res: any) => {
    res.send('Hello Wolrd');
});

app.listen(process.env.PORT ?? 3000, async () => {
    console.log(`Running on port: ${process.env.PORT!}`);
});