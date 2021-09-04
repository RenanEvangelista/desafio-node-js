import FakeUsersRepository from '@/repositories/fakes/FakeUsersRepository';

let fakeUsersRepository: FakeUsersRepository;

describe('CreateUserService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
  });

  it('should be able to create user', async () => {
    const user = await fakeUsersRepository.create({
      name: 'test',
      email: 'test@test.com',
      password: 'test12345',
      telephones: [],
    });

    expect(user).toHaveProperty('id');
  });
});
