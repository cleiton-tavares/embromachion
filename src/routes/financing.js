module.exports = ({ express, controllers }) => {

    const { IndexController } = controllers.index;

    // REGULAR ROUTES
    express.get('/open-banking/financings/v1/contracts', (req, res) => IndexController.sigleApi('Financing', 'contracts', req, res));

    // BATCH ROUTES
    express.get('/open-banking/financings/v1/contracts/batch', (req, res) => IndexController.batchApi('Financing', 'contracts', req, res));

};