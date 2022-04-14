/**
 * @namespace app.routes.creditCard
 * @param express
 * @param controllers
 */
module.exports = ({ express, controllers }) => {

  const { CreditCardController } = controllers.creditCard;

  express.get('/credit-card/account', CreditCardController.getCreditCardAccount);

  express.get('/credit-card/account/:id/batch', CreditCardController.getCreditCardAccountBatch);

};
