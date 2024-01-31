import express from 'express';

import { getAllUsers } from '../controllers/users';
import { isAuthenticated } from '../middleware';

export default (router: express.Router): express.Router => {
  router.get('/users', isAuthenticated, getAllUsers);

  return router;
};