import { WithId } from '../types/id.js';
import { User } from './user.js';

export type AnimalNoId = {
  title: string;
  author: User;
  isImportant: boolean;
};

export type Note = WithId & AnimalNoId;