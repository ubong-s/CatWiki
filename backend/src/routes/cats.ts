import express from 'express';

import catsController from '../controllers/cats';

const catsRouter = express.Router();

// most Searched
catsRouter.get('/', catsController.mostSearched);

// Get Single Breed
catsRouter.get('/:id', catsController.getSingleCat);

// Search Cats
catsRouter.post('/search', catsController.searchCats);

export default catsRouter;
