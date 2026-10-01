# Parte 1 — Node.js, NPM e Express

Para melhorar a qualidade da leitura e facilitar a visualização do conteúdo, recomendo mudar, no canto superior esquerdo, a opção **“Text Editor”** para **“Markdown Preview”**.

![imagem auxiliar ](./imagens/parte%201/image.png)

Após clicar em “Text Editor”, selecione a opção “Markdown Preview”

![alt text](./imagens/parte%201/image-1.png)

### 1. O que é Node.js e qual sua função em uma aplicação web?

Node.js é uma ferramenta que permite usar JavaScript fora do navegador. Ele é usado para criar o servidor de uma aplicação, receber requisições e enviar respostas para o usuário.

### 2. Qual a diferença entre JavaScript no navegador e com Node.js?

No navegador, o JavaScript é usado principalmente para controlar a parte visual e a interação da página.
Com Node.js, o JavaScript pode ser usado no servidor para criar APIs e processar informações.

### 3. O que é NPM?

NPM é o gerenciador de pacotes do Node.js. Ele serve para instalar bibliotecas e ferramentas que podemos usar no nosso projeto.

### 4. Qual a função do arquivo package.json?

O `package.json` guarda as informações do projeto, como o nome, a versão e as bibliotecas que foram instaladas.

### 5. Por que a pasta node_modules não é enviada para o GitHub?

Porque ela pode ficar muito grande e contém todas as bibliotecas instaladas no projeto. Como essas bibliotecas podem ser instaladas novamente com `npm install`, não é necessário enviar a pasta inteira para o GitHub.

### 6. Como criar um novo projeto Node.js?

Primeiro, criamos uma pasta para o projeto e, dentro dela, usamos: npm init -y.Esse comando cria automaticamente o arquivo `package.json`.

### 7. Como instalar o Express?

Primeiro, precisamos abrir o terminal dentro da pasta escolhida para o projeto. Depois, colocamos o seguinte comando:`npm install express`
Esse comando vai instalar o Express dentro do nosso projeto e adicionar ele como uma dependência no arquivo package.json.O Express será instalado no projeto e aparecerá como uma dependência no `package.json`.

### 8. Como criar e configurar o Express?

Criamos um arquivo chamado `server.js` e colocamos:

```javascript
const express = require('express')

const app = express()

app.use(express.json())
```

Aqui estamos importando o Express e criando nossa aplicação.


### 9. Como fazer o servidor funcionar na porta 3000?

Podemos colocar a porta diretamente no código:

```javascript
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})
```

Também podemos colocar a porta em um arquivo `.env`.

No arquivo `.env`:

```env
PORT=3000
```

E no `server.js`, podemos usar essa variável para definir a porta do servidor.Assim, se precisarmos mudar a porta, não é necessário alterar diretamente o código.Assim, o servidor ficará disponível na porta `3000`.


### 10. Como criar a rota GET /?

Podemos criar a rota assim:

```javascript
app.get('/', (req, res) => {
    res.send('API está funcionando!');
})
```
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Parte 2 — Rotas, requisições e respostas



### 11. O que é uma rota (endpoint) em uma API?

Uma rota é um endereço usado para acessar uma determinada função da API.

### 12. Qual a função do `req`?

`req` significa **requisição**. Ele contém as informações que o usuário enviou para o servidor.

Por exemplo, podemos usar `req` para pegar dados enviados pela URL ou pelo corpo da requisição.

### 13. Qual a função do `res`?

`res` significa **resposta**. Ele é usado pelo servidor para enviar uma resposta de volta para quem fez a requisição.

### 14. Qual a diferença entre `res.send()` e `res.json()`?

`res.send()` é usado para enviar uma resposta, como um texto.

```javascript
res.send('API funcionando!');
```

Já `res.json()` é usado para enviar informações em formato JSON.

```javascript
res.json({
    nome: 'Produto',
    preco: 100
});
```

### 15. O que significa API REST ou RESTful?

REST é uma forma de organizar uma API. Ela utiliza os métodos HTTP para realizar diferentes ações sobre os dados.

Por exemplo:

```text
GET /produtos       → buscar produtos
POST /produtos      → criar produto
PUT /produtos/1     → atualizar produto
DELETE /produtos/1  → excluir produto
```

### 16. Qual a finalidade de cada método HTTP?

**GET:** usado para buscar informações.

**POST:** usado para criar uma nova informação.

**PUT:** usado para atualizar uma informação existente.

**DELETE:** usado para excluir uma informação.

### 17. Qual a diferença entre `req.body` e `req.params`?

`req.body` é utilizado para acessar os dados enviados no corpo da requisição. Ele é muito usado quando precisamos enviar informações para o servidor, como dados de um cadastro ou de uma atualização.

Já `req.params` é utilizado para acessar valores que fazem parte da própria URL. Ele é usado principalmente quando precisamos identificar um item específico através de um valor informado no endereço da requisição.

### 18. Para que serve `app.use(express.json())`?

O `app.use(express.json())` serve para fazer o Express reconhecer e interpretar dados enviados em formato JSON nas requisições.
Quando um cliente envia informações para a API, esses dados precisam ser entendidos pelo servidor para que possam ser utilizados. O `express.json()` faz essa conversão e permite que os dados enviados sejam acessados pelo `req.body`.Por isso, ele é uma configuração importante em APIs que recebem dados em formato JSON, principalmente em requisições como POST e PUT.




































iniciar projeto 
npm init -y
npm i express 