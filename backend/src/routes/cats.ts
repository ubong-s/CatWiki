import express from 'express';
import fetch from 'node-fetch';
import { CatProps } from '../types';

const catsRouter = express.Router();

catsRouter.get('/', async (_request, response) => {
   try {
      const res = await fetch(
         `${process.env.BASE_API_URL}/breeds?limit=10&page=0` as string
      );
      const data = await res.json();

      return response.status(200).json(data);
   } catch (error) {
      return response.status(400).json({ error: 'Error fectching' });
   }
});

catsRouter.get('/search', async (request, response) => {
   const { body } = request;

   try {
      const res = await fetch(`${process.env.BASE_API_URL}/breeds` as string);
      const data = await res.json();

      const filteredResults = data.filter((cat: CatProps) =>
         cat.name.toLowerCase().includes('be')
      );

      return response.status(200).json(filteredResults);
   } catch (error) {
      return response.status(400).json({ error: 'Error fectching' });
   }
});

export default catsRouter;
