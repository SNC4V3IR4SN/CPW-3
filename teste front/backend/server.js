const express = require('express')
const fs = require('node:fs')
const path = require('node:path')
const app = express()

app.use(express.urlencoded({extended: true }))

//1 rota para carregar o formulario html na porta 3000
app.get('/', (req, res ) => {
    //aponta para o index.html dentro da pasta frontend
    res.sendFile(path.join(__dirname, '../frontend/index.html'))
})

//2 rota post para receber e salvar o recado 
app.post('/recado', (req, res ) => {
    const {nome, mensagem} = req.body
    const linha = `${nome}:${mensagem}\n `
    fs.appendFileSync('mural.txt', linha, 'utf8')
    //redireciona para a tela  do mural 
    res.redirect('/mural') 
})

// 3 rota get para let o arquivo e exibir o mural
app.get('/mural', (req, res) => {
    if (!fs.existsSync('mural.txt')) {
        return res.send ('nenhum resultado cadastrado ainda. <br><br><a href='/'>enviar primeiro recado</a>')
    }
    const conteudo = fs.readFileSync('mural.txt', 'utf8')
    res.send(`<h1>Mural de Recado</h1>
        <pre>${conteudo}</pre>
        <a href= "/"> enviar outro recado`)

    
})

app.listen(3000, () =>console.log('servidor rodando em http://localhost:3000')) 