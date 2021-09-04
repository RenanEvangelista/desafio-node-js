import AuthenticateUserService from '@/services/AuthenticateUserService';
import Validator from '@/validation/contracts/validator';
import {
  UserNotFoundError,
  InvalidParamError,
  MissingParamError,
} from '@/errors';
import { Controller, HttpResponse } from '../contracts';
import {
  success,
  serverError,
  unauthorized,
  badRequest,
  notfound,
} from '../helpers/http-helpers';

export class AuthenticateUsersController implements Controller {
  constructor(
    private readonly authenticateUserService: AuthenticateUserService,
    private readonly validator: Validator,
  ) {}

  async handle(
    request: AuthenticateUsersController.Request,
  ): Promise<HttpResponse<string>> {
    try {
      this.validator.validate(request);
      const token = await this.authenticateUserService.execute({
        email: request.email,
        password: request.password,
      });
      return success(token);
    } catch (err) {
      if (!(err instanceof Error)) {
        return serverError(new Error());
      }

      switch (err.constructor) {
        case UserNotFoundError:
          return notfound(err);
        case InvalidParamError:
          return unauthorized(err);
        case MissingParamError:
          return badRequest(err);
        default:
          return serverError(err);
      }
    }
  }
}

export namespace AuthenticateUsersController {
  export type Request = {
    email: string;
    password: string;
  };
}
