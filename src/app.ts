import cors from 'cors';
import createDebug from 'debug';
import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import { animalRouter } from './router/animal.router.js';

const debug = createDebug('W6E:App');

export const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.static('public'));

// Middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  debug('Soy un Middleware');
  next();
});

app.get('/', (req: Request, res: Response) => {
  debug('Hola mundo de Express');
  res.write('<h1>Hola Mundo de Express</h1>');
  res.end();
});

app.use('/animals', animalRouter);
