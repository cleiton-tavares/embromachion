/**
 * @namespace app.routes.creditCard
 * @param express
 * @param controllers
 */
 module.exports = ({ express, controllers }) => {

  
  const { IndexController } = controllers.index;
  const model = 'CreditCard';
  const baseApi = '/open-banking/credit-cards-accounts/v1/accounts';

  // REGULAR ROUTES
  express.get(baseApi, (req, res) => IndexController.sigleApi(model, '', req, res));
  express.get(`${baseApi}/:id`, (req, res) => IndexController.sigleApi(model, 'account', req, res));
  express.get(`${baseApi}/:id/bills`, (req, res) => IndexController.sigleApi(model, 'bills', req, res));
  express.get(`${baseApi}/:id/bills/:bullId/transactions`, (req, res) => IndexController.sigleApi(model, 'billId_transactions', req, res));
  express.get(`${baseApi}/:id/limits`, (req, res) => IndexController.sigleApi(model, 'limits', req, res));
  express.get(`${baseApi}/:id/transactions`, (req, res) => IndexController.sigleApi(model, 'transactions', req, res));
 

  // BATCH ROUTES
  express.get(`${baseApi}/:id/batch`, (req, res) => IndexController.batchApi(model, '', req, res));
  express.get(`${baseApi}/:id/id/batch`, (req, res) => IndexController.batchApi(model, 'account', req, res));
  express.get(`${baseApi}/:id/bills/batch`,  (req, res) => IndexController.batchApi(model, 'bills', req, res));
  express.get(`${baseApi}/:id/bills/:bullId/batch`, (req, res) => IndexController.sigleApi(model, 'billId_transactions', req, res));
  express.get(`${baseApi}/:id/limits/batch`, (req, res) => IndexController.sigleApi(model, 'limits', req, res));
  express.get(`${baseApi}/:id/transactions/batch`,  (req, res) => IndexController.batchApi(model, 'transactions', req, res));
 
};
