import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUsersRepository from '../repositories/IUsersRepository';

import { EmailInUseError } from '@/errors';

import User from '../models/User';

class CreateUserService {
  constructor(private readonly usersRepository: IUsersRepository) {}

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

    const user = await this.usersRepository.create({
      email,
      name,
      password,
      telephones,
    });

    return user;
  }
}

export default CreateUserService;
