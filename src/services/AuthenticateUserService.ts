import { sign } from 'jsonwebtoken';

import IHashProvider from '../providers/HashProvider/IHashProvider';
import IUsersRepository from '../repositories/IUsersRepository';

import { InvalidParamError, UserNotFoundError } from '@/errors';

import { env } from '@/main/config/env';

interface IRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  constructor(
    private readonly usersRepository: IUsersRepository,
    private readonly hashProvider: IHashProvider,
  ) {}

  async execute({ email, password }: IRequest): Promise<string> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new UserNotFoundError();
    }

    const passwordMatched = await this.hashProvider.compare(
      password,
      user.password,
    );

    if (!passwordMatched) {
      throw new InvalidParamError('email/password');
    }

    const token = sign(
      {
        id: user.id,
        email: user.email,
      },
      env.jwt_secret,
      {
        subject: user.id,
        expiresIn: env.jwt_expireIn,
      },
    );

    return token;
  }
}

export default AuthenticateUserService;
