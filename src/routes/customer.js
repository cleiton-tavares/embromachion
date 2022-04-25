module.exports = ({ express, controllers }) => {

    const { IndexController } = controllers.index;

    const model = 'Customer'

    const baseApi = '/open-banking/customers/v1';
    // REGULAR ROUTES
    express.get(`${baseApi}/personal/identifications`, (req, res) => IndexController.sigleApi(model, 'personalIdentifications', req, res));
    express.get(`${baseApi}/personal/qualifications`, (req, res) => IndexController.sigleApi(model, 'personalQualifications', req, res));
    express.get(`${baseApi}/personal/financial-relations`, (req, res) => IndexController.sigleApi(model, 'personalFinancialRelations', req, res));
    express.get(`${baseApi}/business/identifications`, (req, res) => IndexController.sigleApi(model, 'businessIdentifications', req, res));
    express.get(`${baseApi}/business/qualifications`, (req, res) => IndexController.sigleApi(model, 'businessQualifications', req, res));
    express.get(`${baseApi}/business/financial-relations`, (req, res) => IndexController.sigleApi(model, 'businessFinancialRelations', req, res));

    // BATCH ROUTES
    express.get(`${baseApi}/personal/identifications/batch`, (req, res) => IndexController.batchApi(model, 'personalIdentifications', req, res));
    express.get(`${baseApi}/personal/qualifications/batch`, (req, res) => IndexController.batchApi(model, 'personalQualifications', req, res));
    express.get(`${baseApi}/personal/financial-relations/batch`, (req, res) => IndexController.batchApi(model, 'personalFinancialRelations', req, res));
    express.get(`${baseApi}/business/identifications/batch`, (req, res) => IndexController.batchApi(model, 'businessIdentifications', req, res));
    express.get(`${baseApi}/business/qualifications/batch`, (req, res) => IndexController.batchApi(model, 'businessQualifications', req, res));
    express.get(`${baseApi}/business/financial-relations/batch`, (req, res) => IndexController.batchApi(model, 'businessFinancialRelations', req, res));

};