import { Controller } from '@/infra/http/contracts';

import PgUsersRepository from '@/repositories/implementations/PgUsersRepository';
import BcryptHashProvider from '@/providers/HashProvider/implementations/BcryptHashProvider';
import CreateUserService from '@/services/CreateUserService';
import { CreateUsersController } from '@/infra/http/controllers';
import { SignUpValidator } from '@/validation/SignUpValidator';

export const makeCreateUserController = (): Controller => {
  const usersRepository = new PgUsersRepository();
  const hashProvider = new BcryptHashProvider();
  const createUserService = new CreateUserService(
    usersRepository,
    hashProvider,
  );
  const createUserValidator = new SignUpValidator();
  const controller = new CreateUsersController(
    createUserService,
    createUserValidator,
  );

  return controller;
};
