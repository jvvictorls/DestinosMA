import UsersModel from "../model/users.model";
import { ServiceResponse } from "../interfaces/ServiceResponse";
import IUsers from "../interfaces/Users/IUsers";
import IUsersModel from "../interfaces/Users/IUsersModel";

class UsersService {
  private usersModel: UsersModel;

  constructor() {
    this.usersModel = new UsersModel();
  }

  async findOne(email: string) {
    const user = await this.usersModel.findOne(email);
    if(!user) {
      return {status: 'NOT_FOUND', message: 'User not found'};
    }
    return {status: 'SUCCESSFUL', data: user};
  }

  async findById(identificator: number) {
    const user = await this.usersModel.findById(identificator);
    if(!user) {
      return {status: 'NOT_FOUND', message: 'User not found'};
    }
    const {id, password, ...userData} = user;
    return {status: 'SUCCESSFUL', data: userData};
  }

  async create(user: IUsers) {
    const userExists = await this.usersModel.findOne(user.email);
    if(userExists) {
      return {status: 'CONFLICT', message: 'User already exists'};
    }
    const newUser = await this.usersModel.create(user);
    return {status: 'SUCCESSFUL', data: newUser};
  }

  async update(id: number, user: IUsers) {
    const userExists = await this.usersModel.findById(id);
    if(!userExists) {
      return {status: 'NOT_FOUND', message: 'User not found'};
    }
    const updatedUser = await this.usersModel.update(id, user);
    if(!updatedUser) {
      return {status: 'INTERNAL_ERROR', message: 'User not updated'};
    }
    const {password, ...userData} = updatedUser;
    return {status: 'SUCCESSFUL', data: userData};
  }

  async delete(id: number) {
    const userExists = await this.usersModel.findById(id);
    if(!userExists) {
      return {status: 'NOT_FOUND', message: 'User not found'};
    }
    const userDeleted = await this.usersModel.delete(id);
    if(!userDeleted) {
      return {status: 'INTERNAL_ERROR', message: 'User not deleted'};
    }
    return {status: 'SUCCESSFUL'};
  }
}

export default UsersService;