import express from 'express';
import fetch from 'node-fetch';
import { CatProps, PhotoProps } from '../types';
import config from '../utils/config';

const catsRouter = express.Router();

catsRouter.get('/', async (_request, response) => {
   try {
      const res = await fetch(
         `${config.BASE_API_URL}/breeds?limit=10&page=0` as string
      );
      const data = await res.json();

      return response.status(200).json(data);
   } catch (error) {
      return response.status(400).json({ error: 'Error fectching' });
   }
});

catsRouter.get('/:id', async (request, response) => {
   const {
      params: { id },
   } = request;

   try {
      const responseBreed = await fetch(
         `${config.BASE_API_URL}/breeds/${id}` as string
      );
      const responsePhotos = await fetch(
         `${config.BASE_API_URL}/images/search?limit=8&breed_ids=${id}&api_key=${config.CAT_API_KEY}` as string
      );

      const breed: CatProps = await responseBreed.json();
      const photos: PhotoProps[] = await responsePhotos.json();

      const mappedPhotos: PhotoProps[] = photos.map((photo) => {
         return {
            id: photo.id,
            url: photo.url,
            width: photo.width,
            height: photo.height,
         };
      });

      if (Object.keys(breed).length < 1) {
         return response.status(404).json({ error: 'No such cat exists' });
      } else {
         return response.status(200).json({ breed, photos: mappedPhotos });
      }
   } catch (error) {
      return response.status(400).json({ error: 'Error fectching' });
   }
});

catsRouter.get('/search', async (request, response) => {
   const { body } = request;

   try {
      const res = await fetch(`${config.BASE_API_URL}/breeds` as string);
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
