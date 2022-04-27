const { Account } = require('./account');
const { CreditCard } = require('./creditCard');
const { InvoiceFinancings } = require('./invoiceFinancings');
const { Overdraft } = require('./opcredoverdraft');
const { Customer } = require('./customer');
const { Loans } = require('./opcredloans');

module.exports = {
  Account,
  CreditCard,
  InvoiceFinancings,
  Overdraft,
  Customer,
  Loans
};
