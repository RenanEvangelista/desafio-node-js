import { Controller } from '@/infra/http/contracts';

import FakeUsersRepository from '@/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '@/providers/HashProvider/fakes/FakeHashProvider';
import CreateUserService from '@/services/CreateUserService';
import CreateUsersController from '@/infra/http/controllers/CreateUserController';
import { SignUpValidator } from '@/validation/SignUpValidator';

export const makeCreateUserController = (): Controller => {
  const usersRepository = new FakeUsersRepository();
  const hashProvider = new FakeHashProvider();
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
