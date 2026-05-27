import express from 'express';
import mongoose from 'mongoose';
import config from './config.js';
import { configureRouter } from './api/router.js';
import './dependencies.js';
import errorMiddleware from './middlewares/errors_middleware.js';
import checkAuthorizationTokenMiddleware from './middlewares/check_authorization_token_middleware.js';
import logMiddleware from './middlewares/log_middleware.js';
//import bcrypt from 'bcrypt';

// console.log('Hash de 1234:', await bcrypt.hash('1234', 10));

const app = express();

app.use(express.json());
app.use(checkAuthorizationTokenMiddleware);
app.use(logMiddleware);

configureRouter(app);

app.use(errorMiddleware);

try {
  await mongoose.connect(config.dbConnection);
  console.log('Conectado a MongoDB');

  app.listen(config.port, () => {
    console.log(`Server escuchando en http://localhost:${config.port}`);
  });
} catch (error) {
  console.error('Error connecting to MongoDB:', error);
}
