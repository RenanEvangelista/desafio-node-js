import { Router } from 'express';
import { adaptRoute, adaptMiddleware } from '../adapters';
import {
  makeAuthenticateUsersController,
  makeShowUserController,
} from '../factories';

import EnsureAuthenticatedMiddleware from '@/infra/http/middlewares/EnsureAuthenticatedMiddleware';

export default (router: Router): void => {
  router.post('/sessions', adaptRoute(makeAuthenticateUsersController()));
  router.get(
    '/user',
    adaptMiddleware(new EnsureAuthenticatedMiddleware()),
    adaptRoute(makeShowUserController()),
  );
};
