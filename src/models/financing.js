const {faker} = require('@faker-js/faker');

const ProductType = [
    "FINANCIAMENTOS", "FINANCIAMENTOS_RURAIS", "FINANCIAMENTOS_IMOBILIARIOS"
]
const ProductSubType = [
    "AQUISICAO_BENS_VEICULOS_AUTOMOTORES", "AQUISICAO_BENS_OUTROS_BENS", "MICROCREDITO", "CUSTEIO", "INVESTIMENTO",
    "INDUSTRIALIZACAO", "COMERCIALIZACAO", "FINANCIAMENTO_HABITACIONAL_SFH", "FINANCIAMENTO_HABITACIONAL_EXCETO_SFH"
]

function randomize(size) {
    return Math.floor(Math.random() * size)
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
}

module.exports = {Financing};