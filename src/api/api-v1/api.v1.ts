import express from 'express';
import userRouter from '../../routes/user-routes/user.routes.js';

const mainRouter = express.Router();

mainRouter.use('/api/v1', userRouter);

export default mainRouter;
