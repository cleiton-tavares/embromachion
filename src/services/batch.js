const json2csv = require('json2csv');
const { Response } = require('./response');
/**
 * @namespace app.services.batch
 * @returns {{Batch: Batch}}
 */
module.exports = ({ configs }) => {

  const { blobServiceClient } = configs.storage;

  class Batch {
    /**
     * generateBatch
     * @param items
     * @param entity
     * @returns {*[]}
     */
    static generateBatch(items, entity){
      let result = [];
      const limit = Number(items) || 15;
      for(let i = 0; i < limit; i++){
        result.push(new entity());
      }
      return result;
    }

    /**
     * generateCSVFile
     * @param data
     * @returns {*}
     */
    static generateCSVFile(data){
      return json2csv.parse(data);
    }

    /**
     * response
     * @param {Object} res
     * @param {String} api
     * @param {Object} params
     * @param data
     * @returns {Promise<*>}
     */
    static async response(res, api, params, data){
      try {
        if(params.storage) {
          const content = params.csv ? Buffer.from(Batch.generateCSVFile(data)) : JSON.stringify(data);
          const response = await Batch.saveInBlobStorage(
              api,
              content,
              params.csv ? 'csv' : 'json'
          );
          return res.json({ message: 'Saved with success!', data: response});
        } else if(params.csv) {
          return res.set('Content-Type', 'text/csv').send(Buffer.from(Batch.generateCSVFile(data)));
        }
        return res.json(new Response(data));
      } catch (e) {
        console.error(e);
        return res.status(500).json(new Response({ message: e.message }));
      }
    }

    /**
     *
     * @param name
     * @param data
     * @param extension
     * @returns {Promise<{blobName: string, requestId: string}>}
     */
    static async saveInBlobStorage(name, data, extension){
      try {
        const containerClient = blobServiceClient.getContainerClient(__ENV__["STORAGE_CONTAINER"]);
        const content = data;
        const blobName = `${name}${new Date().getTime()}.${extension}`;
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);
        const uploadBlobResponse = await blockBlobClient.upload(content, content.length);
        console.log(`Upload block blob ${blobName} successfully - ${uploadBlobResponse.requestId}`);
        return { blobName, requestId: uploadBlobResponse.requestId };
      } catch (e) {
        throw e;
      }
    }
  }

  return { Batch };

};
