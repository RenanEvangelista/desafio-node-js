import FakeUsersRepository from '@/repositories/fakes/FakeUsersRepository';
import CreateUserService from '@/services/CreateUserService';

import { EmailInUseError } from '@/errors';

let fakeUsersRepository: FakeUsersRepository;
let createUserService: CreateUserService;

describe('CreateUserService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    createUserService = new CreateUserService(fakeUsersRepository);
  });

  it('should be able to create user', async () => {
    const user = await createUserService.execute({
      name: 'test',
      email: 'test@test.com',
      password: 'test12345',
      telephones: [],
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a user with the same email', async () => {
    await fakeUsersRepository.create({
      name: 'test',
      email: 'test@test.com',
      password: 'test12345',
      telephones: [],
    });

    await expect(
      createUserService.execute({
        name: 'test2',
        email: 'test@test.com',
        password: 'test12345',
        telephones: [],
      }),
    ).rejects.toBeInstanceOf(EmailInUseError);
  });
});
