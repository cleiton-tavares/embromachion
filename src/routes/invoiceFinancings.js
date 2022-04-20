/**
 * @namespace app.routes.invoiceFinancings
 * @param express
 * @param controllers
 */
 module.exports = ({ express, controllers }) => {

    const { IndexController } = controllers.index;

    // REGULAR ROUTES
    express.get('/open-banking/invoice-financings/v1/contracts', (req, res) => IndexController.sigleApi('InvoiceFinancings', '', req, res));
    express.get('/open-banking/invoice-financings/v1/contracts/:id', (req, res) => IndexController.sigleApi('InvoiceFinancings', 'contracts', req, res));
    express.get('/open-banking/invoice-financings/v1/contracts/:id/warranties', (req, res) => IndexController.sigleApi('InvoiceFinancings', 'warranties', req, res));
    express.get('/open-banking/invoice-financings/v1/contracts/:id/scheduled-instalments', (req, res) => IndexController.sigleApi('InvoiceFinancings', 'scheduledInstalments', req, res));
    express.get('/open-banking/invoice-financings/v1/contracts/:id/payments', (req, res) => IndexController.sigleApi('InvoiceFinancings', 'payments', req, res));

    // BATCH ROUTES
    express.get('/open-banking/invoice-financings/v1/contracts/:id/batch', (req, res) => IndexController.batchApi('InvoiceFinancings', '', req, res));
    express.get('/open-banking/invoice-financings/v1/contracts/:id/id/batch', (req, res) => IndexController.batchApi('InvoiceFinancings', 'contracts', req, res));
    express.get('/open-banking/invoice-financings/v1/contracts/:id/warranties/batch', (req, res) => IndexController.batchApi('InvoiceFinancings', 'warranties', req, res));
    express.get('/open-banking/invoice-financings/v1/contracts/:id/scheduled-instalments/batch', (req, res) => IndexController.batchApi('InvoiceFinancings', 'scheduledInstalments', req, res));
    express.get('/open-banking/invoice-financings/v1/contracts/:id/payments/batch', (req, res) => IndexController.batchApi('InvoiceFinancings', 'payments', req, res));
    
  };
  