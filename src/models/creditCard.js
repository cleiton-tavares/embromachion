const { faker } = require('@faker-js/faker');

const productTypes = [
  'CLASSIC_NACIONAL',
  'CLASSIC_INTERNACIONAL',
  'GOLD',
  'PLATINUM',
  'INFINITE',
  'ELECTRON',
  'STANDARD_NACIONAL',
  'STANDARD_INTERNACIONAL',
  'ELETRONIC',
  'BLACK',
  'REDESHOP',
  'MAESTRO_MASTERCARD_MAESTRO',
  'GREEN',
  'BLUE',
  'BLUEBOX',
  'PROFISSIONAL_LIBERAL',
  'CHEQUE_ELETRONICO',
  'CORPORATIVO',
  'EMPRESARIAL',
  'COMPRAS',
  'BASICO_NACIONAL',
  'BASICO_INTERNACIONAL',
  'NANQUIM',
  'GRAFITE',
  'MAIS',
  'OUTROS'
];

const creditCardNetwork = [
  'VISA',
  'MASTERCARD',
  'AMERICAN_EXPRESS',
  'DINERS_CLUB',
  'HIPERCARD',
  'BANDEIRA_PROPRIA',
  'CHEQUE_ELETRONICO',
  'ELO',
  'OUTRAS'
];

function randomize(size){
  return Math.floor(Math.random() * size)
}

class CreditCard {
  constructor(id) {
    this.creditCardAccountId = id || faker.random.uuid();
    this.brandName = faker.company.companyName();
    this.companyCnpj = faker.random.number(99999999999999);
    this.name = faker.name.findName();
    this.productType = productTypes[randomize(25)];
    this.productAdditionalInfo = 'NA';
    this.creditCardNetwork = creditCardNetwork[randomize(8)]
    this.networkAdditionalInfo = 'NA';
  }
}

module.exports = { CreditCard };