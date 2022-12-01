import { config } from 'dotenv';
config();
import express from 'express';
import catsRouter from './routes/cats';

const app = express();
app.use(express.json());

app.use('/api/cats', catsRouter);

app.listen(5000, () => {
   console.log(`app is listning on port 5000`);
});
