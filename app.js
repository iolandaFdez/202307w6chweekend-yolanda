import cors from 'cors';
import createDebug from 'debug';
import express from 'express';
import morgan from 'morgan';
import { animalRouter } from './router/animal.router.js';
import { errorMiddleware } from './middleware/error.middleware.js';
const debug = createDebug('Animals:App');
export const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.get('/', (req, res) => {
    debug('Wild Animals');
    res.write('<h1>Learning about wild animals</h1>');
    res.end();
});
app.use('/animals', animalRouter);
app.use(errorMiddleware);
