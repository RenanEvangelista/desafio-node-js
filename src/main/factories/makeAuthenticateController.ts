import { Controller } from '@/infra/http/contracts';

import FakeUsersRepository from '@/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '@/providers/HashProvider/fakes/FakeHashProvider';
import AuthenticateUserService from '@/services/AuthenticateUserService';
import AuthenticateUsersController from '@/infra/http/controllers/AuthenticateUsersController';
import { SignInValidator } from '@/validation/SignInValidator';

export const makeAuthenticateUsersController = (): Controller => {
  const usersRepository = new FakeUsersRepository();
  const hashProvider = new FakeHashProvider();
  const authenticateUserService = new AuthenticateUserService(
    usersRepository,
    hashProvider,
  );
  const createUserValidator = new SignInValidator();
  const controller = new AuthenticateUsersController(
    authenticateUserService,
    createUserValidator,
  );

  return controller;
};
