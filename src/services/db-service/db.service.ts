import { sequelize } from '../../database/database.js';

export const dbConnect = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('DB connection successful');
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });
};
