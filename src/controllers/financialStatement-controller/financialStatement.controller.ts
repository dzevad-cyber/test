import { handleAsync } from '../../helpers/handleAsync.js';
import { getAll } from '../../services/financialStatement-service/financialStatement.service.js';

export const getAllFinancialStatements = handleAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: { msg: 'test' },
  });
});
