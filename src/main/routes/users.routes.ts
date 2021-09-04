import { Router } from 'express';
import { adaptRoute, adaptMiddleware } from '../adapters';
import { makeCreateUserController, makeShowUserController } from '../factories';
import EnsureAuthenticatedMiddleware from '@/infra/http/middlewares/EnsureAuthenticatedMiddleware';

export default (router: Router): void => {
  router.post('/users', adaptRoute(makeCreateUserController()));
  router.get(
    '/user',
    adaptMiddleware(new EnsureAuthenticatedMiddleware()),
    adaptRoute(makeShowUserController()),
  );
};
