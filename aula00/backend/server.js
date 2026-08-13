const express = require("express")
const app =express()

app.use((req,res, next) => {
    console.log("acesso:", req.method, req.url)
    next()
})

//rota raiz a primeira
app.get('/', (req, res) => { 
    res.send(`<h1>Menu</h1>
        <a href="aluno/gabriel"> Ir para aluno</a><br>
        <a href="/status"> Ir para status</a>`)
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