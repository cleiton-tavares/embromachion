const { BlobServiceClient } = require("@azure/storage-blob");
/**
 * @namespace app.configs.storage
 * @returns {{blobServiceClient: BlobServiceClient}}
 */
module.exports = () => {

  const connStr = __ENV__.STORAGE_CONNECTION_STR;

  const blobServiceClient = BlobServiceClient.fromConnectionString(connStr);

  return { blobServiceClient };

};