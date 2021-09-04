import User from '../../../models/User';

export class ShowUserViewModel {
  id: string;

  email: string;

  created_at: Date;

  modified_at: Date;

  telephones: {
    number: number;
    area_code: number;
  }[];

  static map(user: User): ShowUserViewModel {
    return {
      id: user.id,
      email: user.email,
      telephones: user.telephones.map((telephone) => {
        return {
          area_code: telephone.area_code,
          number: telephone.number,
        };
      }),
      created_at: user.created_at,
      modified_at: user.modified_at,
    };
  }
}
