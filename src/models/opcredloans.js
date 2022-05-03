const { faker } = require('@faker-js/faker');

function randomize(size) {
    return Math.floor(Math.random() * size)
}

const productTypes = ['EMPRESTIMOS']

const productSubType = [ "HOME_EQUITY", 
"CHEQUE_ESPECIAL", 
"CONTA_GARANTIDA", 
"CAPITAL_GIRO_TETO_ROTATIVO", 
"CREDITO_PESSOAL_SEM_CONSIGNACAO", 
"CREDITO_PESSOAL_COM_CONSIGNACAO", 
"MICROCREDITO_PRODUTIVO_ORIENTADO", 
"CAPITAL_GIRO_PRAZO_VENCIMENTO_ATE_365_DIAS", 
"CAPITAL_GIRO_PRAZO_VENCIMENTO_SUPERIOR_365_DIAS" ]

const instalmentPeriodicity = [ "SEM_PERIODICIDADE_REGULAR", 
    "SEMANAL", 
    "QUINZENAL", 
    "MENSAL", 
    "BIMESTRAL", 
    "TRIMESTRAL", 
    "SEMESTRAL", 
    "ANUAL", 
    "OUTROS" ]

const amortizationScheduled = [ "SAC", 
    "PRICE", 
    "SAM", 
    "SEM_SISTEMA_AMORTIZACAO", 
    "OUTROS" ]

const taxType = [ "NOMINAL", "EFETIVA" ]
const interestRateType = [ "SIMPLES", "COMPOSTO" ]
const taxPeriodicity = [ "AM", "AA" ]
const calculation = [ "21/252", 
    "30/360", 
    "30/365" ]
const referentialRateIndexerType = [ "SEM_TIPO_INDEXADOR", 
    "PRE_FIXADO", 
    "POS_FIXADO", 
    "FLUTUANTES", 
    "INDICES_PRECOS", 
    "CREDITO_RURAL", 
    "OUTROS_INDEXADORES" ]
const referentialRateIndexerSubType = [ "SEM_SUB_TIPO_INDEXADOR", 
    "PRE_FIXADO", 
    "TR_TBF", 
    "TJLP", 
    "LIBOR", 
    "TLP", 
    "OUTRAS_TAXAS_POS_FIXADAS", 
    "CDI", 
    "SELIC", 
    "OUTRAS_TAXAS_FLUTUANTES", 
    "IGPM", 
    "IPCA", 
    "IPCC", 
    "OUTROS_INDICES_PRECO", 
    "TCR_PRE", 
    "TCR_POS", 
    "TRFC_PRE", 
    "TRFC_POS", 
    "OUTROS_INDEXADORES" ]

const feeChargeType = [ "UNICA", "POR_PARCELA" ]
const feeCharge = [ "MINIMO", 
    "MAXIMO", 
    "FIXO", 
    "PERCENTUAL" ]

const chargeType = [ "JUROS_REMUNERATORIOS_POR_ATRASO", 
    "MULTA_ATRASO_PAGAMENTO", 
    "JUROS_MORA_ATRASO", 
    "IOF_CONTRATACAO", 
    "IOF_POR_ATRASO", 
    "SEM_ENCARGO", 
    "OUTROS" ]

const warrantyType = [ "SEM_TIPO_GARANTIA", 
    "CESSAO_DIREITOS_CREDITORIOS", 
    "CAUCAO", 
    "PENHOR", 
    "ALIENACAO_FIDUCIARIA", 
    "HIPOTECA", 
    "OPERACOES_GARANTIDAS_PELO_GOVERNO", 
    "OUTRAS_GARANTIAS_NAO_FIDEJUSSORIAS", 
    "SEGUROS_ASSEMELHADOS", 
    "GARANTIA_FIDEJUSSORIA", 
    "BENS_ARRENDADOS", 
    "GARANTIAS_INTERNACIONAIS", 
    "OPERACOES_GARANTIDAS_OUTRAS_ENTIDADES", 
    "ACORDOS_COMPENSACAO" ]

const warrantySubType = [ "ACOES_DEBENTURES", 
    "APLICACOES_FINANCEIRAS_RENDA_FIXA", 
    "APLICACOES_FINANCEIRAS_RENDA_VARIAVEL", 
    "APOLICES_CREDITO_EXPORTACAO", 
    "CCR_CONVENIO_CREDITOS_RECIPROCOS", 
    "CHEQUES", 
    "CIVIL", 
    "DIREITOS_SOBRE_ALUGUEIS", 
    "DEPOSITOS_A_VISTA_A_PRAZO_POUPANCA_OURO_TITULOS_PUBLICOS_FEDERAIS_ART_36", 
    "DEPOSITO_TITULOS_EMITIDOS_ENTIDADES_ART_23", 
    "DUPLICATAS", 
    "EMD_ENTIDADES_MULTILATERAIS_DESENVOLVIMENTO_ART_37", 
    "EQUIPAMENTOS", 
    "ESTADUAL_OU_DISTRITAL", 
    "FATURA_CARTAO_CREDITO", 
    "FEDERAL", 
    "FCVS_FUNDO_COMPENSACAO_VARIACOES_SALARIAIS", 
    "FGI_FUNDO_GARANTIDOR_INVESTIMENTOS", 
    "FGPC_FUNDO_GARANTIA_PROMOCAO_COMPETIT", 
    "FGTS_FUNDO_GARANTIA_TEMPO_SERVICO", 
    "FUNDO_GARANTIDOR_AVAL", 
    "GARANTIA_PRESTADA_FGPC_LEI_9531_ART_37", 
    "GARANTIA_PRESTADA_FUNDOS_QUAISQUER_OUTROS_MECANISMOS_COBERTURA_RISCO_CREDITO_ART_37", 
    "GARANTIA_PRESTADA_TESOURO_NACIONAL_OU_BACEN_ART_37_BENS_DIREITOS_INTEGRANTES_PATRIMONIO_AFETACAO", 
    "IMOVEIS", 
    "IMOVEIS_RESIDENCIAIS", 
    "MITIGADORAS", 
    "MUNICIPAL", 
    "NAO_MITIGADORAS", 
    "NOTAS_PROMISSORIAS_OUTROS_DIREITOS_CREDITO", 
    "OUTRAS", 
    "OUTROS", 
    "OUTROS_BENS", 
    "OUTROS_GRAUS", 
    "OUTROS_IMOVEIS", 
    "OUTROS_SEGUROS_ASSEMELHADOS", 
    "PESSOA_FISICA", 
    "PESSOA_FISICA_EXTERIOR", 
    "PESSOA_JURIDICA", 
    "PESSOA_JURIDICA_EXTERIOR", 
    "PRIMEIRO_GRAU_BENS_DIREITOS_INTEGRANTES_PATRIMONIO_AFETACAO", 
    "PRIMEIRO_GRAU_IMOVEIS_RESIDENCIAIS", 
    "PRIMEIRO_GRAU_OUTROS", 
    "PRODUTOS_AGROPECUARIOS_COM_WARRANT", 
    "PRODUTOS_AGROPECUARIOS_SEM_WARRANT", 
    "SBCE_SOCIEDADE_BRASILEIRA_CREDITO_EXPORTAÇÃO", 
    "SEGURO_RURAL", 
    "TRIBUTOS_RECEITAS_ORCAMENTARIAS", 
    "VEICULOS", 
    "VEICULOS_AUTOMOTORES" ]

const typeNumberOfInstalments = [ "DIA", 
    "SEMANA", 
    "MES", 
    "ANO", 
    "SEM_PRAZO_TOTAL" ]
const typeContractRemaining = [ "DIA", 
    "SEMANA", 
    "MES", 
    "ANO", 
    "SEM_PRAZO_REMANESCENTE" ]

class Loans {
    constructor(id) {
        this[0] = {
            contractId: id || faker.random.uuid(),
            brandName: faker.company.companyName(),
            companyCnpj: faker.random.number(99999999999999),
            productType: productTypes[0],
            productSubType: productSubType[randomize(9)],
            ipocCode: faker.random.number(9999999999999)
        }
    }
    get contract(){
        return {
            contractNumber: this[0].contractId,
            ipocCode: this[0].ipocCode,
            productName: "AD",
            productType: productTypes[0],
            productSubType: productSubType[randomize(9)],
            contractDate: faker.date.past(),
            disbursementDate: faker.date.past(),
            settlementDate: faker.date.past(),
            contractAmount: faker.random.number(9999999),
            currency: "BRL",
            dueDate: faker.date.future(), 
            instalmentPeriodicity: instalmentPeriodicity[randomize(9)],
            instalmentPeriodicityAdditionalInfo: faker.lorem.words(50),
            firstInstalmentDueDate: faker.date.future(),
            CET: faker.random.number(1),
            amortizationScheduled: amortizationScheduled[randomize(5)],
            amortizationScheduledAdditionalInfo: faker.lorem.words(50),
            cnpjConsignee:faker.random.number(99999999999999),
            interestRates: [
                {
                    taxType: taxType[randomize(2)],
                    interestRateType: interestRateType[randomize(2)],
                    taxPeriodicity: taxPeriodicity[randomize(2)],
                    calculation: taxPeriodicity[randomize(3)],
                    referentialRateIndexerType: referentialRateIndexerType[randomize(7)],
                    referentialRateIndexerSubType: referentialRateIndexerSubType[randomize(19)],
                    referentialRateIndexerAdditionalInfo: faker.lorem.words(50),
                    preFixedRate: faker.random.number(1),
                    postFixedRate: faker.random.number(1),
                    additionalInfo: faker.lorem.words(50)
                }
            ],
            contractedFees: [
                {
                    feeName: faker.lorem.word(10),
                    feeCode: faker.lorem.word(10),
                    feeChargeType: feeChargeType[randomize(2)],
                    feeCharge: feeCharge[randomize(4)],
                    feeAmount: faker.random.number(99999),
                    feeRate: faker.random.number(99)

                }
            ],
            contractedFinanceCharges: [
                {
                    chargeType: chargeType[randomize(7)],
                    chargeAdditionalInfo: faker.lorem.text(),
                    chargeRate: faker.random.number(1)
                }
            ]
        }
      }
      get warranty(){
        return {
          currency: "BRL",
          warrantyType: warrantyType[randomize(14)],
          warrantySubType: warrantySubType[randomize(50)],
          warrantyAmount: faker.random.number(99999)
        }
      }
      get instalments(){
        return {
            typeNumberOfInstalments: typeNumberOfInstalments[randomize(5)],
            totalNumberOfInstalments: faker.random.number(999999),
            typeContractRemaining: typeContractRemaining[randomize(5)],
            contractRemainingNumber: faker.random.number(999999),
            paidInstalments: faker.random.number(99),
            dueInstalments: faker.random.number(99),
            pastDueInstalments: faker.random.number(99),
            balloonPayments: [
                {
                    dueDate:faker.date.future(),
                    currency: "BRL",
                    amount: faker.random.number(999999)
                }
            ]
        }
      }
      get payments(){
        return {
            paidInstalments: faker.random.number(99),
            contractOutstandingBalance: faker.random.number(999999),
            releases: [
                {
                    paymentId: faker.random.uuid(),
                    isOverParcelPayment: faker.random.boolean(),
                    instalmentId: faker.random.uuid(),
                    paidDate: faker.date.past(),
                    currency: "BRL",
                    paidAmount: faker.random.number(999999),
                    overParcel: [
                        {
                            fees: [
                                {
                                    feeName: faker.lorem.words(5),
                                    feeCode: faker.lorem.words(5),
                                    feeAmount: faker.random.number(999999)
                                }
                            ],
                            charges: [
                                {
                                    chargeType: chargeType[randomize(7)],
                                    chargeAdditionalInfo: faker.lorem.words(5),
                                    chargeAmount: faker.random.number(999999)
                                }
                            ]

                        }
                    ]

                }
            ]
        }
      }

    }


    module.exports = { Loans };