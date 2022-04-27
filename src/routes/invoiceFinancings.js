/**
 * @namespace app.routes.invoiceFinancings
 * @param express
 * @param controllers
 */
 module.exports = ({ express, controllers }) => {

    const { IndexController } = controllers.index;

    const  model  =  'InvoiceFinancings' ;
    const  baseApi  =  '/open-banking/invoice-financings/v1/contracts';

    // REGULAR ROUTES
    express.get(baseApi, (req, res) => IndexController.sigleApi(model, '', req, res));
    express.get(`${baseApi}/:id`, (req, res) => IndexController.sigleApi(model, 'contracts', req, res));
    express.get(`${baseApi}/:id/warranties`, (req, res) => IndexController.sigleApi(model, 'warranties', req, res));
    express.get(`${baseApi}/:id/scheduled-instalments`, (req, res) => IndexController.sigleApi(model, 'scheduledInstalments', req, res));
    express.get(`${baseApi}/:id/payments`, (req, res) => IndexController.sigleApi(model, 'payments', req, res));

    // BATCH ROUTES
    express.get(`${baseApi}/:id/batch`, (req, res) => IndexController.batchApi(model, '', req, res));
    express.get(`${baseApi}/:id/id/batch`, (req, res) => IndexController.batchApi(model, 'contracts', req, res));
    express.get(`${baseApi}/:id/warranties/batch`, (req, res) => IndexController.batchApi(model, 'warranties', req, res));
    express.get(`${baseApi}/:id/scheduled-instalments/batch`, (req, res) => IndexController.batchApi(model, 'scheduledInstalments', req, res));
    express.get(`${baseApi}/:id/payments/batch`, (req, res) => IndexController.batchApi(model, 'payments', req, res));

  };
  