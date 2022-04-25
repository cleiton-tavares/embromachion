
# Embromation 1.0

### Gerador de mocks open finance - https://github.com/cleiton-tavares/embromachion

[Open finance - Mock.postman_collection.json](Open_finance_-_Mock.postman_collection.json)

### Instalação
Para disponibilizar as APIs para uso, é necessário criar o arquivo de ambiente _.env_ 
baseado no arquivo de exemplo _.env-example_.

Preencher os campos
- PORT: Porta em que será acessada a aplicação local
- APP_NAME: Nome da aplicação da sua preferência
- STORAGE_CONTAINER: Nome do storage container de sua preferencia.

Os valores nos campos do arquivo de exemplo são uma forma padrão mas podem ser alterados como desejar. 

Por meio do terminal, navegar até a pasta do projeto e executar o comando abaixo para criar a imagem e contanier docker, 
e executa-lo:

_docker-compose up -d_

Com os containers do projeto executando, seguir os passos abaixo?
1. Abrir o aplicativo Azure Storage Explorer
2. Criar uma _conexão com Armazenamento Azure_ selecionando a opção _Emulador de armazenamento local_
3. Deixar os valores padrão na criação do local de armazenamento, clicar em _Avançar_ e _Conectar_
4. Após a criação com Armazenamento, Copiar o campo Cadeia de Conexão Primária e colar o valor no 
parametro _STORAGE_CONNECTION_STR_ dentro do arquivo _.env_
5. Dentro do campo _STORAGE_CONNECTION_STR_ identificar as ocorrências do IP _127.0.0.1_, e trocar por _azurite_ 
para o correto funcionamento
6. Dentro da nova conta local criada no Azure Data Explorer, criar um novo Blob Container e nomea-lo com o valor 
apontando na variavel _STORAGE_CONTAINER_ 

Para que o container executando consiga fazer a conexão com a emulação criada, e necessário atualizar a imagem e 
o container do docker criado, executando novamente o comando:

_docker-compose up -d_

### Utilização

Para consultar os dados gerados, salva-los em um csv e/ou salvar no container emulado Azure,
abra no aplicativo Postman, e importe o arquivo _Open finance - Mock.postman_collection.json_,
selecione o endpoint desejado, confirme a porta que sua aplicação está rodando, com o que está na barra de endereço 
do endpoint e faça a requisição, podendo alterar os parametros para para gerar csv, salvar no contanier ou exibir 
a resposta no postman.
