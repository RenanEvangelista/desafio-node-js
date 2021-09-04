import { Router } from 'express';
import { adaptRoute } from '../adapters';
import { makeAuthenticateUsersController } from '../factories';

export default (router: Router): void => {
  router.post('/sessions', adaptRoute(makeAuthenticateUsersController()));
};
