import { AnimalController } from './animal.controller.js';
import { AnimalsRepository } from '../repository/animals.repository.js';
import { Request, Response, NextFunction } from 'express';

describe('AnimalController', () => {
  let animalController: AnimalController;
  describe('getAll', () => {
    const mockRepo: AnimalsRepository = {
      getAll: jest.fn(),
      getById: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    animalController = new AnimalController(mockRepo);

    it('should call getAll and return data', async () => {
      const mockData = [{ id: '1', animalName: 'Lion' }];
      mockRepo.getAll.mockResolvedValue(mockData);

      const mockRequest = {} as Request;
      const mockResponse = {} as Response;
      const mockNext = {} as NextFunction;

      await animalController.getAll(mockRequest, mockResponse, mockNext);

      expect(mockRepo.getAll).toHaveBeenCalledWith();

      expect(mockResponse.json).toHaveBeenCalledWith(mockData);
    });
  });
});
