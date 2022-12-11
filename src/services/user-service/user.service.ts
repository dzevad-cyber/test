export const create = async (model, data: Record<string, any>) => {
  const user = await model.create(data);
  return user;
};
