/**
 * @namespace app.routes.creditCard
 * @param express
 * @param controllers
 */
module.exports = ({ express, controllers }) => {

  const { IndexController } = controllers.index;

  // REGULAR ROUTES
  express.get('/open-banking/credit-cards-accounts/v1/account', (req, res) => IndexController.sigleApi('CreditCard', '', req, res));
  express.get('/open-banking/credit-cards-account/v1/account/:id', (req, res) => IndexController.sigleApi('CreditCard', 'account', req, res));
  express.get('/open-banking/credit-cards-account/v1/account/:id/bills', (req, res) => IndexController.sigleApi('CreditCard', 'bills', req, res));
  express.get('/open-banking/credit-cards-account/v1/account/:id/transactions', (req, res) => IndexController.sigleApi('CreditCard', 'transactions', req, res));
  express.get('/open-banking/credit-cards-account/v1/account/:id/limits',(req, res) => IndexController.sigleApi('CreditCard', 'limits', req, res));
  // BATCH ROUTES
  express.get('/open-banking/credit-cards-account/v1/account/:id/batch', (req, res) => IndexController.batchApi('CreditCard', '', req, res));
  express.get('/open-banking/credit-cards-account/v1/account/:id/id/batch', (req, res) => IndexController.batchApi('CreditCard', 'account', req, res));
  express.get('/open-banking/credit-cards-account/v1/account/:id/bills/batch',  (req, res) => IndexController.batchApi('CreditCard', 'bills', req, res));
  express.get('/open-banking/credit-cards-account/v1/account/:id/transactions/batch',  (req, res) => IndexController.batchApi('CreditCard', 'transactions', req, res));
  express.get('/open-banking/credit-cards-account/v1/account/:id/limits/batch',  (req, res) => IndexController.batchApi('CreditCard', 'limits', req, res));

};
