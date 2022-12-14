import { DataTypes, Op } from 'sequelize';

import { sequelize } from '../database/database.js';

export const User = sequelize.define(
  'User',
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
    },
  },
  {
    underscored: true,
    defaultScope: {
      attributes: {
        exclude: ['created_at', 'updated_at'],
      },
    },
    // other model options
    scopes: {
      includeTimestamps: {
        include: ['created_at', 'updated_at'],
      },
      age: {
        where: { age: { [Op.gt]: 20 } },
      },
    },
  }
);
