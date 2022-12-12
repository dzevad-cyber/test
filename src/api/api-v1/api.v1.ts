import express from 'express';
import financialStatementsRouter from '../../routes/financialStatements-routes/financialStatements.routes.js';
import userRouter from '../../routes/user-routes/user.routes.js';

const mainRouter = express.Router();

mainRouter.use('/api/v1', userRouter);
mainRouter.use('/api/v1', financialStatementsRouter);

export default mainRouter;
