import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('test_sq', 'wslRoot', 'root', {
  host: '172.26.64.1',
  port: 3307,
  dialect: 'mysql',
});
