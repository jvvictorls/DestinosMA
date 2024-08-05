import IUsers from "./IUsers";

export default interface IUsersModel {
  findOne: (email: string) => Promise<IUsers | null>;
  findById: (id: number) => Promise<IUsers | null>;
  create: (user: IUsers) => Promise<IUsers>;
  update: (id: number, user: IUsers) => Promise<IUsers | null>;
  delete: (id: number) => Promise<boolean>;
}