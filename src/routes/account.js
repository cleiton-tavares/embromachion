/**
 * @namespace app.routes.account
 * @param express
 * @param controllers
 */
module.exports = ({ express, controllers }) => {

  const { IndexController } = controllers.index;

  const model = 'Account';

  const baseApi = '/open-banking/accounts/v1/account';
  // REGULAR ROUTES
  express.get(baseApi, (req, res) => IndexController.sigleApi(model, 'account', req, res));
  express.get(`${baseApi}/:id`, (req, res) => IndexController.sigleApi(model, 'accountId', req, res));
  express.get(`${baseApi}/:id/balance`, (req, res) => IndexController.sigleApi(model, 'balance', req, res));
  express.get(`${baseApi}/:id/transactions`, (req, res) => IndexController.sigleApi(model, 'transactions', req, res));
  express.get(`${baseApi}/:id/overdraft-limits`,(req, res) => IndexController.sigleApi(model, 'limits', req, res));
  // BATCH ROUTES
  express.get(`${baseApi}/:id/batch`, (req, res) => IndexController.batchApi(model, 'account', req, res));
  express.get(`${baseApi}/:id/id/batch`, (req, res) => IndexController.batchApi(model, 'accountId', req, res));
  express.get(`${baseApi}/:id/balance/batch`,  (req, res) => IndexController.batchApi(model, 'balance', req, res));
  express.get(`${baseApi}/:id/transactions/batch`,  (req, res) => IndexController.batchApi(model, 'transactions', req, res));
  express.get(`${baseApi}/:id/overdraft-limits/batch`,  (req, res) => IndexController.batchApi(model, 'limits', req, res));

};
