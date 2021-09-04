import CreateUserService from '@/services/CreateUserService';
import FakeUsersRepository from '@/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '@/providers/HashProvider/fakes/FakeHashProvider';

import { EmailInUseError } from '@/errors';

let fakeHashProvider: FakeHashProvider;
let fakeUsersRepository: FakeUsersRepository;
let createUserService: CreateUserService;

describe('CreateUserService', () => {
  beforeEach(() => {
    fakeHashProvider = new FakeHashProvider();
    fakeUsersRepository = new FakeUsersRepository();
    createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
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

  it("ensure the user's password is encrypted", async () => {
    const user = await createUserService.execute({
      name: 'test',
      email: 'test@test.com',
      password: 'test12345',
      telephones: [],
    });

    expect(user.password).not.toBe('test12345');
  });
});
