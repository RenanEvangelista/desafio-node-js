import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUsersRepository from '../repositories/IUsersRepository';

import { EmailInUseError } from '@/errors';

import User from '../models/User';
import IHashProvider from '@/providers/HashProvider/IHashProvider';

class CreateUserService {
  constructor(
    private readonly usersRepository: IUsersRepository,
    private readonly hashProvider: IHashProvider,
  ) {}

  async execute({
    email,
    name,
    password,
    telephones,
  }: ICreateUserDTO): Promise<User> {
    const checkUserExist = await this.usersRepository.findByEmail(email);

    if (checkUserExist) {
      throw new EmailInUseError();
    }

    const passwordHashed = await this.hashProvider.generate(password);

    const user = await this.usersRepository.create({
      email,
      name,
      password: passwordHashed,
      telephones,
    });

    return user;
  }
}

export default CreateUserService;
