const { Account } = require('./account');
const { CreditCard } = require('./creditCard');
const { InvoiceFinancings } = require('./invoiceFinancings');
const { Customer } = require('./customer');
const { Financing } = require('./financing');
const { Overdraft } = require('./opcredoverdraft');
const { Loans } = require('./opcredloans');

module.exports = {
  Account,
  CreditCard,
  InvoiceFinancings,
  Customer,
  Financing,
  Overdraft,
  Loans
};
