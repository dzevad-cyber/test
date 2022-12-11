import { NextFunction, Request, RequestHandler, Response } from 'express';

type Cb = (req: Request, res: Response, next: NextFunction) => Promise<void>;

export const handleAsync = (cb: Cb) => {
  return (req: any, res: any, next: any) => {
    return cb(req, res, next).catch(next);
  };
};
