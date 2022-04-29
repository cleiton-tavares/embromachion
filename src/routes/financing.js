module.exports = ({express, controllers}) => {

    const {IndexController} = controllers.index;

    const model = 'Financing';

    const baseApi = '/open-banking/financings/v1';

    // REGULAR ROUTES
    express.get(`${baseApi}/contracts`, (req, res) => IndexController.sigleApi(model, 'contracts', req, res));
    express.get(`${baseApi}/contracts/:id`, (req, res) => IndexController.sigleApi(model, 'contractsId', req, res));
    express.get(`${baseApi}/contracts/:id/warranties`, (req, res) => IndexController.sigleApi(model, 'warranties', req, res));
    express.get(`${baseApi}/contracts/:id/scheduled-instalments`, (req, res) => IndexController.sigleApi(model, 'scheduledInstalments', req, res));
    express.get(`${baseApi}/contracts/:id/payments`, (req, res) => IndexController.sigleApi(model, 'payments', req, res));

    // BATCH ROUTES
    express.get(`${baseApi}/contracts/:id/batch`, (req, res) => IndexController.batchApi(model, 'contracts', req, res));
    express.get(`${baseApi}/contracts/:id/:id/batch`, (req, res) => IndexController.batchApi(model, 'contractsId', req, res));
    express.get(`${baseApi}/contracts/:id/warranties/batch`, (req, res) => IndexController.batchApi(model, 'warranties', req, res));
    express.get(`${baseApi}/contracts/:id/scheduled-instalments/batch`, (req, res) => IndexController.batchApi(model, 'scheduledInstalments', req, res));
    express.get(`${baseApi}/contracts/:id/payments/batch`, (req, res) => IndexController.batchApi(model, 'payments', req, res));

};