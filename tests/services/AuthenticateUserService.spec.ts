import AuthenticateUserService from '@/services/AuthenticateUserService';
import FakeUsersRepository from '@/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '@/providers/HashProvider/fakes/FakeHashProvider';

let fakeHashProvider: FakeHashProvider;
let fakeUsersRepository: FakeUsersRepository;
let authenticateUserService: AuthenticateUserService;

describe('AuthenticateUserService', () => {
  beforeEach(() => {
    fakeHashProvider = new FakeHashProvider();
    fakeUsersRepository = new FakeUsersRepository();
    authenticateUserService = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to authenticate user', async () => {
    await fakeUsersRepository.create({
      name: 'test',
      email: 'test@test.com',
      password: 'test12345',
      telephones: [],
    });

    const authenticateResponse = await authenticateUserService.execute({
      email: 'test@test.com',
      password: 'test12345',
    });

    expect(typeof authenticateResponse).toBe('string');
  });
});
