import { Controller } from '@/infra/http/contracts';

import PgUsersRepository from '@/repositories/implementations/PgUsersRepository';
import ShowUserService from '@/services/ShowUserService';
import { ShowUserController } from '@/infra/http/controllers';

export const makeShowUserController = (): Controller => {
  const usersRepository = new PgUsersRepository();
  const showUserService = new ShowUserService(usersRepository);
  const controller = new ShowUserController(showUserService);

  return controller;
};
