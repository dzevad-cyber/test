import express from 'express';
import * as userController from '../../controllers/user-controller/user.controller.js';

const userRouter = express.Router();

userRouter
  .route('/users')
  .get(userController.getAllUsers)
  .post(userController.createUser);

export default userRouter;
