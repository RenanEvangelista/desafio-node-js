import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUsersRepository from '../repositories/IUsersRepository';

import User from '../models/User';

class CreateUserService {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute({
    email,
    name,
    password,
    telephones,
  }: ICreateUserDTO): Promise<User> {
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
