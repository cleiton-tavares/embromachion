class Response {
  constructor(data) {
    this.data = data;
    this.links = {
      self: 'https://api.banco.com.br/open-banking/api/v1/resource',
      first: 'https://api.banco.com.br/open-banking/api/v1/resource',
      prev: 'https://api.banco.com.br/open-banking/api/v1/resource',
      next: 'https://api.banco.com.br/open-banking/api/v1/resource',
      last: 'https://api.banco.com.br/open-banking/api/v1/resource'
    };
    if(data.length == null){
      this.meta = {
        "totalRecords": 1,
        "totalPages": 1,
        "requestDateTime": new Date().toISOString()
      }
    } else{
      this.meta = {
        "totalRecords": data.length,
        "totalPages": 1,
        "requestDateTime": new Date().toISOString()
      }
    }
    
  }
}

/**
 * @namespace app.services.response
 * @type {{Response: Response}}
 */
module.exports = { Response };