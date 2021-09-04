export default interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  telephones: User.Telephone[];
  created_at: Date;
  modified_at: Date;
}

export namespace User {
  export type Telephone = {
    number: number;
    area_code: number;
  };
}
