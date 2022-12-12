import { ModelStatic } from 'sequelize';

export const getAll = async (model: ModelStatic<any>) => {
  return model.findAll();
};
