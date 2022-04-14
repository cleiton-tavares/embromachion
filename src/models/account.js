const { faker } = require('@faker-js/faker');

const AccountTypes = [
  'CONTA_DEPOSITO_A_VISTA',
  'CONTA_POUPANCA',
  'CONTA_PAGAMENTO_PRE_PAGA'
];
const AccountSubTypes = [
  'INDIVIDUAL',
  'CONJUNTA_SIMPLES',
  'CONJUNTA_SOLIDARIA'
];

const creditDebitTypes = [
  'TRANSACAO_EFETIVADA',
  'LANCAMENTO_FUTURO'
];

const transactionNames = [
  'CREDITO',
  'DEBITO'
];

const transactionTypes = [
  'TED',
  'DOC',
  'PIX',
  'TRANSFERENCIA_MESMA_INSTITUICAO',
  'BOLETO',
  'CONVENIO_ARRECADACAO',
  'PACOTE_TARIFA_SERVICOS',
  'TARIFA_SERVICOS_AVULSOS',
  'FOLHA_PAGAMENTO',
  'DEPOSITO',
  'SAQUE',
  'CARTAO',
  'ENCARGOS_JUROS_CHEQUE_ESPECIAL',
  'RENDIMENTO_APLIC_FINANCEIRA',
  'PORTABILIDADE_SALARIO',
  'RESGATE_APLIC_FINANCEIRA',
  'OPERACAO_CREDITO',
  'OUTROS'
];

const partiePersonTypes = ['PESSOA_NATURAL', 'PESSOA_JURIDICA'];

function randomize(size){
  return Math.floor(Math.random() * size)
}

class Account {
  constructor(id) {
    this.brandName = faker.company.companyName();
    this.companyCnpj = faker.random.number();
    this.type = AccountTypes[randomize(3)];
    this.compeCode = faker.random.number(999);
    this.branchCode = faker.random.number(9999);
    this.number = faker.random.number();
    this.checkDigit = faker.random.number(9);
    this.accountId = id || faker.random.uuid();
  }
  get account(){
    return {
      compeCode: this.compeCode,
      branchCode: this.branchCode,
      number: this.number,
      checkDigit: this.number,
      type: this.type,
      subtype: AccountSubTypes[randomize(3)],
      currency: "BRL"
    }
  }
  get balance(){
    return {
      availableAmount: faker.random.float({ precision: 0.1 }),
      availableAmountCurrency: "BRL",
      blockedAmount: faker.random.float({ precision: 0.1 }),
      blockedAmountCurrency: "BRL",
      automaticallyInvestedAmount: faker.random.float({ precision: 0.1 }),
      automaticallyInvestedAmountCurrency: "BRL"
    }
  }
  get transactions(){
    let items = [];
    const size = randomize(100);
    for(let i = 0; i < size; i++){
      items.push(this.transaction());
    }
    return items;
  }
  get limits(){
    return {
      overdraftContractedLimit: faker.random.float({ precision: 0.1 }),
      overdraftContractedLimitCurrency: "BRL",
      overdraftUsedLimit: faker.random.float({ precision: 0.1 }),
      overdraftUsedLimitCurrency: "BRL",
      unarrangedOverdraftAmount: faker.random.float({ precision: 0.1 }),
      unarrangedOverdraftAmountCurrency: "BRL"
    }
  }
  transaction(){
    return {
      transactionId: faker.random.uuid(),
      completedAuthorisedPaymentType: creditDebitTypes[randomize(2)],
      creditDebitType: transactionNames[randomize(2)],
      transactionName: `TXpRMU9UQ${faker.random.uuid()}WhZV2${faker.random.uuid()}`,
      type: transactionTypes[randomize(17)],
      amount: faker.random.float({ precision: 0.1 }),
      transactionCurrency: "BRL",
      transactionDate: faker.date.past(),
      partieCnpjCpf: faker.random.number(99999999999999),
      partiePersonType: partiePersonTypes[randomize(2)],
      partieCompeCode: this.compeCode,
      partieBranchCode: this.branchCode,
      partieNumber: this.number,
      partieCheckDigit: this.checkDigit
    }
  }
}

module.exports = { Account };