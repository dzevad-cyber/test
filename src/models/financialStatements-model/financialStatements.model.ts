import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';

export const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    fsType: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    statementForm: {
      type: DataTypes.STRING,
    },
    statementDate: {
      type: DataTypes.DATE,
    },
    timePeriod: {
      type: DataTypes.STRING,
    },
    sourcePath: {
      type: DataTypes.STRING,
    },
    kvMatrix: {
      type: DataTypes.JSON,
    },
    inCompliance: {
      type: DataTypes.STRING,
    },
    includeInReview: {
      type: DataTypes.TINYINT,
      defaultValue: 0,
    },
    includeInTrends: {
      type: DataTypes.TINYINT,
      defaultValue: 0,
    },
    includeInCalculations: {
      type: DataTypes.TINYINT,
      defaultValue: 0,
    },
    includeInLoan: {
      type: DataTypes.TINYINT,
      defaultValue: 0,
    },
    dataInThousands: {
      type: DataTypes.TINYINT,
    },
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['created_at', 'updated_at'],
      },
    },
    // other model options
  }
);
