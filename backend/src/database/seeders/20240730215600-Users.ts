import {
  QueryInterface,
} from 'sequelize';
import IUsers from '../../interfaces/Users/IUsers'

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'admin',
        email: 'admin@admin.com',
        password: 'admin',
        role: 'admin'
      },
      {
        name: 'user',
        email: 'user@user.com',
        password: 'user',
        role: 'user'
      },
      {
        name: 'superadmin',
        email: 'superadmin@superadmin.com',
        password: 'superadmin',
        role: 'superadmin'
      }
    ])
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {}, {})
  }
}