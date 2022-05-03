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

const WarrantyType = [
    "SEM_TIPO_GARANTIA", "CESSAO_DIREITOS_CREDITORIOS", "CAUCAO", "PENHOR", "ALIENACAO_FIDUCIARIA", "HIPOTECA",
    "OPERACOES_GARANTIDAS_PELO_GOVERNO", "OUTRAS_GARANTIAS_NAO_FIDEJUSSORIAS", "SEGUROS_ASSEMELHADOS",
    "GARANTIA_FIDEJUSSORIA", "BENS_ARRENDADOS", "GARANTIAS_INTERNACIONAIS", "OPERACOES_GARANTIDAS_OUTRAS_ENTIDADES",
    "ACORDOS_COMPENSACAO"
]

const WarrantySubType = [
    "ACOES_DEBENTURES", "APLICACOES_FINANCEIRAS_RENDA_FIXA", "APLICACOES_FINANCEIRAS_RENDA_VARIAVEL",
    "APOLICES_CREDITO_EXPORTACAO", "CCR_CONVENIO_CREDITOS_RECIPROCOS", "CHEQUES", "CIVIL", "DIREITOS_SOBRE_ALUGUEIS",
    "DEPOSITOS_A_VISTA_A_PRAZO_POUPANCA_OURO_TITULOS_PUBLICOS_FEDERAIS_ART_36",
    "DEPOSITO_TITULOS_EMITIDOS_ENTIDADES_ART_23", "DUPLICATAS", "EMD_ENTIDADES_MULTILATERAIS_DESENVOLVIMENTO_ART_37",
    "EQUIPAMENTOS", "ESTADUAL_OU_DISTRITAL", "FATURA_CARTAO_CREDITO", "FEDERAL",
    "FCVS_FUNDO_COMPENSACAO_VARIACOES_SALARIAIS", "FGI_FUNDO_GARANTIDOR_INVESTIMENTOS",
    "FGPC_FUNDO_GARANTIA_PROMOCAO_COMPETIT", "FGTS_FUNDO_GARANTIA_TEMPO_SERVICO", "FUNDO_GARANTIDOR_AVAL",
    "GARANTIA_PRESTADA_FGPC_LEI_9531_ART_37",
    "GARANTIA_PRESTADA_FUNDOS_QUAISQUER_OUTROS_MECANISMOS_COBERTURA_RISCO_CREDITO_ART_37",
    "GARANTIA_PRESTADA_TESOURO_NACIONAL_OU_BACEN_ART_37_BENS_DIREITOS_INTEGRANTES_PATRIMONIO_AFETACAO", "IMOVEIS",
    "IMOVEIS_RESIDENCIAIS", "MITIGADORAS", "MUNICIPAL", "NAO_MITIGADORAS", "NOTAS_PROMISSORIAS_OUTROS_DIREITOS_CREDITO",
    "OUTRAS", "OUTROS", "OUTROS_BENS", "OUTROS_GRAUS", "OUTROS_IMOVEIS", "OUTROS_SEGUROS_ASSEMELHADOS", "PESSOA_FISICA",
    "PESSOA_FISICA_EXTERIOR", "PESSOA_JURIDICA", "PESSOA_JURIDICA_EXTERIOR",
    "PRIMEIRO_GRAU_BENS_DIREITOS_INTEGRANTES_PATRIMONIO_AFETACAO", "PRIMEIRO_GRAU_IMOVEIS_RESIDENCIAIS",
    "PRIMEIRO_GRAU_OUTROS", "PRODUTOS_AGROPECUARIOS_COM_WARRANT", "PRODUTOS_AGROPECUARIOS_SEM_WARRANT",
    "SBCE_SOCIEDADE_BRASILEIRA_CREDITO_EXPORTAÇÃO", "SEGURO_RURAL", "TRIBUTOS_RECEITAS_ORCAMENTARIAS", "VEICULOS",
    "VEICULOS_AUTOMOTORES"
]


const NumberOfInstalmentsType = [
    "DIA", "SEMANA", "MES", "ANO", "SEM_PRAZO_TOTAL"
]

const ContractRemainingType = [
    "DIA", "SEMANA", "MES", "ANO", "SEM_PRAZO_REMANESCENTE"
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

    get warranties(){
        let warranties = [];
        const index = randomize(10);
        for(let i = 0;  i < index; i++){
            warranties.push({

                currency: faker.finance.currencyCode(),
                warrantyType: WarrantyType[randomize(14)],
                warrantySubType: WarrantySubType[randomize(50)],
                warrantyAmount: faker.datatype.float()
            })
       }
       return warranties
    }

    get scheduledInstalments(){
        return {
            typeNumberOfInstalments: NumberOfInstalmentsType[randomize(5)],
            totalNumberOfInstalments: faker.datatype.number(999999),
            typeContractRemaining: ContractRemainingType[randomize(5)],
            contractRemainingNumber: faker.datatype.number(99999),
            paidInstalments: faker.datatype.number(99),
            dueInstalments: faker.datatype.number(99),
            pastDueInstalments: faker.datatype.number(99),
            balloonPayments: [
                {
                    dueDate: formatDate(faker.date.past()),
                    currency: faker.finance.currencyCode(),
                    amount: parseFloat(faker.finance.amount())
                }
            ]
        }
    }

    get payments(){
        return {
            paidInstalments: faker.datatype.number(99),
            contractOutstandingBalance: parseFloat(faker.finance.amount()),
            releases: [
                {
                    paymentId: faker.random.alpha(43),
                    isOverParcelPayment: true,
                    instalmentId: faker.random.alpha(46),
                    paidDate: formatDate(faker.date.past()),
                    currency: faker.finance.currencyCode(),
                    paidAmount: parseFloat(faker.finance.amount()),
                    overParcel: {
                        fees: [
                            {
                                feeName: faker.random.alpha(28),
                                feeCode: faker.random.alpha(10),
                                feeAmount: parseFloat(faker.finance.amount()),
                            }
                        ],
                        charges: [
                            {
                                chargeType: ChargeType[randomize(7)],
                                chargeAdditionalInfo: faker.random.alpha(20),
                                chargeAmount: parseFloat(faker.finance.amount()),
                            }
                        ]
                    }
                }
            ]
        }
    }
}

module.exports = {Financing};