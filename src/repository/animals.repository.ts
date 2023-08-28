import { readFile, writeFile } from 'fs/promises';
// eslint-disable-next-line no-unused-vars
import { AnimalsId, AnimalsNoId } from '../entities/animals.notId';
import { Animals } from '../model/animals';
import createDebug from 'debug';
import { HttpError } from '../types/error';
import { Repository } from './repository';

const debug = createDebug('W6E:Repo:AnimalsFsRepo');

export class AnimalsRepository implements Repository<Animals> {
  private file: string;
  constructor() {
    this.file = 'data.json';
    debug('Instantiated');
  }

  async getAll(): Promise<Animals[]> {
    const data: Animals[] = JSON.parse(
      await readFile(this.file, { encoding: 'utf-8' })
    );
    return data;
  }

  async getById(id: Animals['id']): Promise<Animals> {
    const data: Animals[] = await this.getAll();
    const item = data.find((item) => item.id === id);
    if (!item)
      throw new HttpError(404, 'Not Found', 'Animal not found in file system', {
        cause: 'Trying getById',
      });
    return item;
  }

  async create(newData: AnimalsNoId): Promise<Animals> {
    const newAnimal: Animals = {
      ...newData,
      id: crypto.randomUUID(),
      animalName: '',
      scienceName: '',
      zone: [],
      family: '',
      diet: [],
    };
    const data: Animals[] = await this.getAll();
    data.push(newAnimal);
    await this.saveOnFile(data);
    return newAnimal;
  }

  async update(id: Animals['id'], item: Partial<Animals>): Promise<Animals> {
    const data: Animals[] = await this.getAll();
    const index = data.findIndex((item) => item.id === id);
    if (index < 0)
      throw new HttpError(404, 'Not Found', 'Animal not found in file system', {
        cause: 'Trying update',
      });
    data[index] = { ...data[index], ...item };
    await this.saveOnFile(data);
    return data[index];
  }

  async delete(id: Animals['id']): Promise<void> {
    const data: Animals[] = await this.getAll();
    const index = data.findIndex((item) => item.id === id);
    if (index < 0)
      throw new HttpError(404, 'Not Found', 'Animal not found in file system', {
        cause: 'Trying delete',
      });
    data.splice(index, 1);
    await this.saveOnFile(data);
  }

  private async saveOnFile(data: Animals[]) {
    await writeFile(this.file, JSON.stringify(data), {
      encoding: 'utf-8',
    });
  }
}
