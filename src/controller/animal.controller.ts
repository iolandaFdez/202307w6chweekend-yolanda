import { readFile, writeFile } from 'fs/promises';

import { Request, Response } from 'express';
import { Animals } from '../model/animals';

export class AnimalController {
  async getAll(req: Request, res: Response) {
    const data = JSON.parse(await readFile('data.json', { encoding: 'utf-8' }));
    res.json(data);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const data: any[] = JSON.parse(
      await readFile('data.json', { encoding: 'utf-8' })
    );
    const item = data.filter((item) => item.id === id);
    res.json(item);
  }

  async create(req: Request, res: Response) {
    const newData = req.body;
    newData.id = crypto.randomUUID();
    const data: any[] = JSON.parse(
      await readFile('data.json', { encoding: 'utf-8' })
    );
    data.push(newData);

    await writeFile('data.json', JSON.stringify(data), { encoding: 'utf-8' });

    res.json(newData);
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const newData = req.body;
      const data: Animals[] = JSON.parse(
        await readFile('data.json', { encoding: 'utf-8' })
      );
      const updatedData = data.map((item) => (item.id === id ? newData : item));
      res.json(newData);
      await writeFile('data.json', JSON.stringify(updatedData), {
        encoding: 'utf-8',
      });
    } catch (error) {
      console.error('Error reading animals', error);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data: Animals[] = JSON.parse(
        await readFile('data.json', { encoding: 'utf-8' })
      );
      const updatedData = data.filter((item) => item.id !== id);
      await writeFile('data.json', JSON.stringify(updatedData), {
        encoding: 'utf-8',
      });
      res.json(updatedData);
    } catch (error) {
      console.error('Error loading animals', error);
    }
  }
}
