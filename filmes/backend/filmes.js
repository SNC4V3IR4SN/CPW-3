const express = require("express")
const app = express()

const filmes = [
    { id: 1, titulo: "A Origem", ano: 2010, nota: 10 },
    { id: 2, titulo: "A Familia do Futuro", ano: 2007, nota: 9 },
    { id: 3, titulo: "Homem-Aranha", ano: 2002, nota: 8 },
    { id: 4, titulo: "Interestelar", ano: 2014, nota: 10 },
    { id: 5, titulo: "Click", ano: 2006, nota: 9 }
]



app.use((req, res, next) => {
    console.log("acesso:", req.method, req.url)
    next()
})



// serve para mostrar todos os filmes
app.get('/filmes', (req, res) => {
    res.json(filmes)
})



// faz a busca pelo id 
// IMPORTANTE "http://localhost:3000/filmes/3" lembrar de usar barra ante do numero do id
app.get('/filmes/:id', (req, res) => {
    const id = Number(req.params.id)

    const filme = filmes.find(f => f.id === id)

    res.json(filme)
})


// faz a busca por nota
// IMPORTANTE "http://localhost:3000/filmes/nota/10" lembrar de usar barra ante do numero da nota
app.get('/filmes/nota/:nota', (req, res) => {
    const nota = Number(req.params.nota)

    const filmesNota = filmes.filter(f => f.nota === nota)

    res.json(filmesNota)
})



// faz a busca por ano
//NAO ESQUECER DE USAR A BARRA ANTES DO ANO, EXEMPLO: "http://localhost:3000/filmes/ano/2006"
app.get('/filmes/ano/:ano', (req, res) => {
    const ano = Number(req.params.ano)

    const filmesAno = filmes.filter(f => f.ano === ano)

    res.json(filmesAno)
})



app.listen(3000, () => {
    console.log('servidor rodando em http://localhost:3000')
})