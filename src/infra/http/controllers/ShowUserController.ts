import ShowUserService from '@/services/ShowUserService';
import { Controller, HttpResponse } from '../contracts';
import {
  success,
  serverError,
  unauthorized,
  badRequest,
} from '../helpers/http-helpers';

import {
  UserNotFoundError,
  InvalidParamError,
  MissingParamError,
} from '@/errors';

import { ShowUserViewModel } from '../view-models';

export class ShowUserController implements Controller {
  constructor(private readonly showUserService: ShowUserService) {}

  async handle(
    request: ShowUserController.Request,
  ): Promise<HttpResponse<ShowUserViewModel>> {
    try {
      const user = await this.showUserService.execute(request.user_id);
      const viewModel = ShowUserViewModel.map(user);
      return success(viewModel);
    } catch (err) {
      if (!(err instanceof Error)) {
        return serverError(new Error());
      }

      switch (err.constructor) {
        case UserNotFoundError:
          return unauthorized(err);
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

export namespace ShowUserController {
  export type Request = {
    user_id: string;
  };
}
