import {
  DataTypes,
  Model,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize'
import db from '.'

class SequelizeUsers extends Model<InferAttributes<SequelizeUsers>, InferCreationAttributes<SequelizeUsers> > {
  declare id: CreationOptional<number>;

  declare name: string;

  declare email: string;

  declare password: string;

  declare role: 'admin' | 'user' | 'superadmin';

}

SequelizeUsers.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('admin', 'user', 'superadmin'),
    defaultValue: 'user',
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
})

export default SequelizeUsers;
