import { Router as createRouter } from 'express';
import { AnimalController } from '../controller/animal.controller.js';

const animalController = new AnimalController();
export const animalRouter = createRouter();

animalRouter.get('/', animalController.getAll.bind(animalController));
animalRouter.get('/:id', animalController.getById.bind(animalController));
animalRouter.post('/', animalController.create.bind(animalController));
animalRouter.patch('/:id', animalController.update.bind(animalController));
animalRouter.delete('/:id', animalController.delete.bind(animalController));
