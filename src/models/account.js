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

function formatDate(date) {
  return [date.getFullYear(),
    date.getMonth().toString().padStart(2, '0'),
    date.getDay().toString().padStart(2, '0')].join('-')
}


class Account {
  constructor(id) {
    this[0] = {
      brandName: faker.company.companyName(),
      companyCnpj: faker.datatype.number(99999999999999).toString(),
      type: AccountTypes[randomize(3)],
      compeCode: faker.datatype.number(999).toString(),
      branchCode: faker.datatype.number(9999).toString(),
      number: faker.datatype.number(999999999).toString(),
      checkDigit: faker.datatype.number(9).toString(),
      accountId: id || faker.datatype.uuid()
    };
  }

  get account(){
    return [this[0]]
  }

  get accountId(){
    return {
      compeCode: this[0].compeCode,
      branchCode: this[0].branchCode,
      number: this[0].number,
      checkDigit: this[0].checkDigit,
      type: this[0].type,
      subtype: AccountSubTypes[randomize(3)],
      currency: faker.finance.currencyCode()
    }
  }
  get balance(){
    return {
      availableAmount: parseFloat(faker.finance.amount()),
      availableAmountCurrency: faker.finance.currencyCode(),
      blockedAmount: parseFloat(faker.finance.amount()),
      blockedAmountCurrency: faker.finance.currencyCode(),
      automaticallyInvestedAmount: parseFloat(faker.finance.amount()),
      automaticallyInvestedAmountCurrency: faker.finance.currencyCode(),
    }
  }
  get transactions(){
    let items = [];
    const size = randomize(100);
    for(let i = 0; i < size; i++){
      items.push({

        transactionId: faker.datatype.uuid(),
        completedAuthorisedPaymentType: creditDebitTypes[randomize(2)],
        creditDebitType: transactionNames[randomize(2)],
        transactionName: faker.random.alpha(60).toUpperCase(),
        type: transactionTypes[randomize(17)],
        amount: parseFloat(faker.finance.amount()),
        transactionCurrency: faker.finance.currencyCode(),
        transactionDate: formatDate(faker.date.past()),
        partieCnpjCpf: faker.datatype.number(99999999999999).toString(),
        partiePersonType: partiePersonTypes[randomize(2)],
        partieCompeCode: this[0].compeCode,
        partieBranchCode: this[0].branchCode,
        partieNumber: this[0].number,
        partieCheckDigit: this[0].checkDigit

      })
    }
    return items;
  }
  get limits(){
    return {
      overdraftContractedLimit: parseFloat(faker.finance.amount()),
      overdraftContractedLimitCurrency: faker.finance.currencyCode(),
      overdraftUsedLimit: parseFloat(faker.finance.amount()),
      overdraftUsedLimitCurrency: faker.finance.currencyCode(),
      unarrangedOverdraftAmount: parseFloat(faker.finance.amount()),
      unarrangedOverdraftAmountCurrency: faker.finance.currencyCode()
    }
  }
}

module.exports = { Account };