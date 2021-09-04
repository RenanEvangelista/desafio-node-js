import { verify } from 'jsonwebtoken';
import { HttpResponse } from '../contracts/HttpResponse';
import { Middleware } from '../contracts/Middleware';

import { success, unauthorized } from '../helpers/http-helpers';

import { AccessDeniedError } from '@/errors';

import { env } from '@/main/config';

interface TokenPayload {
  id: string;
  email: string;
  iat: number;
}

export default class EnsureAuthenticatedMiddleware implements Middleware {
  async handle({
    authToken,
  }: EnsureAuthenticatedMiddleware.Request): Promise<HttpResponse<any>> {
    if (!authToken) {
      return unauthorized(new AccessDeniedError('missing JWT token'));
    }

    const [, token] = authToken.split(' ');

    try {
      const decoded = verify(token, env.jwt_secret);

      const { id } = decoded as TokenPayload;

      return success({
        user_id: id,
      });
    } catch (error) {
      return unauthorized(new AccessDeniedError('Invalid JWT token'));
    }
  }
}

export namespace EnsureAuthenticatedMiddleware {
  export type Request = {
    authToken: string;
  };
}
