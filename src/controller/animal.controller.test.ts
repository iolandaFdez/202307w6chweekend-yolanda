import { AnimalController } from './animal.controller.js';
import { AnimalsRepository } from '../repository/animals.repository.js';
import { Request, Response } from 'express';

describe('AnimalController', () => {
  describe('happy path', () => {
    const mockRepo: AnimalsRepository = {
      getAll: jest.fn(),
      getById: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    } as unknown as AnimalsRepository;

    const animalController = new AnimalController(mockRepo);

    test('should call getAll and return data', async () => {
      const mockData = [{ id: '1', name: 'Lion' }];
      (mockRepo.getAll as jest.Mock).mockResolvedValue(mockData);

      const mockRequest = {} as Request;
      const mockResponse = {
        json: jest.fn(),
      } as unknown as Response;
      const mockNext = jest.fn();

      await animalController.getAll(mockRequest, mockResponse, mockNext);
      expect(mockRepo.getAll).toHaveBeenCalledWith();
      expect(mockResponse.json).toHaveBeenCalledWith(mockData);
    });
  });

  describe('errors', () => {
    const mockRepo: AnimalsRepository = {
      getAll: jest.fn().mockRejectedValue(new Error('GetAll Error')),
      getById: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    } as unknown as AnimalsRepository;

    const animalController = new AnimalController(mockRepo);

    test('should call getAll and next is call ', async () => {
      const mockRequest = {} as Request;
      const mockResponse = {
        json: jest.fn(),
      } as unknown as Response;
      const mockNext = jest.fn();

      await animalController.getAll(mockRequest, mockResponse, mockNext);
      expect(mockRepo.getAll).toHaveBeenCalledWith();
      expect(mockNext).toHaveBeenCalledWith(new Error('GetAll Error'));
    });
  });
});
