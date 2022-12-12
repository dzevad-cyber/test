import { ModelStatic } from 'sequelize';

export const create = async (
  model: ModelStatic<any>,
  data: Record<string, any>
) => {
  return model.create(data);
};
