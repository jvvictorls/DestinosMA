import {
  DataTypes,
  Model,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes
} from 'sequelize';
import db from '.'

class SequelizeSpots extends Model<InferAttributes<SequelizeSpots>, InferCreationAttributes<SequelizeSpots> > {
  declare id: CreationOptional<number>;

  declare name: string;

  declare description: string;

  declare city: string;

  declare type: string;

  declare tips: string;

  declare image: string;

  declare latitude: number;

  declare longitude: number;

}

SequelizeSpots.init({
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
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tips: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'spots',
  timestamps: false
})

export default SequelizeSpots;
