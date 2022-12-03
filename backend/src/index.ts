import express from 'express';
import cors from 'cors';
import catsRouter from './routes/cats';
import config from './utils/config';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/cats', catsRouter);

app.listen(config.PORT, () => {
   console.log(`app is listning on port ${config.PORT}`);
});
