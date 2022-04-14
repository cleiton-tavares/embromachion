/**
 * @namespace app.controllers.account
 * @param models
 * @param services
 * @returns {{AccountController: AccountController}}
 */
module.exports = ({ models, services }) => {

  const { Account } = models.account;
  const { Batch, Response } = services.index;

  class AccountController {
    static getParams(query) {
      return {
        csv: query.save_csv,
        storage: query.save_storage
      }
    }
    static async getAccount(req, res){
      try {
        return res.json(new Response(new Account()));
      } catch (e) {
        console.error(e, req.traceID);
        return res.json(e.message);
      }
    }
    static async getAccountBatch(req, res){
      try {
        let accounts = Batch.generateBatch(req.query.items, Account);
        const params = AccountController.getParams(req.query);
        return Batch.response(res, 'getAccountBatch', params, accounts);
      } catch (e) {
        console.error(e, req.traceID);
        return res.json(e.message);
      }
    }
    static async getAccountIdBatch(req, res){
      try {
        let accounts = Batch.generateBatch(req.query.items, Account);
        const params = AccountController.getParams(req.query);
        let result = [];
        accounts.map(accounts => result.push(accounts.account));
        return Batch.response(res, 'getAccountIdBatch', params, result);
      } catch (e) {
        console.error(e, req.traceID);
        return res.json(e.message);
      }
    }
    static async getAccountId(req, res){
      try {
        return res.json(new Response(new Account(req.param.id).account));
      } catch (e) {
        console.error(e, req.traceID);
        return res.json(e.message);
      }
    }
    static async getAccountBalanceBatch(req, res){
      try {
        let accounts = Batch.generateBatch(req.query.items, Account);
        const params = AccountController.getParams(req.query);
        let result = [];
        accounts.map(accounts => result.push(accounts.balance));
        return Batch.response(res, 'getAccountBalanceBatch', params, result);
      } catch (e) {
        console.error(e, req.traceID);
        return res.json(e.message);
      }
    }
    static async getAccountBalance(req, res){
      try {
        return res.json(new Response(new Account(req.param.id).balance));
      } catch (e) {
        console.error(e, req.traceID);
        return res.json(e.message);
      }
    }
    static async getAccountTransactionsBatch(req, res){
      try {
        let accounts = Batch.generateBatch(req.query.items, Account);
        const params = AccountController.getParams(req.query);
        let result = [];
        accounts.map(accounts => result.push(accounts.transactions));
        return Batch.response(res, 'getAccountTransactionsBatch', params, result);
      } catch (e) {
        console.error(e, req.traceID);
        return res.json(e.message);
      }
    }
    static async getAccountTransactions(req, res){
      try {
        return res.json(new Response(new Account(req.param.id).transactions));
      } catch (e) {
        console.error(e, req.traceID);
        return res.json(e.message);
      }
    }
    static async getAccountLimitsBatch(req, res){
      try {
        let accounts = Batch.generateBatch(req.query.items, Account);
        const params = AccountController.getParams(req.query);
        let result = [];
        accounts.map(accounts => result.push(accounts.limits));
        return Batch.response(res, 'getAccountLimitsBatch', params, result);
      } catch (e) {
        console.error(e, req.traceID);
        return res.json(e.message);
      }
    }
    static async getAccountLimits(req, res){
      try {
        return res.json(new Response(new Account(req.param.id).limits));
      } catch (e) {
        console.error(e, req.traceID);
        return res.json(e.message);
      }
    }
  }

  return { AccountController };

};