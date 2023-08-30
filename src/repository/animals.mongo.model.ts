

import { Schema, model } from 'mongoose';
import { Animals } from '../entities/animals.Id.js';

const animalSchema = new Schema<Animals>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  isImportant: {
    type: Boolean,
    required: true,
    default: false,
  },
});

animalSchema.set('toJSON', {
  transform(_document: any, returnedObject: { id: any; _id: any; __v: any; passwd: any; }): void {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwd;
  },
});

export const AnimalModel = model('Animal', animalSchema, 'animals');
