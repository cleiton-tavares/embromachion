const { Response } = require('./response');
const { Batch } = require('./batch')({ configs: { storage: require('./../configs/storage')()}});
/**
 * @namespace app.services.index
 * @type {{Response: Response, Batch: *}}
 */
module.exports = {
  Response,
  Batch
}