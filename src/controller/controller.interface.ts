/* eslint-disable no-unused-vars */
import { Response, Request, NextFunction } from 'express';
import { AnimalsRepository } from '../repository/animals.repository.js';
import { AnimalController } from './animal.controller.js';
import { Repository } from '../repository/repository.js';

export interface ControllerStructure {
  getAll(req: Request, res: Response, next: NextFunction): Promise<void>;
  getById(req: Request, res: Response, next: NextFunction): Promise<void>;
  create(req: Request, res: Response, next: NextFunction): Promise<void>;
  update(req: Request, res: Response, next: NextFunction): Promise<void>;
  delete(req: Request, res: Response, next: NextFunction): Promise<void>;
}


export abstract class Controller<T extends { id: string }> {
  constructor(protected repo: Repository<T>) {}
    async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.repo.getAll();
      res.json(data);
    } catch (error) {
      next(error)

    }
 } 

async getById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const data = await this.repo.getById(id);
    res.json(data);
  } catch (error) {
    next(error)
  }
}

async create(req: Request, res: Response, next: NextFunction) {
  try {
    const finalAnimal = await this.repo.create(req.body);
    res.status(201)
    res.json(finalAnimal);
  } catch (error) {
    next(error)
    
  }
}

async update(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const finalTask = await this.repo.update(id, req.body);
    res.json(finalTask);
  } catch (error) {
    next(error);
  }
}

async delete(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    await this.repo.delete(id);
    res.status(204);
    res.json({});
  } catch (error) {
    next(error);
  }
 }
}