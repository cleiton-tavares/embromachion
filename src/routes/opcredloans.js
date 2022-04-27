/**
 * @namespace app.routes.account
 * @param express
 * @param controllers
 */
module.exports = ({ express, controllers }) => {

  const { IndexController } = controllers.index;

  const model = 'Loans';

  const baseApi = '/open-banking/loans/v1/contracts';

  // REGULAR ROUTES
  express.get(baseApi, (req, res) => IndexController.sigleApi(model, '', req, res));
  express.get(`${baseApi}/:id`, (req, res) => IndexController.sigleApi(model, 'contract', req, res));
  express.get(`${baseApi}/:id/warranties`, (req, res) => IndexController.sigleApi(model, 'warranty', req, res));
  express.get(`${baseApi}/:id/scheduled-instalments`, (req, res) => IndexController.sigleApi(model, 'instalments', req, res));
  express.get(`${baseApi}/:id/payments`, (req, res) => IndexController.sigleApi(model, 'payments', req, res));

  // Batch routes
  express.get(`${baseApi}/:id/batch`, (req, res) => IndexController.batchApi(model, 'contract', req, res));
  express.get(`${baseApi}/:id/warranties/batch`, (req, res) => IndexController.batchApi(model, 'warranty', req, res));
  express.get(`${baseApi}/:id/scheduled-instalments/batch`, (req, res) => IndexController.batchApi(model, 'instalments', req, res));
  express.get(`${baseApi}/:id/payments/batch`, (req, res) => IndexController.batchApi(model, 'payments', req, res));
};
