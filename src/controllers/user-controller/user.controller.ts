import { create } from '../../services/user-service/user.service.js';
import { User } from '../../models/user.model.js';
import { RequestHandler } from 'express';
import { handleAsync } from '../../helpers/handleAsync.js';

export const createUser = handleAsync(async (req, res, next) => {
  const user = await create(User, req.body);

  res.status(200).json({
    status: 'success',
    data: { user },
  });
});
