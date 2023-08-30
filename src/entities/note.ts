import { AnimalsId, AnimalsNoId } from './animals.Id';

export type NoteNoId = {
    name: string;
    scienceName: string;
    zone: [string];
    family: string;
    diet: [string];
};

export type Note = AnimalsId & AnimalsNoId;