import { Request, Response } from 'express';
import { FilmsMongoRepository } from '../repository/documentals.mongo.repository';
import { FilmsController } from './documentals.controller';

describe('Given the module FilmsControler', () => {
  describe('when we execute its methods and we have a successful answer', () => {
    const mockRepo: DocumentalsMongoRepository = {
      getAll: jest.fn(),
      getById: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };
    const documentalControler = new DocumentalsController(mockRepo);

    test('should call getAll and return data', async () => {
      const mockData = [{ id: '1', name: 'El padrino' }];
      (mockRepo.getAll as jest.Mock).mockResolvedValue(mockData);

      const mockRequest = {} as Request;
      const mockResponse = {
        json: jest.fn(),
      } as unknown as Response;
      const mockNext = jest.fn();

      await filmControler.getAll(mockRequest, mockResponse, mockNext);
      expect(mockRepo.getAll).toHaveBeenCalledWith();
      expect(mockResponse.json).toHaveBeenCalledWith(mockData);
    });

    test('should call getById and return data', async () => {
      const mockData = { id: '1', name: 'El padrino' };
      (mockRepo.getById as jest.Mock).mockResolvedValue(mockData);

      const mockRequest = { params: { id: '1' } } as unknown as Request;
      const mockResponse = {
        json: jest.fn(),
      } as unknown as Response;
      const mockNext = jest.fn();

      await filmControler.getById(mockRequest, mockResponse, mockNext);
      expect(mockRepo.getById).toHaveBeenCalled();
      expect(mockResponse.json).toHaveBeenCalledWith(mockData);
    });

    test('should call create and return data', async () => {
      const mockData = { id: '1', name: 'El padrino' };
      (mockRepo.create as jest.Mock).mockResolvedValue(mockData);

      const mockRequest = {} as Request;
      const mockResponse = {
        json: jest.fn(),
        status: Number,
      } as unknown as Response;
      const mockNext = jest.fn();

      await filmControler.create(mockRequest, mockResponse, mockNext);
      expect(mockRepo.create).toHaveBeenCalled();
      expect(mockResponse.json).toHaveBeenCalledWith(mockData);
    });

    test('should call update and return data', async () => {
      const mockData = { id: '1', name: 'El padrino' };
      (mockRepo.update as jest.Mock).mockResolvedValue(mockData);

      const mockRequest = { params: { id: '1' } } as unknown as Request;
      const mockResponse = {
        json: jest.fn(),
      } as unknown as Response;
      const mockNext = jest.fn();

      await filmControler.update(mockRequest, mockResponse, mockNext);
      expect(mockRepo.update).toHaveBeenCalled();
      expect(mockResponse.json).toHaveBeenCalledWith(mockData);
    });

    test('should call delete and return data', async () => {
      const mockData = {};
      (mockRepo.delete as jest.Mock).mockResolvedValue(mockData);

      const mockRequest = { params: { id: '1' } } as unknown as Request;
      const mockResponse = {
        json: jest.fn(),
        status: Number,
      } as unknown as Response;
      const mockNext = jest.fn();

      await filmControler.delete(mockRequest, mockResponse, mockNext);
      expect(mockRepo.delete).toHaveBeenCalled();
      expect(mockResponse.json).toHaveBeenCalledWith(mockData);
    });
  });
  describe('when we execute its methods and we have a failed answer', () => {
    const mockRepo: FilmsMongoRepository = {
      getAll: jest.fn(),
      getById: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };
    const filmControler = new FilmsController(mockRepo);
    test('should call getAll and next is call ', async () => {
      (mockRepo.getAll as jest.Mock).mockRejectedValue(
        new Error('GetAll Error')
      );
      const filmControler = new FilmsController(mockRepo);
      const mockRequest = {} as Request;
      const mockResponse = {
        json: jest.fn(),
      } as unknown as Response;
      const mockNext = jest.fn();

      await filmControler.getAll(mockRequest, mockResponse, mockNext);
      expect(mockRepo.getAll).toHaveBeenCalledWith();
      expect(mockNext).toHaveBeenCalledWith(new Error('GetAll Error'));
    });

    test('should call getById and next is call ', async () => {
      (mockRepo.getById as jest.Mock).mockRejectedValue(
        new Error('GetAll Error')
      );
      const mockRequest = { params: { id: '1' } } as unknown as Request;
      const mockResponse = {
        json: jest.fn(),
      } as unknown as Response;
      const mockNext = jest.fn();

      await filmControler.getById(mockRequest, mockResponse, mockNext);
      expect(mockRepo.getById).toHaveBeenCalled();
      expect(mockNext).toHaveBeenCalledWith(new Error('GetAll Error'));
    });

    test('should call create and next is call ', async () => {
      (mockRepo.create as jest.Mock).mockRejectedValue(
        new Error('GetAll Error')
      );
      const mockRequest = {} as Request;
      const mockResponse = {
        json: jest.fn(),
      } as unknown as Response;
      const mockNext = jest.fn();

      await filmControler.create(mockRequest, mockResponse, mockNext);
      expect(mockRepo.create).toHaveBeenCalled();
      expect(mockNext).toHaveBeenCalledWith(new Error('GetAll Error'));
    });

    test('should call update and next is call ', async () => {
      (mockRepo.update as jest.Mock).mockRejectedValue(
        new Error('GetAll Error')
      );
      const mockRequest = { params: { id: '1' } } as unknown as Request;
      const mockResponse = {
        json: jest.fn(),
      } as unknown as Response;
      const mockNext = jest.fn();

      await filmControler.update(mockRequest, mockResponse, mockNext);
      expect(mockRepo.update).toHaveBeenCalled();
      expect(mockNext).toHaveBeenCalledWith(new Error('GetAll Error'));
    });

    test('should call delete and next is call ', async () => {
      (mockRepo.delete as jest.Mock).mockRejectedValue(
        new Error('GetAll Error')
      );
      const mockRequest = { params: { id: '1' } } as unknown as Request;
      const mockResponse = {
        json: jest.fn(),
      } as unknown as Response;
      const mockNext = jest.fn();

      await filmControler.delete(mockRequest, mockResponse, mockNext);
      expect(mockRepo.delete).toHaveBeenCalled();
      expect(mockNext).toHaveBeenCalledWith(new Error('GetAll Error'));
    });
  });
});