const { Response } = require('./response');
const { Batch } = require('./batch')();
/**
 * @namespace app.services.index
 * @type {{Response: Response, Batch: *}}
 */
module.exports = {
  Response,
  Batch
}