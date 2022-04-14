const json2csv = require('json2csv');
const { Response } = require('./response');
/**
 * @namespace app.services.batch
 * @returns {{Batch: Batch}}
 */
module.exports = () => {

  class Batch{
    static generateBatch(items, entity){
      let result = [];
      const limit = Number(items) || 15;
      for(let i = 0; i < limit; i++){
        result.push(new entity());
      }
      return result;
    }
    static generateCSVFile(data){
      return json2csv.parse(data);
    }
    static response(res, csv, data){
      if(csv) {
        return res.set('Content-Type', 'text/csv').send(Buffer.from(Batch.generateCSVFile(data)));
      }
      return res.json(new Response(data));
    }
  }

  return { Batch };

};