import express from 'express';
import * as url from 'url';
import path from 'path';
import dotenv from 'dotenv';

import { dbConnect } from './services/db-service/db.service.js';
import mainRouter from './api/api-v1/api.v1.js';
import morgan from 'morgan';
import { errorHandler } from './services/error-service/error.handler.service.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

dbConnect();

const app = express();

// global middleware
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use(mainRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
