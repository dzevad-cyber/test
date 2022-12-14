import { ModelStatic, Op } from 'sequelize';

export const createOne = async (
  model: ModelStatic<any>,
  data: Record<string, any>
) => {
  return model.create(data);
};

export const getAll = (model: ModelStatic<any>) => {
  // works
  // return model.unscoped().findAll();

  return model.scope('includeTimestamps').findAll();
  // works
  // return model.findAll({ where: { age: { [Op.gt]: 20 } } });
};
