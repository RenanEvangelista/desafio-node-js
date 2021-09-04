import { Router } from 'express';
import { adaptRoute } from '../adapters/expressRouteAdapter';
import { makeAuthenticateUsersController } from '../factories/makeAuthenticateController';

export default (router: Router): void => {
  router.post('/sessions', adaptRoute(makeAuthenticateUsersController()));
};
