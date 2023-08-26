import 'dotenv/config';

import { createServer } from 'http';
import { app } from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});

const server = createServer((req, res) => {
  console.log('Hola mundo');
  res.write('<h1>Hola Mundo</h1>');
  res.end();
});

server.listen(PORT);

server.on('listening', () => {
  console.log(`Listening on port ${PORT}`);
});

server.on('error', (error) => {
  console.log(`Error ${error.message}`);
});
