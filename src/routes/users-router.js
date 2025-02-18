import express from 'express';
import { getUsers } from '../resolvers/users/get-users';
import { createUser } from '../resolvers/users/create-user';

export const usersRouter = express.Router();