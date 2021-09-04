import { Controller } from '@/infra/http/contracts';

import PgUsersRepository from '@/repositories/implementations/PgUsersRepository';
import BcryptHashProvider from '@/providers/HashProvider/implementations/BcryptHashProvider';
import AuthenticateUserService from '@/services/AuthenticateUserService';
import { AuthenticateUsersController } from '@/infra/http/controllers';
import { SignInValidator } from '@/validation/SignInValidator';

export const makeAuthenticateUsersController = (): Controller => {
  const usersRepository = new PgUsersRepository();
  const hashProvider = new BcryptHashProvider();
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
