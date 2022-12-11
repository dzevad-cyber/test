import { User } from './models/user.model.js';
import { dbConnect } from './services/db-service/db.service.js';
import express from 'express';
import mainRouter from './api/api-v1/api.v1.js';
import morgan from 'morgan';

dbConnect();

const app = express();

// global middleware
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use(mainRouter);

app.use((err, req, res, next) => {
  res.status(500).json({
    status: 'fail',
    data: {
      msg: 'Server error',
      error: err,
    },
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
