import {
  getRepository,
  Repository,
  createConnection,
  getConnection,
} from 'typeorm';
import IUsersRepository from '../IUsersRepository';
import ICreateUserDTO from '@/dtos/ICreateUserDTO';
import UserEntity from '@/infra/db/typeorm/entities/User';
import User from '../../models/User';

class PgUsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    createConnection().then((conn) => {
      this.ormRepository = conn.getRepository(UserEntity);
    });
  }

  async findById(id: string): Promise<User | undefined> {
    this.ormRepository = getRepository(UserEntity);
    const user = await this.ormRepository.findOne(id, {
      relations: ['telephones'],
    });

    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    this.ormRepository = getRepository(UserEntity);
    const user = await this.ormRepository.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  async create(data: ICreateUserDTO): Promise<User> {
    const queryRunner = getConnection().createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const user = queryRunner.manager.create(UserEntity, data);
      await queryRunner.manager.save(user);

      const telephones = await Promise.all(
        user.telephones.map(async (phone) => {
          const newPhone = phone;
          newPhone.user = user;
          await queryRunner.manager.save(newPhone);
          return newPhone;
        }),
      );

      user.telephones = telephones;

      await queryRunner.manager.save(user);
      await queryRunner.commitTransaction();

      return user;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async save(user: User): Promise<User> {
    const userSaved = await this.ormRepository.save(user);
    return userSaved;
  }
}

export default PgUsersRepository;
