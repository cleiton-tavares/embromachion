/**
 * @namespace app.routes.account
 * @param express
 * @param controllers
 */
module.exports = ({ express, controllers }) => {

  const { IndexController } = controllers.index;

  // REGULAR ROUTES
  express.get('/open-banking/accounts/v1/account', (req, res) => IndexController.sigleApi('Account', '', req, res));
  express.get('/open-banking/accounts/v1/account/:id', (req, res) => IndexController.sigleApi('Account', 'account', req, res));
  express.get('/open-banking/accounts/v1/account/:id/balance', (req, res) => IndexController.sigleApi('Account', 'balance', req, res));
  express.get('/open-banking/accounts/v1/account/:id/transactions', (req, res) => IndexController.sigleApi('Account', 'transactions', req, res));
  express.get('/open-banking/accounts/v1/account/:id/overdraft-limits',(req, res) => IndexController.sigleApi('Account', 'limits', req, res));
  // BATCH ROUTES
  express.get('/open-banking/accounts/v1/account/:id/batch', (req, res) => IndexController.batchApi('Account', '', req, res));
  express.get('/open-banking/accounts/v1/account/:id/id/batch', (req, res) => IndexController.batchApi('Account', 'account', req, res));
  express.get('/open-banking/accounts/v1/account/:id/balance/batch',  (req, res) => IndexController.batchApi('Account', 'balance', req, res));
  express.get('/open-banking/accounts/v1/account/:id/transactions/batch',  (req, res) => IndexController.batchApi('Account', 'transactions', req, res));
  express.get('/open-banking/accounts/v1/account/:id/overdraft-limits/batch',  (req, res) => IndexController.batchApi('Account', 'limits', req, res));

};
