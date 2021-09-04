import { v4 } from 'uuid';

import ICreateUserDTO from '../../dtos/ICreateUserDTO';
import IUsersRepository from '../IUsersRepository';

import User from '../../models/User';

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async findById(id: string): Promise<User | undefined> {
    const user = this.users.find((userFind) => userFind.id === id);

    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((userFind) => userFind.email === email);

    return user;
  }

  async create({
    name,
    email,
    password,
    telephones,
  }: ICreateUserDTO): Promise<User> {
    const user: User = {
      id: v4(),
      name,
      email,
      password,
      telephones,
      created_at: new Date(),
      modified_at: new Date(),
    };

    this.users.push(user);

    return user;
  }

  async save(user: User): Promise<User> {
    const findIndex = this.users.findIndex(
      (userIndex) => userIndex.id === user.id,
    );

    this.users[findIndex] = user;

    return user;
  }
}

export default FakeUsersRepository;
