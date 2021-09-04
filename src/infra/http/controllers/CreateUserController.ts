import Validator from '@/validation/contracts/validator';
import { Controller, HttpResponse } from '../contracts';
import { UserCreatedViewModel } from '../view-models';

import { success, serverError, badRequest } from '../helpers/http-helpers';
import {
  EmailInUseError,
  InvalidParamError,
  MissingParamError,
  InvalidParamTypeError,
} from '@/errors';

import CreateUserService from '@/services/CreateUserService';

class CreateUsersController implements Controller {
  constructor(
    private readonly createUsersService: CreateUserService,
    private readonly validator: Validator,
  ) {}

  async handle(
    request: CreateUsersController.Request,
  ): Promise<HttpResponse<UserCreatedViewModel>> {
    try {
      this.validator.validate(request);
      const user = await this.createUsersService.execute(request);
      const viewModel = UserCreatedViewModel.map(user);
      return success(viewModel);
    } catch (err) {
      if (!(err instanceof Error)) {
        return serverError(new Error());
      }

      switch (err.constructor) {
        case InvalidParamTypeError:
        case EmailInUseError:
        case InvalidParamError:
        case MissingParamError:
          return badRequest(err);
        default:
          return serverError(err);
      }
    }
  }
}

export namespace CreateUsersController {
  type Telephone = {
    number: number;
    area_code: number;
  };

  export type Request = {
    name: string;
    email: string;
    password: string;
    telephones: Telephone[];
  };
}

export default CreateUsersController;
