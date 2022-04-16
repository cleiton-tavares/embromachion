/**
 * @namespace app.controller.creditCard
 * @param models
 * @param services
 * @returns {{CreditCardController: CreditCardController}}
 */
module.exports = ({ models, services }) => {

  const { CreditCard } = models.creditCard;
  const { Batch, Response } = services.index;

  class CreditCardController {
    static getParams(query) {
      return {
        csv: query.save_csv,
        storage: query.save_storage
      }
    }
    static async getCreditCardAccount(req, res){
      try {
        return res.json(new Response(new CreditCard()));
      } catch (e) {
        console.error(e, req.traceID);
        return res.json(e.message);
      }
    }
    static async getCreditCardAccountBatch(req, res){
      try {
        let creditCards = Batch.generateBatch(req.query.items, CreditCard);
        const params = CreditCardController.getParams(req.query);
        return Batch.response(res, 'getCreditCardAccountBatch', params, creditCards);
      } catch (e) {
        console.error(e, req.traceID);
        return res.json(new Response(e.message));
      }
    }
  }

  return { CreditCardController };

};
