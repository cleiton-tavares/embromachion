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
        return {
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
        }
    }
}

module.exports = {Customer};