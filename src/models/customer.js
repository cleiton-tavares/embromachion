const {faker} = require('@faker-js/faker');

const MaritalStatusTypes = [
    "SOLTEIRO", "CASADO", "VIUVO", "SEPARADO_JUDICIALMENTE", "DIVORCIADO", "UNIAO_ESTAVEL", "OUTRO"
]

const SexType = [
    "FEMININO", "MASCULINO", "OUTRO", "NAO_DISPONIVEL"
]

const DocumentType = [
    "CNH", "RG", "NIF", "RNE", "OUTROS", "SEM_OUTROS_DOCUMENTOS"
]

const FiliationType = [
    "MAE", "PAI", "SEM_FILIACAO"
]

const CountrySubDivisionType = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ",
    "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO", "NA"
]

const PhoneType = [
    "FIXO", "MOVEL", "OUTRO"
]

const OccupationMainCodeType = [
    "RECEITA_FEDERAL", "CBO", "OUTRO"
]

const InformedIncomeFrequencyType = [
    "DIARIA", "SEMANAL", "QUINZENAL", "MENSAL", "BIMESTRAL", "TRIMESTRAL", "SEMESTRAL", "ANUAL", "SEM_FREQUENCIA_RENDA_INFORMADA", "OUTROS"
]

const InformedRevenueFrequencyType = [
    "DIARIA", "SEMANAL", "QUINZENAL", "MENSAL", "BIMESTRAL", "TRIMESTRAL", "SEMESTRAL", "ANUAL", "SEM_FREQUENCIA_RENDA_INFORMADA", "OUTROS"
]

const ProductServicesType = [
    "CONTA_DEPOSITO_A_VISTA", "CONTA_POUPANCA", "CONTA_PAGAMENTO_PRE_PAGA", "CARTAO_CREDITO", "OPERACAO_CREDITO", "SEGURO", "PREVIDENCIA", "INVESTIMENTO", "OPERACOES_CAMBIO", "CONTA_SALARIO", "CREDENCIAMENTO", "OUTROS"
]

const ProcuratorsTypePersonal = [
    "REPRESENTANTE_LEGAL", "PROCURADOR", "NAO_APLICA"
]

const ProcuratorsTypeBusiness = [
    "REPRESENTANTE_LEGAL", "PROCURADOR", "NAO_POSSUI"
]

const BusinessAccountType = [
    "CONTA_DEPOSITO_A_VISTA", "CONTA_POUPANCA", "CONTA_PAGAMENTO_PRE_PAGA", "SEM_TIPO_CONTA"
]

const SubTypePersonalAccount = [
    "INDIVIDUAL", "CONJUNTA_SIMPLES", "CONJUNTA_SOLIDARIA", "SEM_SUB_TIPO_CONTA"
]
const PersonType =[
    "PESSOA_NATURAL", "PESSOA_JURIDICA"
]

const ParticipationType = [
    "SOCIO", "ADMINISTRADOR"
]

const DocumentParticipationType = [
    "CPF", "PASSAPORTE", "OUTRO_DOCUMENTO_VIAGEM", "CNPJ"
]

function randomize(size) {
    return Math.floor(Math.random() * size)
}

function formatDate(date) {
    return [date.getFullYear(),
        date.getMonth().toString().padStart(2, '0'),
        date.getDay().toString().padStart(2, '0')].join('-')
}

class Customer {

    get personalIdentifications() {
        let companyCnpjArray = [];
        for (let i = 0; i < randomize(3); i++) {
            companyCnpjArray.push(faker.datatype.number(99999999999999).toString());
        }
        let otherDocumentsArray = [];
        for (let i = 0; i < randomize(3); i++) {
            otherDocumentsArray.push({
                type: DocumentType[randomize(6)],
                typeAdditionalInfo: faker.datatype.string(70),
                number: faker.datatype.number(99999999999),
                checkDigit: faker.datatype.string(2),
                additionalInfo: faker.datatype.string(50),
                expirationDate: formatDate(faker.date.future())
            });
        }
        let documentsArray = [];
        for (let i = 0; i < randomize(3); i++) {
            documentsArray.push({
                type: faker.datatype.string(10),
                number: faker.datatype.number(9999999999),
                expirationDate: formatDate(faker.date.future()),
                issueDate: formatDate(faker.date.past()),
                country: faker.address.country(),
                typeAdditionalInfo: faker.datatype.string(70)
            });
        }
        let nationalityArray = [];
        for (let i = 0; i < randomize(3); i++) {
            nationalityArray.push({
                otherNationalitiesInfo: faker.datatype.string(40),
                documents: documentsArray
            });
        }
        let filiationArray = [];
        for (let i = 0; i < 2; i++) {
            filiationArray.push({
                type: FiliationType[randomize(3)],
                civilName: faker.fake('{{name.firstName}} {{name.lastName}}'),
                socialName: "NA"
            });
        }
        return [{
            updateDateTime: faker.date.past(),
            personalId: faker.random.uuid(),
            brandName: faker.company.companyName(),
            civilName: faker.fake('{{name.firstName}} {{name.lastName}}'),
            socialName: faker.fake('{{name.firstName}} {{name.lastName}}'),
            birthDate: formatDate(faker.date.past()),
            maritalStatusCode: MaritalStatusTypes[randomize(7)],
            maritalStatusAdditionalInfo: MaritalStatusTypes[randomize(7)],
            sex: SexType[randomize(4)],
            companyCnpj: companyCnpjArray,
            documents: {
                cpfNumber: faker.datatype.number(99999999999).toString(),
                passportNumber: faker.datatype.number(99999999999999999999).toString(),
                passportCountry: "BRL",
                passportIssueDate: formatDate(faker.date.future())
            },
            otherDocuments: otherDocumentsArray,
            hasBrazilianNationality: faker.datatype.boolean(),
            nationality: nationalityArray,
            filiation: filiationArray,
            contacts: {
                postalAddresses: [
                    {
                        isMain: true,
                        address: faker.address.streetAddress(true),
                        additionalInfo: faker.address.secondaryAddress(),
                        districtName: faker.address.cityPrefix(),
                        townName: faker.address.cityName(),
                        ibgeTownCode: faker.datatype.number(9999999),
                        countrySubDivision: CountrySubDivisionType[randomize(28)],
                        postCode: faker.address.zipCode(),
                        country: faker.address.country(),
                        countryCode: faker.address.countryCode(),
                        geographicCoordinates: {
                            latitude: faker.address.latitude(),
                            longitude: faker.address.longitude()
                        }
                    }
                ],
                phones: [
                    {
                        isMain: true,
                        type: PhoneType[randomize(3)],
                        additionalInfo: faker.datatype.string(20),
                        countryCallingCode: faker.datatype.number(99),
                        areaCode: faker.datatype.number(99),
                        number: faker.datatype.number(99999999),
                        phoneExtension: faker.datatype.number(999)
                    }
                ],
                emails: [
                    {
                        isMain: true,
                        email: faker.internet.email()
                    }
                ]
            }
        }]
    }
    get personalQualifications(){
        return {
            updateDateTime: faker.date.past(),
            companyCnpj: faker.datatype.number(99999999999999).toString(),
            occupationCode: OccupationMainCodeType[randomize(3)],
            occupationDescription: faker.datatype.number(99).toString(),
            informedIncome: {
                frequency: InformedIncomeFrequencyType[randomize(10)],
                amount: faker.datatype.float({ precision: 0.2 }),
                currency: "BRL",
                date: formatDate(faker.date.past())
            },
            informedPatrimony: {
                amount: faker.datatype.float({ precision: 0.2 }),
                currency: "BRL",
                year: faker.date.past().getFullYear()
            }
        }
    }
    get personalFinancialRelations(){
        let productsServicesTypeArray = [];
        for (let i = 0; i < randomize(12); i++) {
            productsServicesTypeArray.push(ProductServicesType[randomize(12)]);
        }
        let procuratorsArray = [];
        for (let i = 0; i < randomize(3); i++) {
            procuratorsArray.push({
                type: ProcuratorsTypePersonal[randomize(3)],
                cpfNumber: faker.datatype.number(99999999999).toString(),
                civilName: faker.fake('{{name.firstName}} {{name.lastName}}'),
                socialName: faker.name.firstName()
            });
        }
        let accountArray = [];
        for (let i = 0; i < randomize(3); i++) {
            accountArray.push({
                compeCode: faker.datatype.number(999).toString(),
                branchCode: faker.datatype.number(9999).toString(),
                number: faker.datatype.number(9999999).toString(),
                checkDigit: faker.datatype.number(9).toString(),
                type: BusinessAccountType[randomize(4)],
                subtype: SubTypePersonalAccount[randomize(4)]
            });
        }

        return{
            updateDateTime: faker.date.past(),
            startDate: faker.date.recent(),
            productsServicesType: productsServicesTypeArray,
            productsServicesTypeAdditionalInfo: faker.datatype.string(100),
            procurators: procuratorsArray,
            accounts: accountArray
        }
    }
    get businessIdentifications(){
        let companyCnpjNumberArray = [];
        for (let i = 0; i < randomize(3); i++) {
            companyCnpjNumberArray.push(faker.datatype.number(99999999999999).toString());
        }
        return [{
            updateDateTime: faker.date.past(),
            businessId: faker.random.uuid(),
            brandName: faker.company.bs(),
            companyName: faker.company.companyName(),
            tradeName: faker.company.bsNoun(),
            incorporationDate: faker.date.past(),
            cnpjNumber: faker.datatype.number(99999999999999).toString(),
            companyCnpjNumber: companyCnpjNumberArray,
            otherDocuments: [
                {
                    type: faker.random.alpha(20),
                    number: faker.datatype.number(9999999999).toString(),
                    country: faker.address.countryCode('alpha-3'),
                    expirationDate: formatDate(faker.date.future())
                }
            ],
            parties: [
                {
                    personType: PersonType[randomize(2)],
                    type: ParticipationType[randomize(2)],
                    civilName: faker.fake('{{name.firstName}} {{name.lastName}}'),
                    socialName: faker.name.firstName(),
                    companyName: faker.company.companyName(),
                    tradeName: faker.company.bsNoun(),
                    startDate: faker.date.past(),
                    shareholding: faker.datatype.float({ precision: 0.1 }).toString(),
                    documentType: DocumentParticipationType[randomize(4)],
                    documentNumber: faker.datatype.number(9999999999).toString(),
                    documentAdditionalInfo: faker.random.alpha(50),
                    documentCountry: faker.address.countryCode('alpha-3'),
                    documentExpirationDate: formatDate(faker.date.future()),
                    documentIssueDate: formatDate(faker.date.past())
                }
            ],
            contacts: {
                postalAddresses: [
                    {
                        isMain: true,
                        address: faker.address.streetAddress(true),
                        additionalInfo: faker.address.secondaryAddress(),
                        districtName: faker.address.county(),
                        townName: faker.address.cityName(),
                        ibgeTownCode: faker.datatype.number(99999).toString(),
                        countrySubDivision: faker.address.county(),
                        postCode: faker.address.zipCode(),
                        country: faker.address.country(),
                        countryCode: faker.address.country('alpha-3'),
                        geographicCoordinates: {
                            latitude: faker.address.latitude(),
                            longitude: faker.address.longitude()
                        }
                    }
                ],
                phones: [
                    {
                        isMain: true,
                        type: PhoneType[randomize(3)],
                        additionalInfo: faker.random.alpha(40),
                        countryCallingCode: faker.phone.phoneNumber(),
                        areaCode: faker.datatype.number(99).toString(),
                        number: faker.phone.phoneNumber(),
                        phoneExtension: faker.datatype.number(999).toString()
                    }
                ],
                emails: [
                    {
                        isMain: true,
                        email: faker.internet.email()
                    }
                ]
            }
        }]
    }
    get businessQualifications(){
        return {
            updateDateTime: faker.date.past(),
            economicActivities: [
                {
                    code: faker.datatype.number(9999999),
                    isMain: true
                }
            ],
            informedRevenue: {
                frequency: InformedRevenueFrequencyType[randomize(10)],
                frequencyAdditionalInfo: faker.random.alpha(40),
                amount: parseFloat(faker.finance.amount()),
                currency: faker.finance.currencyCode(),
                year: faker.date.recent().getFullYear()
            },
            informedPatrimony: {
                amount: parseFloat(faker.finance.amount()),
                currency: faker.finance.currencyCode(),
                date: formatDate(faker.date.recent())
            }
        }
    }
    get businessFinancialRelations(){
        return {
            updateDateTime: faker.date.recent(),
            startDate: faker.date.past(),
            productsServicesType: [
                ProductServicesType[randomize(12)]
            ],
            procurators: [
                {
                    type: ProcuratorsTypeBusiness[randomize(3)],
                    cnpjCpfNumber: faker.datatype.number(99999999999).toString(),
                    civilName: faker.fake('{{name.firstName}} {{name.lastName}}'),
                    socialName: faker.fake('{{name.firstName}} {{name.lastName}}')
                }
            ],
            accounts: [
                {
                    compeCode: faker.datatype.number(999).toString(),
                    branchCode: faker.datatype.number(9999).toString(),
                    number: faker.datatype.number(99999999).toString(),
                    checkDigit: faker.datatype.number(9).toString(),
                    type: BusinessAccountType[randomize(4)]
                }
            ]
        }
    }

}

module.exports = {Customer};