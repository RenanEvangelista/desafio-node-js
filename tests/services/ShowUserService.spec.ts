import ShowUserService from '@/services/ShowUserService';
import FakeUsersRepository from '@/repositories/fakes/FakeUsersRepository';

let fakeUsersRepository: FakeUsersRepository;
let showUserService: ShowUserService;

describe('ShowUserService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    showUserService = new ShowUserService(fakeUsersRepository);
  });

  it('should be able to get user', async () => {
    const user = await fakeUsersRepository.create({
      name: 'test',
      email: 'test@test.com',
      password: 'test12345',
      telephones: [],
    });

    const userShow = await showUserService.execute(user.id);

    expect(userShow).toEqual(user);
  });
});
