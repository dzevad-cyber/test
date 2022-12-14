import { User } from '../../models/user.model.js';
import { handleAsync } from '../../helpers/handleAsync.js';
import { createOne, getAll } from '../../services/crud-service/crud.service.js';

export const createUser = handleAsync(async (req, res, next) => {
  const user = await createOne(User, req.body);

  res.status(200).json({
    status: 'success',
    data: { user },
  });
});

export const getAllUsers = handleAsync(async (req, res, next) => {
  const users = await getAll(User);

  console.log('users ', users);

  res.status(200).json({
    status: 'success',
    count: users.length,
    data: { users },
  });
});
