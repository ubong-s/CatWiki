import { Request, Response } from 'express';
import { CatProps, PhotoProps } from '../types';
import fetch from 'node-fetch';
import config from '../utils/config';
import helpers from '../utils/helpers';

const getSingleCat = async (request: Request, response: Response) => {
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
      return response.status(400).json({ error: 'Error fetching' });
   }
};

const searchCats = async (request: Request, response: Response) => {
   const {
      body: { query },
   } = request;

   try {
      const res = await fetch(`${config.BASE_API_URL}/breeds` as string);
      const data = await res.json();

      const filteredResults = data.filter((cat: CatProps) =>
         cat.name.toLowerCase().includes(query.toLowerCase())
      );

      return response.status(200).json(filteredResults);
   } catch (error) {
      return response.status(400).json({ error: 'Error fectching' });
   }
};

const mostSearched = async (_request: Request, response: Response) => {
   try {
      const res = await fetch(
         `${config.BASE_API_URL}/breeds?limit=10&page=0` as string
      );
      const data = await res.json();

      return response.status(200).json(helpers.shuffleCats(data));
   } catch (error) {
      return response.status(400).json({ error: 'Error fectching' });
   }
};

export default { getSingleCat, searchCats, mostSearched };
