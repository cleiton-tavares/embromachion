module.exports = ({ express, controllers }) => {

    const { IndexController } = controllers.index;

    // REGULAR ROUTES
    express.get('/open-banking/customers/v1/personal/identifications', (req, res) => IndexController.sigleApi('Customer', 'personalIdentifications', req, res));
    express.get('/open-banking/customers/v1/personal/qualifications', (req, res) => IndexController.sigleApi('Customer', 'personalQualifications', req, res));

    // BATCH ROUTES
    express.get('/open-banking/customers/v1/personal/identifications/batch', (req, res) => IndexController.batchApi('Customer', 'personalIdentifications', req, res));
    express.get('/open-banking/customers/v1/personal/qualifications/batch', (req, res) => IndexController.batchApi('Customer', 'personalQualifications', req, res));

};