const express = require("express")
const app =express()

app.use((req,res, next) => {
    console.log("acesso:", req.method, req.url)
    next()
})

//rota raiz a primeira
app.get('/', (req, res) => { 
    res.send(`<h1>Bem vindo pae</h1>
        <h2>Menu</h2>
        <a href="aluno/gabriel"> Ir para aluno</a><br>
        <a href="/status"> Ir para status</a><br>
        <a href="/soma/5/5"> fazer uma soma </a><br>
        <a href="/mult/5/5"> fazer uma multiplicação</a><br>
        <a href="/subt/5/5"> fazer uma subtrção</a>
        `)
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

app.get('/soma/:a/:b', (req, res) => {
    const a = Number(req.params.a)
    const b = Number(req.params.b)
    const resultado = a + b
    res.send(`resultado: ${resultado}`)
})

app.get('/mult/:a/:b', (req, res) => {
    const a = Number(req.params.a)
    const b = Number(req.params.b)
    const resultado = a * b
    res.send(`resultado:${resultado}`)
})

app.get('/subt/:a/:b', (req, res) => {
    const a = Number(req.params.a)
    const b = Number(req.params.b)
    const resultado = a - b
    res.send(`resultado:${resultado}`)
})

app.get("/status", (req,res) =>{
    res.json({
        servidor:"online",
        disciplina:"LP3",
        professora: "Milena",
        hora: new Date().toLocaleString()
    })
})

app.listen(3000, () => {
    console.log('servidor rodando em http://localhost:3000')
})