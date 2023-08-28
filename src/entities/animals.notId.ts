import { WithId } from './animals.Id';

export type NoteNoId = {
  title: string;
  author: string;
  isImportant: boolean;
};

export type Note = WithId & NoteNoId;
