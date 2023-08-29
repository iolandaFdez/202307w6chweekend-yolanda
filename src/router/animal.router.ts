import { Router as createRouter } from 'express';
import { AnimalController } from '../controller/animal.controller.js';
import { AnimalsRepository } from '../repository/animals.repository.js';

const repo = new AnimalsRepository();
const animalController = new AnimalController(repo);

export const animalRouter = createRouter();

animalRouter.get('/', animalController.getAll.bind(animalController));
animalRouter.get('/:id', animalController.getById.bind(animalController));
animalRouter.post('/', animalController.create.bind(animalController));
animalRouter.patch('/:id', animalController.update.bind(animalController));
animalRouter.delete('/:id', animalController.delete.bind(animalController));
