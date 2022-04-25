/**
 * @namespace app.controllers.index
 * @param models
 * @param services
 */
module.exports = ({ models, services }) => {

  const Models = models.index;
  const { Batch, Response } = services.index;

  class IndexController {
    /**
     * getParam
     * @param save_csv
     * @param save_storage
     * @returns {{csv, storage}}
     */
    static getParams({ save_csv, save_storage }){
      return {
        csv: save_csv,
        storage: save_storage
      }
    }
    /**
     * sigleApi
     * @param {String} model
     * @param {string} api
     * @param {Object} req
     * @param {Object} res
     * @returns {Promise<*>}
     */
    static async sigleApi(model, api, req, res){
      try {
        if(api) return res.json(new Response(new Models[model]()[api]))
        return res.json(new Response(new Models[model]()));
      } catch (e) {
        console.error(e, req.traceID);
        return res.status(500).json(new Response({ message: e.message }));
      }
    }

    /**
     * batchApi
     * @param model
     * @param api
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    static async batchApi(model, api, req, res){
      try {
        let batch = Batch.generateBatch(req.query.items, Models[model]);
        const params = IndexController.getParams(req.query);
        let result = [];
        if(api) batch.map(item => result.push(item[api]));
        else result = batch;
        return Batch.response(res, `get${model}Batch`, params, result);
      } catch (e) {
        console.error(e, req.traceID);
        return res.status(500).json(new Response({ message: e.message }));
      }
    }
  }

  return { IndexController };

};
