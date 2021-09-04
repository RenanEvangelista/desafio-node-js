import User from '@/models/User';

export class UserCreatedViewModel {
  id: string;

  created_at: Date;

  modified_at: Date;

  static map(user: User): UserCreatedViewModel {
    return {
      id: user.id,
      created_at: user.created_at,
      modified_at: user.modified_at,
    };
  }
}
