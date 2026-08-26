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
app.post('/materia', (req, res ) => {
    const {materia, mensagem} = req.body
    const linha = `${materia}:${mensagem}\n `
    fs.appendFileSync('materia.txt', linha, 'utf8')
    //redireciona para a tela  do mural 
    res.redirect('/materia') 
})

// 3 rota get para let o arquivo e exibir o mural
app.get('/materia', (req, res) => {
    if (!fs.existsSync('materia.txt')) {
        return res.send ('nenhum resultado cadastrado ainda. <br><br><a href='/'>enviar primeiro sua materia</a>')
    }
    const conteudo = fs.readFileSync('materia.txt', 'utf8')
    res.send(`<html>
        <head>
            <style>
                body {
                    font-family: Arial;
                    background-color: #000000;
                    padding: 30px;
                }

                h1 {
                    color: #fdf2f2;
                }

                pre {
                    background-color: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 5px #444141;
                }

                a {
                    color: blue;
                }
            </style>
        </head>

        <body>
            <h1>Histórico de Estudos</h1>

            <pre>${conteudo}</pre>

            <a href="/">Adicionar novo estudo</a>
        </body>
        </html>
    `)
    
})



app.listen(3000, () =>console.log('servidor rodando em http://localhost:3000')) 