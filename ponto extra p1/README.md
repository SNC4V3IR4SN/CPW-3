# Respostas

## Questão 1

### O que representa `app`, `.get` e `'/login'`?

* **`app`**: representa a aplicação criada com o Express. É usada para configurar o servidor e suas rotas.

* **`.get`**: é o método usado para criar uma rota que recebe requisições HTTP do tipo **GET**. O GET geralmente é utilizado para consultar ou buscar informações.

* **`'/login'`**: representa o **endereço da rota**, também chamado de endpoint. É o caminho que o cliente acessa para fazer uma requisição.

### b) O que são `req` e `res`?

* **`req` (Request)**: representa a **requisição recebida pelo servidor**. Ele contém as informações que o cliente enviou, como parâmetros, dados e cabeçalhos da requisição.

* **`res` (Response)**: representa a **resposta que o servidor envia para o cliente**. Ele é utilizado para informar o resultado da requisição, enviar dados e definir o código de status da resposta.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Questão 2

### CRUD e métodos HTTP

CRUD representa quatro operações básicas realizadas em sistemas:

* **C — Create (Criar)** → **POST**
* **R — Read (Ler/Consultar)** → **GET**
* **U — Update (Atualizar)** → **PUT**
* **D — Delete (Excluir)** → **DELETE**

###  Quando utilizar 201 e 404?

* **201 — Created**: é utilizado quando uma requisição consegue **criar um novo recurso com sucesso**.

* **404 — Not Found**: é utilizado quando o **recurso solicitado não existe ou não foi encontrado**.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Questão 3

A diferença entre `fs.writeFile()` e `fs.appendFile()` está na maneira como elas escrevem no arquivo.

* **`fs.writeFile()`**: escreve um novo conteúdo no arquivo. Se o arquivo já possuir conteúdo, o conteúdo anterior é **substituído**.

* **`fs.appendFile()`**: adiciona um novo conteúdo **ao final do arquivo**, mantendo o conteúdo que já existia.

Portanto, se utilizarmos `writeFile()` em um arquivo que já possui informações, **as informações antigas serão apagadas e substituídas pelo novo conteúdo**.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Questão 4

`JSON.parse()` e `JSON.stringify()` fazem operações contrárias.

* **`JSON.parse()`**: transforma uma **string no formato JSON em um objeto JavaScript**.

* **`JSON.stringify()`**: transforma um **objeto JavaScript em uma string no formato JSON**.


