module.exports = ({ express, controllers }) => {

  const { AccountController } = controllers.account;

  express.get('/account', AccountController.getAccount);
  express.get('/account/batch', AccountController.getAccountBatch);

  express.get('/account/:id', AccountController.getAccountId);
  express.get('/account/:id/batch', AccountController.getAccountIdBatch);

  express.get('/account/:id/balance', AccountController.getAccountBalance);

  express.get('/account/balance/batch', AccountController.getAccountBalanceBatch);
  express.get('/account/transactions/batch', AccountController.getAccountTransactionsBatch);
  express.get('/account/overdraft-limits/batch', AccountController.getAccountLimitsBatch);

  express.get('/account/:id/transactions', AccountController.getAccountTransactions);
  express.get('/account/:id/overdraft-limits', AccountController.getAccountLimits);

};
