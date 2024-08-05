import {
  QueryInterface,
  DataTypes,
  Model,
} from 'sequelize'
import IUsers from '../../interfaces/Users/IUsers'

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable<Model<IUsers>>('users', {
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
        allowNull: false
      }
    }) 
},
    down: async (queryInterface: QueryInterface) => {
      await queryInterface.dropTable('users')
    }
}