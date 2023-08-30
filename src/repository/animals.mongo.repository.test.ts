import { AnimalsMongoRepository } from './animals.mongo.repository';
import { AnimalModel } from './animals.mongo.model.js';

jest.mock('./animals.mongo.model.js');

describe('Given the class NotesMongoRepository', () => {
  describe('When we instantiate it and all is OK', () => {
    const mockExec = jest.fn().mockResolvedValue([]);
    AnimalModel.find = jest.fn().mockReturnValue({
      exec: mockExec,
    });

    const repo = new AnimalsMongoRepository();

    test('We should use getAll', async () => {
      const result = await repo.getAll();
      expect(mockExec).toHaveBeenCalled();
      expect(result).toEqual([]);
    });
  });

  describe('When we instantiate it and there are errors', () => {
    const mockExec = jest.fn().mockResolvedValue(null);
    AnimalModel.findById = jest.fn().mockReturnValue({
      exec: mockExec,
    });

    const repo = new AnimalsMongoRepository();

    test('We should get an error if we use getById', () => {
      expect(repo.getById('')).rejects.toThrow();
    });
  });
});