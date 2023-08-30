import { Schema, model } from 'mongoose';
import { Note } from '../entities/note';


const noteSchema = new Schema<Note>({
  name: {
    type: String,
    required: true,
    unique: true,
  },                            
  scienceName: {
    type: String,
    required: true,
  },
  zone: {
    type: [String], 
    required: true,
    unique: true,
  },
  family: {
    type: String,
    required: true,
    unique: true,
  },
  diet: {
    type: [String],
    required: false,
    
  },
});

export const NoteModel = model('Note', noteSchema, 'notes');
