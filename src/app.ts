import { connect } from './services/db/db.ts';
import express from 'express';
import mainRouter from './api/api-v1/api.v1.js';

connect();

const app = express();

app.use(mainRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
