import IUsersModel from "../interfaces/Users/IUsersModel";
import SequelizeUsers from "../database/models/SequelzeUsers";
import IUsers from "../interfaces/Users/IUsers";


class UsersModel implements IUsersModel {
  private model = SequelizeUsers;
  
  async findOne(email: string): Promise<IUsers | null> {
    const dbData = await this.model.findOne({where: {email}});
    if(!dbData) return null;
    return dbData.dataValues;
  }

  async findById(id: number): Promise<IUsers | null> {
    const dbData = await this.model.findByPk(id);
    if(!dbData) return null;
    return dbData.dataValues;
  }
  
  async create(user: IUsers): Promise<IUsers> {
    const createUser = await this.model.create(user);
    return createUser;
  }

  async update(id: number, user: IUsers): Promise<IUsers | null> {
    const updateUser = await this.model.update(user, {where: {id}})
    if(!updateUser) {
      return null
    }
    return user;
  }
  
  async delete(id: number): Promise<boolean> {
    const deleteUser = await this.model.destroy({where: {id}});
    return deleteUser ? true : false;
  }
}

export default UsersModel;