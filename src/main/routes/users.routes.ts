import { Router } from 'express';
import { adaptRoute } from '../adapters/expressRouteAdapter';
import { makeCreateUserController } from '../factories/makeCreateUserController';

export default (router: Router): void => {
  router.post('/users', adaptRoute(makeCreateUserController()));
};
