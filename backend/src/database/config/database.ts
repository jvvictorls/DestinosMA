import { Options } from "sequelize";

const config: Options = {
  username: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQLHOST || 'localhost',
  port: Number(process.env.MYSQLPORT),
  dialect: 'mysql',
} 

export = config;