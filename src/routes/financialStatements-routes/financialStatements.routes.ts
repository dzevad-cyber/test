import express from 'express';
import * as financialStatementController from '../../controllers/financialStatement-controller/financialStatement.controller.js';

const financialStatementsRouter = express.Router();

financialStatementsRouter
  .route('/financialStatements')
  .get(financialStatementController.getAllFinancialStatements);

export default financialStatementsRouter;
