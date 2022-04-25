const {faker} = require('@faker-js/faker');

const ProductType = [
    "FINANCIAMENTOS", "FINANCIAMENTOS_RURAIS", "FINANCIAMENTOS_IMOBILIARIOS"
]
const ProductSubType = [
    "AQUISICAO_BENS_VEICULOS_AUTOMOTORES", "AQUISICAO_BENS_OUTROS_BENS", "MICROCREDITO", "CUSTEIO", "INVESTIMENTO",
    "INDUSTRIALIZACAO", "COMERCIALIZACAO", "FINANCIAMENTO_HABITACIONAL_SFH", "FINANCIAMENTO_HABITACIONAL_EXCETO_SFH"
]
const InstalmentPeriodicityType = [
    "SEM_PERIODICIDADE_REGULAR", "SEMANAL", "QUINZENAL", "MENSAL", "BIMESTRAL", "TRIMESTRAL", "SEMESTRAL", "ANUAL",
    "OUTROS"
]

const AmortizationType = [
    "SAC", "PRICE", "SAM", "SEM_SISTEMA_AMORTIZACAO", "OUTROS"
]

const TaxType = [
    "NOMINAL", "EFETIVA"
]

const InterestRateType = [
    "SIMPLES", "COMPOSTO"
]
const TaxPeriodicityType = [
    "AM", "AA"
]

const CalculationType = [
    "21/252", "30/360", "30/365"
]

const ReferentialRateIndexerType = [
    "SEM_TIPO_INDEXADOR", "PRE_FIXADO", "POS_FIXADO", "FLUTUANTES", "INDICES_PRECOS", "CREDITO_RURAL",
    "OUTROS_INDEXADORES"
]

const ReferentialRateIndexerSubType = [
    "SEM_SUB_TIPO_INDEXADOR", "PRE_FIXADO", "TR_TBF", "TJLP", "LIBOR", "TLP", "OUTRAS_TAXAS_POS_FIXADAS",
    "CDI", "SELIC", "OUTRAS_TAXAS_FLUTUANTES", "IGPM", "IPCA", "IPCC", "OUTROS_INDICES_PRECO", "TCR_PRE",
    "TCR_POS", "TRFC_PRE", "TRFC_POS", "OUTROS_INDEXADORES"
]

const FeeChargeType = [
    "UNICA", "POR_PARCELA"
]

const FeeChargeFormType = [
    "MINIMO", "MAXIMO", "FIXO", "PERCENTUAL"
]

const ChargeType = [
    "JUROS_REMUNERATORIOS_POR_ATRASO", "MULTA_ATRASO_PAGAMENTO", "JUROS_MORA_ATRASO", "IOF_CONTRATACAO",
    "IOF_POR_ATRASO", "SEM_ENCARGO", "OUTROS"
]

function randomize(size) {
    return Math.floor(Math.random() * size)
}

function formatDate(date) {
    return [date.getFullYear(),
        date.getMonth().toString().padStart(2, '0'),
        date.getDay().toString().padStart(2, '0')].join('-')
}

class Financing {
    get contracts() {
        return [{
            contractId: faker.datatype.bigInt(9999999999999999999999999999999999999999).toString(),
            brandName: faker.company.companyName(),
            companyCnpj: faker.datatype.number(99999999999999).toString(),
            productType: ProductType[randomize(3)],
            productSubType: ProductSubType[randomize(12)],
            ipocCode: faker.datatype.bigInt(99999999999999999999999999999999999999999).toString()
        }]
    }

    get contractsId() {
        return {
            contractNumber: faker.datatype.number(9999999999999).toString(),
            ipocCode: faker.datatype.bigInt(99999999999999999999999999999999999999999).toString(),
            productName: faker.random.alpha(60),
            productType: ProductType[randomize(3)],
            productSubType: ProductSubType[randomize(12)],
            contractDate: formatDate(faker.date.past()),
            disbursementDate: formatDate(faker.date.past()),
            settlementDate: formatDate(faker.date.past()),
            contractAmount: parseFloat(faker.finance.amount()),
            currency: faker.finance.currencyCode(),
            dueDate: formatDate(faker.date.past()),
            instalmentPeriodicity: InstalmentPeriodicityType[randomize(9)],
            instalmentPeriodicityAdditionalInfo: faker.random.alpha(40),
            firstInstalmentDueDate: formatDate(faker.date.past()),
            CET: parseFloat(faker.finance.amount()),
            amortizationScheduled: AmortizationType[randomize(5)],
            amortizationScheduledAdditionalInfo: faker.random.alpha(30),
            interestRates: [
                {
                    taxType: TaxType[randomize(2)],
                    interestRateType: InterestRateType[randomize(2)],
                    taxPeriodicity: TaxPeriodicityType[randomize(2)],
                    calculation: CalculationType[randomize(3)],
                    referentialRateIndexerType: ReferentialRateIndexerType[randomize(7)],
                    referentialRateIndexerSubType: ReferentialRateIndexerSubType[randomize(19)],
                    referentialRateIndexerAdditionalInfo: faker.random.alpha(50),
                    preFixedRate: parseFloat(faker.finance.amount(0,1,2)),
                    postFixedRate: parseFloat(faker.finance.amount(0,1,2)),
                    additionalInfo: faker.random.alpha(30)
                }
            ],
            contractedFees: [
                {
                    feeName: faker.random.alpha(20),
                    feeCode: faker.random.alpha(10).toUpperCase(),
                    feeChargeType: FeeChargeType[randomize(2)],
                    feeCharge: FeeChargeFormType[randomize(4)],
                    feeAmount: parseFloat(faker.finance.amount()),
                    feeRate: parseFloat(faker.finance.amount(0,1,2))
                }
            ],
            contractedFinanceCharges: [
                {
                    chargeType: ChargeType[randomize(7)],
                    chargeAdditionalInfo: faker.random.alpha(40),
                    chargeRate: parseFloat(faker.finance.amount(0,1,2)),
                }
            ]
        }
    }
}

module.exports = {Financing};