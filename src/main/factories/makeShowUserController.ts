import { Controller } from '@/infra/http/contracts';

import FakeUsersRepository from '@/repositories/fakes/FakeUsersRepository';
import ShowUserService from '@/services/ShowUserService';
import ShowUserController from '@/infra/http/controllers/ShowUserController';

export const makeShowUserController = (): Controller => {
  const usersRepository = new FakeUsersRepository();
  const showUserService = new ShowUserService(usersRepository);
  const controller = new ShowUserController(showUserService);

  return controller;
};
