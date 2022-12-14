import { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error({ ...err });

  res.status(500).json({
    status: 'fail',
    data: {
      msg: 'Server error',
      error: err,
    },
  });
};
