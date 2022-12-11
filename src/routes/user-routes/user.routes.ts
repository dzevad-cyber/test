import express from 'express';
import { createUser } from '../../controllers/user-controller/user.controller.js';

const userRouter = express.Router();

userRouter.route('/users').post(createUser);

export default userRouter;
