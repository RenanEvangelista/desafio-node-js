export default interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  telephones: ICreateUserDTO.Telephone[];
}

export namespace ICreateUserDTO {
  export type Telephone = {
    number: number;
    area_code: number;
  };
}
