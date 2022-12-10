import express from 'express';

const mainRouter = express.Router();

const testRouter = express.Router();

testRouter.route('/').get((req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: { msg: 'success' },
  });
});

mainRouter.use('/api/v1', testRouter);

export default mainRouter;
