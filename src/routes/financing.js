module.exports = ({express, controllers}) => {

    const {IndexController} = controllers.index;

    const model = 'Financing';

    const baseApi = '/open-banking/financings/v1';

    // REGULAR ROUTES
    express.get(`${baseApi}/contracts`, (req, res) => IndexController.sigleApi(model, 'contracts', req, res));
    express.get(`${baseApi}/contracts/:id`, (req, res) => IndexController.sigleApi(model, 'contractsId', req, res));

    // BATCH ROUTES
    express.get(`${baseApi}/contracts/batch`, (req, res) => IndexController.batchApi(model, 'contracts', req, res));
    express.get(`${baseApi}/contracts/:id/batch`, (req, res) => IndexController.batchApi(model, 'contractsId', req, res));

};