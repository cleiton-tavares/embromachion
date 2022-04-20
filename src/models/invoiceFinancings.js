const { faker } = require('@faker-js/faker');
 
const productType = ['DIREITOS_CREDITORIOS_DESCONTADOS'];

const productSubType = [
    'DESCONTO_DUPLICATAS', 
    'DESCONTO_CHEQUES', 
    'ANTECIPACAO_FATURA_CARTAO_CREDITO',
    'OUTROS_DIREITOS_CREDITORIOS_DESCONTADOS',
    'OUTROS_TITULOS_DESCONTADOS'
];

const instalmentPeriodicity = [
    'SEM_PERIODICIDADE_REGULAR', 
    'SEMANAL',
    'QUINZENAL',
    'MENSAL', 
    'BIMESTRAL', 
    'TRIMESTRAL', 
    'SEMESTRAL', 
    'ANUAL', 
    'OUTROS' 
];

const amortizationScheduled = [
    'SAC', 
    'PRICE', 
    'SAM', 
    'SEM_SISTEMA_AMORTIZACAO', 
    'OUTROS'
];

const taxType = [
    'NOMINAL', 
    'EFETIVA'
];

const interestRateType = [
    'SIMPLES', 
    'COMPOSTO' 
];

const taxPeriodicity =[ 
    'AM', 
    'AA' 
];

const calculation =[
    '21/252', 
    '30/360', 
    '30/365' 
];

const referentialRateIndexerType = [
    'SEM_TIPO_INDEXADOR', 
    'PRE_FIXADO', 
    'POS_FIXADO', 
    'FLUTUANTES', 
    'INDICES_PRECOS', 
    'CREDITO_RURAL', 
    'OUTROS_INDEXADORES'
];

const referentialRateIndexerSubType = [
    'SEM_SUB_TIPO_INDEXADOR', 
    'PRE_FIXADO', 
    'TR_TBF', 
    'TJLP', 
    'LIBOR', 
    'TLP', 
    'OUTRAS_TAXAS_POS_FIXADAS', 
    'CDI', 
    'SELIC', 
    'OUTRAS_TAXAS_FLUTUANTES', 
    'IGPM', 
    'IPCA', 
    'IPCC', 
    'OUTROS_INDICES_PRECO', 
    'TCR_PRE', 
    'TCR_POS', 
    'TRFC_PRE', 
    'TRFC_POS',
    'OUTROS_INDEXADORES'
];

const feeChargeType = [
    'UNICA', 
    'POR_PARCELA' 
];

const feeCharge = [
    'MINIMO', 
    'MAXIMO', 
    'FIXO', 
    'PERCENTUAL'
];

const chargeType = [
  'JUROS_REMUNERATORIOS_POR_ATRASO', 
  'MULTA_ATRASO_PAGAMENTO', 
  'JUROS_MORA_ATRASO', 
  'IOF_CONTRATACAO', 
  'IOF_POR_ATRASO', 
  'SEM_ENCARGO', 
  'OUTROS'
];

const warrantyType = [
  'SEM_TIPO_GARANTIA', 
  'CESSAO_DIREITOS_CREDITORIOS', 
  'CAUCAO', 
  'PENHOR', 
  'ALIENACAO_FIDUCIARIA', 
  'HIPOTECA', 
  'OPERACOES_GARANTIDAS_PELO_GOVERNO', 
  'OUTRAS_GARANTIAS_NAO_FIDEJUSSORIAS', 
  'SEGUROS_ASSEMELHADOS', 
  'GARANTIA_FIDEJUSSORIA', 
  'BENS_ARRENDADOS', 
  'GARANTIAS_INTERNACIONAIS', 
  'OPERACOES_GARANTIDAS_OUTRAS_ENTIDADES', 
  'ACORDOS_COMPENSACAO'
];

const warrantySubType = [
  'ACOES_DEBENTURES', 
  'APLICACOES_FINANCEIRAS_RENDA_FIXA', 
  'APLICACOES_FINANCEIRAS_RENDA_VARIAVEL', 
  'APOLICES_CREDITO_EXPORTACAO', 
  'CCR_CONVENIO_CREDITOS_RECIPROCOS', 
  'CHEQUES', 
  'CIVIL', 
  'DIREITOS_SOBRE_ALUGUEIS', 
  'DEPOSITOS_A_VISTA_A_PRAZO_POUPANCA_OURO_TITULOS_PUBLICOS_FEDERAIS_ART_36', 
  'DEPOSITO_TITULOS_EMITIDOS_ENTIDADES_ART_23', 
  'DUPLICATAS', 
  'EMD_ENTIDADES_MULTILATERAIS_DESENVOLVIMENTO_ART_37', 
  'EQUIPAMENTOS', 
  'ESTADUAL_OU_DISTRITAL', 
  'FATURA_CARTAO_CREDITO', 
  'FEDERAL', 
  'FCVS_FUNDO_COMPENSACAO_VARIACOES_SALARIAIS', 
  'FGI_FUNDO_GARANTIDOR_INVESTIMENTOS', 
  'FGPC_FUNDO_GARANTIA_PROMOCAO_COMPETIT', 
  'FGTS_FUNDO_GARANTIA_TEMPO_SERVICO', 
  'FUNDO_GARANTIDOR_AVAL', 
  'GARANTIA_PRESTADA_FGPC_LEI_9531_ART_37', 
  'GARANTIA_PRESTADA_FUNDOS_QUAISQUER_OUTROS_MECANISMOS_COBERTURA_RISCO_CREDITO_ART_37', 
  'GARANTIA_PRESTADA_TESOURO_NACIONAL_OU_BACEN_ART_37_BENS_DIREITOS_INTEGRANTES_PATRIMONIO_AFETACAO', 
  'IMOVEIS', 
  'IMOVEIS_RESIDENCIAIS', 
  'MITIGADORAS', 
  'MUNICIPAL', 
  'NAO_MITIGADORAS', 
  'NOTAS_PROMISSORIAS_OUTROS_DIREITOS_CREDITO', 
  'OUTRAS', 
  'OUTROS', 
  'OUTROS_BENS', 
  'OUTROS_GRAUS', 
  'OUTROS_IMOVEIS', 
  'OUTROS_SEGUROS_ASSEMELHADOS', 
  'PESSOA_FISICA', 
  'PESSOA_FISICA_EXTERIOR', 
  'PESSOA_JURIDICA', 'PESSOA_JURIDICA_EXTERIOR', 
  'PRIMEIRO_GRAU_BENS_DIREITOS_INTEGRANTES_PATRIMONIO_AFETACAO', 
  'PRIMEIRO_GRAU_IMOVEIS_RESIDENCIAIS', 
  'PRIMEIRO_GRAU_OUTROS',
  'PRODUTOS_AGROPECUARIOS_COM_WARRANT', 
  'PRODUTOS_AGROPECUARIOS_SEM_WARRANT', 
  'SBCE_SOCIEDADE_BRASILEIRA_CREDITO_EXPORTAÇÃO', 
  'SEGURO_RURAL', 
  'TRIBUTOS_RECEITAS_ORCAMENTARIAS', 
  'VEICULOS', 
  'VEICULOS_AUTOMOTORES' 
];

const typeNumberOfInstalments = [
  'DIA', 
  'SEMANA', 
  'MES', 
  'ANO', 
  'SEM_PRAZO_TOTAL'
];

const typeContractRemaining = [
  'DIA',
  'SEMANA', 
  'MES', 
  'ANO', 
  'SEM_PRAZO_REMANESCENTE' 
]; 


function randomize(size){
  return Math.floor(Math.random() * size)
}

class InvoiceFinancings {
 
  constructor(id) {
    this[0] = {
      contractId: id || faker.datatype.uuid(),
      brandName: faker.company.companyName(),
      companyCnpj: faker.random.number(99999999999999).toString(),
      productType: productType[randomize(1)],
      productSubType: productSubType[randomize(5)],
      ipocCode: faker.random.alphaNumeric(67,{
          bannedChars: [
          'a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k',
          'l','n', 'm', 'o', 'p', 'q', 'k', 'r', 's', 't', 
          'u', 'v', 'x', 'w', 'y', 'z' 
        ]})
    }
    
  }
  get contracts(){
    return {
      contractNumber: faker.random.number(9999999999999).toString(),
      ipocCode: faker.random.alphaNumeric(67,{
        bannedChars: [
        'a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k',
        'l','n', 'm', 'o', 'p', 'q', 'k', 'r', 's', 't', 
        'u', 'v', 'x', 'w', 'y', 'z' 
      ]}),
      productName: faker.random.alpha({ count: 2, upcase: true}),
      productType: productType[randomize(1)],
      productSubType: productSubType[randomize(5)],
      contractDate: faker.date.past(),
      disbursementDate: "NA",
      settlementDate: faker.date.past(),
      contractAmount: faker.random.float({ precision: 0.01 }),
      currency: "BRL",
      dueDate: faker.date.future(),
      instalmentPeriodicity: instalmentPeriodicity[randomize(9)],
      instalmentPeriodicityAdditionalInfo: "Informações adicionais sobre periodicidade",
      firstInstalmentDueDate: faker.date.soon(10),
      CET: faker.random.float({ min: 0, max: 1, precision: 0.01 }),
      amortizationScheduled: amortizationScheduled [randomize(5)],
      amortizationScheduledAdditionalInfo: "NA",
      interestRates: [
      {
        taxType: taxType[randomize(2)],
        interestRateType: interestRateType[randomize(2)],
        taxPeriodicity: taxPeriodicity[randomize(2)],
        calculation: calculation[randomize(3)],
        referentialRateIndexerType: referentialRateIndexerType[randomize(7)],
        referentialRateIndexerSubType: referentialRateIndexerSubType[randomize(19)],
        referentialRateIndexerAdditionalInfo: "Informações adicionais de Indexador ou tipo de taxa referencial",
        preFixedRate: faker.random.float({ min: 0, max: 1, precision: 0.0001 }),
        postFixedRate: faker.random.float({ min: 0, max: 1, precision: 0.0001 }),
        additionalInfo: "Informações adicionais"
      }
    ],
    contractedFees: [
      {
        feeName: "Excesso em Conta",
        feeCode: "EXCESSO_CONTA",
        feeChargeType: feeChargeType[randomize(2)],
        feeCharge: feeCharge[randomize(4)],
        feeAmount: faker.random.float({ precision: 0.01 }),
        feeRate: faker.random.number({min:0, max:100})
      }
    ],
    contractedFinanceCharges: [
      {
        chargeType: chargeType[randomize(7)],
        chargeAdditionalInfo: "Informações adicionais sobre encargos",
        chargeRate: faker.random.float({ min: 0, max: 1, precision: 0.01 }),
      }
    ]
    }
  }
  get warranties(){
    let warranties = [];
    const index = randomize(10);
    for(let i = 0;  i < index; i++){
      warranties.push({

        currency: "BRL",
        warrantyType: warrantyType[randomize(14)],
        warrantySubType: warrantySubType[randomize(50)],
        warrantyAmount: faker.random.float({ precision: 0.01 })
        
      })
      
    }
    return  warranties;
  }
  get scheduledInstalments(){
    return{
      typeNumberOfInstalments: typeNumberOfInstalments[randomize(5)],
      totalNumberOfInstalments: faker.random.number({max: 999999}),
      typeContractRemaining: typeContractRemaining[randomize(5)],
      contractRemainingNumber: faker.random.number({max: 999999}),
      paidInstalments:  faker.random.number({max: 999}),
      dueInstalments: faker.random.number({max: 999}),
      pastDueInstalments: faker.random.number({max: 999}),
      balloonPayments: [
        {
          dueDate: faker.date.soon(10),
          currency: "BRL",
          amount: faker.random.float({ precision: 0.01 })
        }
      ]
    }
  }
  get payments(){
    return{
      paidInstalments: faker.random.number({max: 999}),
      contractOutstandingBalance: faker.random.float({ precision: 0.01 }),
      releases: [
        {
          paymentId: "Parcela regular",
          isOverParcelPayment: faker.random.boolean(),
          instalmentId: faker.random.number(),
          paidDate: faker.date.past(),
          currency: "BRL",
          paidAmount: faker.random.float({ precision: 0.01 }),
          overParcel: {
            fees: [
              {
                feeName: "Excesso em Conta",
                feeCode: "EXCESSO_CONTA",
                feeAmount: faker.random.float({ precision: 0.01 })
              }
            ],
            charges: [
              {
                chargeType: chargeType[randomize(7)],
                chargeAdditionalInfo: "Informações adicionais",
                chargeAmount: faker.random.float({ precision: 0.01 })
              }
            ]
          }
        }
      ]
    }
  }
 
}

module.exports = { InvoiceFinancings };