/**
 * @namespace app.routes.account
 * @param express
 * @param controllers
 */
module.exports = ({ express, controllers }) => {

  const { IndexController } = controllers.index;

  const model = 'Contracts';

  const baseApi = '/open-banking/unarranged-accounts-overdraft/v1/contracts';

  const singleApiFunction = (req, res, api) => {
    return IndexController.sigleApi(model, api, req, res);
  }

  const batchApiFunction = (req, res, api) => {
    return IndexController.batchApi(model, api, req, res);
  }

  // REGULAR ROUTES
  express.get(baseApi, (req, res) => IndexController.sigleApi(model, '', req, res));
  express.get(`${baseApi}/:id`, (req, res) => IndexController.sigleApi(model, 'contract', req, res));
  express.get(`${baseApi}/:id/warranties`, (req, res) => IndexController.sigleApi(model, 'warranty', req, res));
  express.get(`${baseApi}/:id/scheduled-instalments`, (req, res) => IndexController.sigleApi(model, 'instalments', req, res));
  express.get(`${baseApi}/:id/payments`, (req, res) => IndexController.sigleApi(model, 'payments', req, res));

  // Batch routes
  express.get(baseApi, (req, res) => IndexController.batchApi(model, '', req, res));
  express.get(`${baseApi}/:id/batch`, (req, res) => IndexController.batchApi(model, 'contract', req, res));
  express.get(`${baseApi}/:id/warranties/batch`, (req, res) => IndexController.batchApi(model, 'warranty', req, res));
  express.get(`${baseApi}/:id/scheduled-instalments/batch`, (req, res) => IndexController.batchApi(model, 'instalments', req, res));
  express.get(`${baseApi}/:id/payments/batch`, (req, res) => IndexController.batchApi(model, 'payments', req, res));
};
