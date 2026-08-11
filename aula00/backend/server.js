const express = require("express")
const app =express()

//rota raiz a primeira
app.get('/', (req, res) => {
    res.send("bem vindo pae")
})
//rota dps da raiz 
app.get('/aluno', (req, res) => {
    res.send('rota ok')
})

//rota dinamica
app.get('/aluno/:nome', (req, res) => {
    const nome = req.params.nome
    res.send(`ola, ${nome}`)
})

app.get('/aluno/:a/:b', (req, res) => {
    const a = Number(req.params.a)
    const b = Number(req.params.b)
    const resultado = a + b
    res.send(`ola, ${resultado}`)
})

app.listen(3000, () => {
    console.log('servidor rodando em http://localhost:3000')
})