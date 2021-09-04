import { UserNotFoundError } from '@/errors';
import IUsersRepository from '@/repositories/IUsersRepository';

import User from '@/models/User';

class ShowUserService {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute(id: string): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new UserNotFoundError();
    }

    return user;
  }
}

export default ShowUserService;
