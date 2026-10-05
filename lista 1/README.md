# Instalação e execução do projeto

Para baixar as dependências do projeto, abra o terminal no VS Code com a pasta lista 1 selecionada.

Execute o comando:

`npm i`

Depois que as dependências forem instaladas, para executar o servidor, utilize o comando:

`node server.js`

Após iniciar o servidor, ele estará pronto para receber as requisições da API.

# Parte 1 — Node.js, NPM e Express

Para melhorar a qualidade da leitura e facilitar a visualização do conteúdo, recomendo mudar, no canto superior esquerdo, a opção **“Text Editor”** para **“Markdown Preview”**.

![imagem auxiliar](./imagens/parte%201/1.png)

Após clicar em “Text Editor”, selecione a opção “Markdown Preview”

![imagem auxiliar](./imagens/parte%201/2.png)



### 1. Explique com suas palavras o que é Node.js e qual é sua função em uma aplicação web. ?

Node.js é uma ferramenta que permite usar JavaScript fora do navegador. Ele é usado para criar o servidor de uma aplicação, receber requisições e enviar respostas para o usuário.

### 2. Qual é a diferença principal entre executar JavaScript no navegador e executar JavaScript com Node.js?

No navegador, o JavaScript é usado principalmente para controlar a parte visual e a interação da página.

Com Node.js, o JavaScript pode ser usado no servidor para criar APIs e processar informações.

### 3.  Explique o que é NPM.

NPM é o gerenciador de pacotes do Node.js. Ele serve para instalar bibliotecas e ferramentas que podemos usar no nosso projeto.

### 4. Explique a função do arquivo package.json.

O `package.json` guarda as informações do projeto, como o nome, a versão e as bibliotecas que foram instaladas.

### 5.  Explique por que a pasta node_modules normalmente não é enviada para o GitHub.

Porque ela pode ficar muito grande e contém todas as bibliotecas instaladas no projeto. Como essas bibliotecas podem ser instaladas novamente com `npm install`, não é necessário enviar a pasta inteira para o GitHub.



### 10. Crie a rota GET / que retorne uma mensagem informando que a API está funcionando.Teste GET / no Postman e registre o resultado no README.



![ ](./imagens/parte%201/3.png)

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Parte 2 — Rotas, requisições e respostas



### 11. Explique o que é uma rota (endpoint) em uma API.

Uma rota é um endereço usado para acessar uma determinada função da API.

### 12. Explique a função de req em uma rota Express.

`req` significa **requisição**. Ele contém as informações que o usuário enviou para o servidor.

Por exemplo, podemos usar `req` para pegar dados enviados pela URL ou pelo corpo da requisição.

### 13. Explique a função de res em uma rota Express.

`res` significa **resposta**. Ele é usado pelo servidor para enviar uma resposta de volta para quem fez a requisição.

### 14. Explique a diferença entre res.send() e res.json().

`res.send()` é usado para enviar uma resposta, como um texto.Já `res.json()` é usado para enviar informações em formato JSON.

### 15. Explique o significado de API REST ou RESTful dentro do conteúdo trabalhado.

REST é uma forma de organizar uma API. Ela utiliza os métodos HTTP para realizar diferentes ações sobre os dados.



### 16. Associe cada método HTTP à sua finalidade: GET, POST, PUT e DELETE.

**GET:** usado para buscar informações.

**POST:** usado para criar uma nova informação.

**PUT:** usado para atualizar uma informação existente.

**DELETE:** usado para excluir uma informação.

### 17. Explique a diferença entre req.body e req.params.

`req.body` é utilizado para acessar os dados enviados no corpo da requisição. Ele é muito usado quando precisamos enviar informações para o servidor, como dados de um cadastro ou de uma atualização.

Já `req.params` é utilizado para acessar valores que fazem parte da própria URL. Ele é usado principalmente quando precisamos identificar um item específico através de um valor informado no endereço da requisição.

### 18. Explique para que serve app.use(express.json()).

O `app.use(express.json())` serve para fazer o Express reconhecer e interpretar dados enviados em formato JSON nas requisições.

Quando um cliente envia informações para a API, esses dados precisam ser entendidos pelo servidor para que possam ser utilizados. O `express.json()` faz essa conversão e permite que os dados enviados sejam acessados pelo `req.body`.Por isso, ele é uma configuração importante em APIs que recebem dados em formato JSON, principalmente em requisições como POST e PUT.

# Parte 3 — Estrutura inicial de dados



### 21. Teste GET /jogos no Postman.

![ ](./imagens/parte%201/4.png)



### 26. Teste no Postman um ID existente e um ID inexistente. Inclua os dois testes no README.

id existente

![ ](./imagens/parte%201/5.png)

id inexistente

![ ](./imagens/parte%201/6.png)



# Parte 4 - POST: criação de dados



### 35. Teste no Postman um POST com dados obrigatórios ausentes. Os prints devem mostrar o Body enviado e a resposta recebida.

teste válido

![ ](./imagens/parte%201/7.png)

teste com erro

![ ](./imagens/parte%201/8.png)

# Parte 5 - PUT: atualização de dados

### 41. Teste no Postman uma atualização válida.

Antes da alteração

![ ](./imagens/parte%201/12.png)

Após a alteração



![ ](./imagens/parte%201/13.png)

### 42. Teste uma tentativa de atualização utilizando um ID inexistente.

![ ](./imagens/parte%201/14.png)

### 43. Explique por que o PUT é diferente do POST.

O `POST` é utilizado para criar um novo recurso. Já o PUT é utilizado para atualizar um recurso que já existe.No POST, a API recebe os dados necessários para criar um novo jogo e adicioná-lo ao array. No `PUT`, a API recebe o ID do jogo pela URL para localizar um jogo existente e recebe no Body os novos dados que serão utilizados na atualização.Portanto, a principal diferença é: POST cria um recurso novo, enquanto PUT atualiza um recurso existente.



# Parte 6 - DELETE: exclusão de dados



### 50. Explique por que, neste caso, o DELETE não precisa receber Body.

O método `DELETE` não precisa receber um Body porque a finalidade dessa requisição é apenas identificar e excluir um recurso que já existe.Nesse caso, o `ID` do jogo é enviado como parâmetro na própria URL e é utilizado pela API para localizar o jogo no array. Como o ID já é suficiente para identificar exatamente qual jogo deve ser removido, não é necessário enviar outras informações no Body.Portanto, o Body seria desnecessário, pois a API já possui todas as informações necessárias para realizar a exclusão através do ID.

###  51.Depois da exclusão, faça um GET /jogos e comprove que o item foi removido.

antes de deletar o id= 3



![ ](./imagens/parte%201/9.png)





após deletar o id=3



![ ](./imagens/parte%201/10.png)

![ ](./imagens/parte%201/11.png)



# Parte 7 - Rota especial e manipulação de arrays

### 55. Teste a rota no Postman.

![ ](./imagens/parte%201/15.png)

### 56. Explique a diferença entre find(), findIndex() e filter().

`find()`: procura um elemento que atenda a uma condição e retorna o primeiro elemento encontrado.

`findIndex()`: procura um elemento que atenda a uma condição e retorna a posição (índice) do primeiro elemento encontrado. Caso não encontre, retorna -1.

`filter()`: procura todos os elementos que atendem a uma condição e retorna um novo array contendo esses elementos.

### 57. Explique a diferença entre push() e splice().

`push()`: adiciona um ou mais elementos no final do array.

`splice()`: permite adicionar, remover ou substituir elementos em uma posição específica do array.



# Parte 8 - JSON: teoria e conversão

### 58. Explique o que é JSON.

JSON (JavaScript Object Notation) é um formato de texto utilizado para armazenar e transportar dados estruturados. Ele organiza informações em estruturas de objetos e arrays, sendo muito utilizado na comunicação entre aplicações, APIs e no armazenamento de dados.

### 59. Explique a função de JSON.parse().

A função `JSON.parse()` converte um texto no formato JSON em um objeto ou array JavaScript que pode ser manipulado pelo programa.

### 60. Explique a função de JSON.stringify().

A função `JSON.stringify()` converte um objeto ou array JavaScript em uma sequência de texto no formato JSON. É utilizada quando os dados precisam ser armazenados ou transmitidos em formato JSON.

### 61. Explique por que um arquivo JSON armazenado no disco precisa ser lido como texto antes de ser manipulado como objeto/array JavaScript.

Um arquivo .json é armazenado no disco como texto. Quando o programa realiza a leitura do arquivo, ele recebe esse conteúdo textual. Para utilizar os dados como objeto ou array JavaScript, é necessário converter esse texto para uma estrutura JavaScript utilizando `JSON.parse()`.

### 62. Explique a finalidade dos parâmetros null, 2 em JSON.stringify(dados, null, 2).

O parâmetro `null` indica que não será utilizada uma função de transformação para modificar os dados durante a conversão.

O parâmetro `2` define a quantidade de espaços utilizada para indentação do JSON, deixando o conteúdo organizado e mais fácil de ler.

### 63. Identifique pelo menos três regras de sintaxe de um JSON válido.

As propriedades de objetos devem estar entre aspas duplas.

Os valores de texto também devem estar entre aspas duplas.

Os elementos devem ser separados por vírgulas.

### 64. Explique a diferença entre um objeto JavaScript em memória e o texto armazenado em um arquivo .json.

Um objeto JavaScript em memória é uma estrutura que o programa consegue manipular diretamente durante sua execução, permitindo acessar, alterar, adicionar ou remover informações.Já o conteúdo de um arquivo .json é texto armazenado no disco seguindo a sintaxe do JSON. Para que esse conteúdo possa ser manipulado como objeto ou array pelo JavaScript, ele precisa ser convertido utilizando `JSON.parse()`. Da mesma forma, para armazenar um objeto JavaScript em um arquivo JSON, normalmente é necessário convertê-lo em texto utilizando `JSON.stringify()`.



# Parte 9 - Persistência em arquivo JSON

### 69. Faça GET /jogos retornar os dados lidos do arquivo, em vez de depender somente de um array criado diretamente no server.js.

![ ](./imagens/parte%201/16.png)

### 71. Depois de cadastrar um jogo pelo Postman, reinicie o servidor e comprove que o jogo continua cadastrado

antes do cadastro

![ ](./imagens/parte%201/17.png)



Após cadastro

![ ](./imagens/parte%201/18.png)

### 72. Explique por que os dados agora permanecem após o servidor ser desligado.

Os dados permanecem porque agora são salvos no arquivo `jogos.json`. Quando um jogo é cadastrado, alterado ou excluído, o arquivo é atualizado usando `fs.writeFile()`. Dessa forma, os dados ficam armazenados no disco e não apenas na memória do servidor. Por isso, mesmo após desligar e reiniciar o servidor, os dados continuam disponíveis.

Get

![ ](./imagens/parte%201/16.png)

Post

![ ](./imagens/parte%201/17.png)

Put

![ ](./imagens/parte%201/19.png)

Delete

![ ](./imagens/parte%201/20.png)



# Parte 10 - Manipulação de arquivo TXT e histórico

### 82. Teste GET /historico no Postman.

![ ](./imagens/parte%201/21.png)



### 83. Explique a diferença entre writeFile e appendFile.

`writeFile` é utilizado para escrever conteúdo em um arquivo, podendo substituir o conteúdo que já existe. Já appendFile adiciona o novo conteúdo ao final do arquivo, mantendo o conteúdo anterior.

### 84. Explique o que pode acontecer com o conteúdo anterior de um arquivo quando writeFile é utilizado sobre um arquivo que já existe.

Quando `writeFile` é utilizado em um arquivo que já existe, o conteúdo anterior pode ser apagado e substituído pelo novo conteúdo.

### 85. Explique a finalidade de readFile.

`readFile` é utilizado para ler o conteúdo de um arquivo, permitindo que o programa tenha acesso aos dados armazenados nele.

# Parte 11 - Exclusão de arquivos e módulo fs

### 86. Explique a função de fs.unlink().

`fs.unlink()` é utilizado para excluir um arquivo.

### 87. Explique o que acontece quando fs.unlink() é usado para remover um arquivo.

O arquivo é removido do sistema.

### 88. Associe as operações abaixo aos métodos de arquivo correspondentes: criar/escrever, ler, acrescentar e excluir.

Criar/escrever: `writeFile`

Ler: `readFile`

Acrescentar: `appendFile`

Excluir: `unlink`

### 89. Explique o que significa o erro ENOENT.

`ENOENT` significa que o arquivo ou diretório informado não foi encontrado.

### 90. Cite uma situação do projeto em que ENOENT poderia ocorrer.

Pode ocorrer quando o programa tenta acessar `jogos.json` ou `historico.txt` e o arquivo não existe no caminho informado.



# Parte 12 - path e caminhos de arquivos

### 91. Explique para que serve o módulo path do Node.js.

O módulo `path` serve para trabalhar com caminhos de arquivos e pastas de forma segura e compatível com o sistema operacional.

### 92. Explique por que escrever caminhos manualmente pode causar problemas entre Windows, Linux e macOS.

Porque cada sistema operacional pode utilizar uma forma diferente de representar os caminhos. O Windows utiliza `\`, enquanto Linux e macOS utilizam `/`. Isso pode causar erros quando o mesmo código é executado em sistemas diferentes.

### 95. Explique a vantagem de utilizar path.join() no projeto.

A principal vantagem é tornar os caminhos compatíveis com diferentes sistemas operacionais, evitando problemas causados pelas diferenças na forma de escrever caminhos de arquivos e pastas.



# Parte 13 - Tratamento de erros

### 101. Explique a diferença entre uma operação síncrona e uma operação assíncrona.

Uma operação síncrona executa uma tarefa e espera que ela termine antes de continuar a execução do código. Uma operação assíncrona permite que o programa continue executando outras tarefas enquanto a operação é realizada.

### 102. Explique o que acontece com o servidor quando uma operação síncrona demorada bloqueia a execução.

O servidor fica bloqueado durante a execução da operação. Enquanto ela não termina, o servidor pode deixar de atender outras requisições, causando lentidão e prejudicando o desempenho da aplicação.

### 103. Explique, de acordo com o conteúdo trabalhado, por que operações assíncronas são preferíveis em rotas de servidor.

Operações assíncronas são preferíveis porque permitem que o servidor continue atendendo outras requisições enquanto uma tarefa demorada está sendo executada. Isso melhora o desempenho e evita bloqueios na aplicação.

### 104. Explique o que é uma Promise.

Uma Promise é um objeto que representa o resultado futuro de uma operação assíncrona. Ela pode estar pendente, ser concluída com sucesso ou ser rejeitada caso ocorra um erro.

### 105. Explique a função de async.

O `async` é utilizada para indicar que uma função trabalha de forma assíncrona. Uma função `async` sempre retorna uma `Promise`.

### 106. Explique a função de await.

O `await` é utilizada dentro de uma função `async` para esperar o resultado de uma `Promise` antes de continuar a execução daquela função.

### 107. Compare readFileSync com readFile.

`readFileSync` realiza a leitura de forma síncrona, bloqueando a execução até que a leitura seja concluída. Já `readFile` realiza a leitura de forma assíncrona, permitindo que o servidor continue executando outras tarefas enquanto o arquivo é lido.

# Parte 15 - Middlewares

### 109. Explique o que é um middleware no Express.

Middleware é uma função que atua durante o processamento de uma requisição. Ele pode executar alguma tarefa, modificar a requisição ou resposta e decidir se o processamento deve continuar.

### 110. Explique por que express.json() pode ser considerado um middleware.

`express.json()` é um middleware porque atua sobre as requisições antes que elas cheguem às rotas. Ele interpreta dados enviados no formato JSON e disponibiliza essas informações em `req.body`.

### 111. Cite duas outras responsabilidades que um middleware pode assumir em uma aplicação.

Um middleware pode ser responsável por verificar autenticação e autorização dos usuários, registrar informações sobre as requisições, como método, URL e horário

### 112. Explique em que momento o middleware atua no fluxo requisição -> rota -> resposta.

O middleware atua entre a chegada da requisição e a execução da rota. Ele processa a requisição e, quando necessário, permite que ela continue até a rota, que então gera a resposta.

# Parte 16 - Sessões e Cookies - SOMENTE TEORIA

### 113. Explique por que o protocolo HTTP é considerado stateless.

Porque cada requisição HTTP é independente das anteriores, não mantendo informações sobre o estado do usuário.

### 114. Explique o que é um Cookie.

É um pequeno dado armazenado no navegador do usuário por um site.

### 115. Explique o que é uma Sessão.

É uma forma de manter informações temporárias sobre um usuário enquanto ele utiliza um sistema.

### 116. Onde os dados de um Cookie ficam armazenados?

No navegador do usuário.

### 117. Onde os dados de uma Sessão ficam armazenados?

Normalmente no servidor.

### 118. Explique como Cookie e Sessão podem trabalhar juntos para reconhecer um usuário entre diferentes requisições.

O Cookie armazena o identificador da sessão e o envia nas requisições, permitindo que o servidor identifique a sessão do usuário.

### 119. Cite um exemplo de uso adequado para Cookie.

Armazenar preferências do usuário.

### 120. Cite um exemplo de uso adequado para Sessão.

Manter o usuário autenticado em um sistema.

### 121. Explique, de forma conceitual, o que é Session ID.

É um identificador único usado para associar as requisições a uma determinada sessão de usuário.

# Parte 17 - Testes obrigatórios no Postman



### 123. Crie uma requisição para GET /jogos.

![ ](./imagens/parte%201/22.png)

### 124. Crie uma requisição para GET /jogos/:id.

![ ](./imagens/parte%201/23.png)

### 125. Crie uma requisição para POST /jogos com Body JSON.

![ ](./imagens/parte%201/24.png)

### 126. Crie uma requisição para PUT /jogos/:id com Body JSON.

![ ](./imagens/parte%201/25.png)

### 127. Crie uma requisição para DELETE /jogos/:id.

![ ](./imagens/parte%201/26.png)

### 128. Crie uma requisição para GET /jogos/melhores.

![ ](./imagens/parte%201/27.png)

### 129. Crie uma requisição para GET /historico.

![ ](./imagens/parte%201/28.png)

### 132. Inclua pelo menos um teste que resulte em status 404.

![ ](./imagens/parte%201/29.png)

### 133. Inclua pelo menos um teste que resulte em status 400.

![ ](./imagens/parte%201/30.png)

### 134. Inclua pelo menos um teste que resulte em status 201.

 ![ ](./imagens/parte%201/31.png)