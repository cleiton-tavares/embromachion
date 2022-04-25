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

const financeChargesTypes = [
  'JUROS_REMUNERATORIOS_ATRASO_PAGAMENTO_FATURA',
  'MULTA_ATRASO_PAGAMENTO_FATURA',
  'JUROS_MORA_ATRASO_PAGAMENTO_FATURA',
  'IOF',
  'SEM_ENCARGO',
  'OUTROS'
];

const paymentsValueTypes = [
  'VALOR_PAGAMENTO_FATURA_PARCELADO',
  'VALOR_PAGAMENTO_FATURA_REALIZADO',
  'OUTRO_VALOR_PAGO_FATURA'
];

const paymentModes = [
  'DEBITO_CONTA_CORRENTE',
  'BOLETO_BANCARIO',
  'AVERBACAO_FOLHA',
  'PIX'
];

const transactionsLineNames = [
  'CREDITO_A_VISTA',
  'CREDITO_PARCELADO',
  'SAQUE_CREDITO_BRASIL',
  'SAQUE_CREDITO_EXTERIOR',
  'EMPRESTIMO_CARTAO_CONSIGNADO',
  'OUTROS'
];

const creditDebitTypes = [
  'CREDITO',
  'DEBITO'
];

const transactionTypes = [
  'PAGAMENTO',
  'TARIFA',
  'OPERACOES_CREDITO_CONTRATADAS_CARTAO',
  'ESTORNO',
  'CASHBACK',
  'OUTROS'
];

const paymentTypes = [
  'A_VISTA',
  'A_PRAZO'
];

const feeTypes = [
  'ANUIDADE',
  'SAQUE_CARTAO_BRASIL',
  'SAQUE_CARTAO_EXTERIOR',
  'AVALIACAO_EMERGENCIAL_CREDITO',
  'EMISSAO_SEGUNDA_VIA',
  'TARIFA_PAGAMENTO_CONTAS',
  'SMS',
  'OUTRA'
];

const otherCreditsTypes = [
  'CREDITO_ROTATIVO',
  'PARCELAMENTO_FATURA',
  'EMPRESTIMO',
  'OUTRO'
];

const creditLineLimitType = [
  'LIMITE_CREDITO_TOTAL', 
  'LIMITE_CREDITO_MODALIDADE_OPERACAO'
];

const consolidationType = [
  'CONSOLIDADO', 
  'INDIVIDUAL'
];

const lineName = [
  'CREDITO_A_VISTA', 
  'CREDITO_PARCELADO', 
  'SAQUE_CREDITO_BRASIL', 
  'SAQUE_CREDITO_EXTERIOR', 
  'EMPRESTIMO_CARTAO_CONSIGNADO', 
  'OUTROS' 
];

const creditDebitType = [
  'CREDITO', 
  'DEBITO' 
];

const transactionType = [
  'PAGAMENTO', 
  'TARIFA', 
  'OPERACOES_CREDITO_CONTRATADAS_CARTAO', 
  'ESTORNO', 'CASHBACK', 
  'OUTROS'
];

const paymentType = [
  'A_VISTA', 
  'A_PRAZO'
];

const feeType = [
  'ANUIDADE', 
  'SAQUE_CARTAO_BRASIL', 
  'SAQUE_CARTAO_EXTERIOR', 
  'AVALIACAO_EMERGENCIAL_CREDITO', 
  'EMISSAO_SEGUNDA_VIA, TARIFA_PAGAMENTO_CONTAS', 
  'SMS', 
  'OUTRA'
];

const  otherCreditsType = [
  'CREDITO_ROTATIVO', 
  'PARCELAMENTO_FATURA', 
  'EMPRESTIMO', 
  'OUTROS' 
]
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
    this.creditCardNetwork = creditCardNetwork[randomize(8)];
    this.networkAdditionalInfo = 'NA';
  }
  get account(){
    return {
      name: faker.random.word(),
      productType: productTypes[randomize(25)],
      productAdditionalInfo: "NA",
      creditCardNetwork: creditCardNetwork[randomize(8)],
      networkAdditionalInfo: "NA",
      paymentMethod: [
        {
          identificationNumber: faker.random.number(9999).toString(),
          isMultipleCreditCard: true
        }
      ]
    }
  }
  get bills(){
    let bills = [];
    const index = randomize(10);
    for(let i = 0;  i < index; i++){
      bills.push({
        billId: `${faker.random.uuid()}7XXZTR`,
        dueDate: faker.date.past(),
        billTotalAmount: faker.random.float({ precision: 0.1 }),
        billTotalAmountCurrency: "BRL",
        billMinimumAmount: faker.random.float({ precision: 0.1 }),
        billMinimumAmountCurrency: "BRL",
        isInstalment: false,
        financeCharges: [
          {
            type: financeChargesTypes[randomize(5)],
            additionalInfo: "Informações Adicionais",
            amount: faker.random.float({ precision: 0.1 }),
            currency: "BRL"
          }
        ],
        payments: [
          {
            valueType: paymentsValueTypes[randomize(3)],
            paymentDate: faker.date.past(),
            paymentMode: paymentModes[randomize(4)],
            amount: faker.random.float({ precision: 0.1 }),
            currency: "BRL"
          }
        ]
      });
    }
    return bills;
  }
  get billId_transactions(){
    let transactions = [];
    const index = randomize(10);
    for(let i = 0;  i < index; i++){
      transactions.push({
        transactionId: `TXpRMU${faker.random.uuid()}FUazJSMDl`,
        identificationNumber: faker.random.number(9999).toString(),
        lineName: transactionsLineNames[randomize(5)],
        transactionName: "PGTO",
        billId: `${faker.random.uuid()}7XXZTR`,
        creditDebitType: creditDebitTypes[randomize(2)],
        transactionType: transactionTypes[randomize(5)],
        transactionalAdditionalInfo: "string",
        paymentType: paymentTypes[randomize(2)],
        feeType: feeTypes[randomize(7)],
        feeTypeAdditionalInfo: "string",
        otherCreditsType: otherCreditsTypes[randomize(4)],
        otherCreditsAdditionalInfo: "string",
        chargeIdentificator: "PARCELA_1",
        chargeNumber: faker.random.number(9),
        brazilianAmount: faker.random.float({ precision: 0.1 }),
        amount: faker.random.float({ precision: 0.1 }),
        currency: "BRL",
        transactionDate: faker.date.past(),
        billPostDate: faker.date.past(),
        payeeMCC: faker.random.number(9999)
      })
    }
    return transactions;
  }
  get limits(){
    return{
      creditLineLimitType: creditLineLimitType[randomize(2)],
      consolidationType: consolidationType[randomize(2)],
      identificationNumber:faker.random.number(9999).toString(),
      lineName: lineName[randomize(6)],
      lineNameAdditionalInf: "Informações adicionais e complementares",
      isLimitFlexible: faker.random.boolean(),
      limitAmountCurrency: "BRL",
      limitAmount: faker.random.float({ precision: 0.0001 }),
      usedAmountCurrency: "BRL",
      usedAmount: faker.random.float({ precision: 0.01 }),
      availableAmountCurrency: "BRL",
      availableAmount: faker.random.float({ precision: 0.01 })
    }
    
  }

  get transactions(){
    let transactions = [];
    const index = randomize(10);
    for(let i = 0;  i < index; i++){
      transactions.push({
        transactionId: `TXpRMU${faker.random.uuid()}FUazJSMDl`,
        identificationNumber: faker.random.number(9999).toString(),
        lineName: lineName[randomize(6)],
        transactionName: "PGTO",
        billId: `MTU0O${faker.random.uuid()}NmZkM`,
        creditDebitType: creditDebitType[randomize(2)],
        transactionType: transactionType[randomize(6)],
        transactionalAdditionalInfo: "Informações adicionais",
        paymentType: paymentType[randomize(2)],
        feeType: feeType[randomize(8)],
        feeTypeAdditionalInfo: "Informações adicionais",
        otherCreditsType: otherCreditsType[randomize(4)],
        otherCreditsAdditionalInfo: "Informações adicionais",
        chargeIdentificator: `PARCELA_${faker.random.number()}`,
        chargeNumber: faker.random.number(),
        brazilianAmount: faker.random.float({ precision: 0.01 }),
        amount: faker.random.float({ precision: 0.01 }),
        currency: "BRL",
        transactionDate: faker.date.past(),
        billPostDate: faker.date.past(),
        payeeMCC: faker.random.number({max: 9999})
      })
    } 
    
    return transactions;
  }
}

module.exports = { CreditCard };