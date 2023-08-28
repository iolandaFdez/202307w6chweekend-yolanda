/* eslint-disable no-unused-vars */
import { Response, Request, NextFunction } from 'express';
import { AnimalsRepository } from '../repository/animals.repository.js';
import { AnimalController } from './animal.controller.js';

export interface ControllerStructure {
  getAll(req: Request, res: Response, next: NextFunction): Promise<void>;
  getById(req: Request, res: Response, next: NextFunction): Promise<void>;
  create(req: Request, res: Response, next: NextFunction): Promise<void>;
  update(req: Request, res: Response, next: NextFunction): Promise<void>;
  delete(req: Request, res: Response, next: NextFunction): Promise<void>;
}
