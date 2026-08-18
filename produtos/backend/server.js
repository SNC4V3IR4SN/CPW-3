const express = require("express")
const app = express()

const produtos = [
{ id: 1, nome: "Notebook", preco: 3500 },
{ id: 2, nome: "Mouse", preco: 80 },
{ id: 3, nome: "Teclado", preco: 150 },
{ id: 4, nome: "Monitor", preco: 1200 }
]

app.use((req, res, next) => {
    console.log("acesso:", req.method, req.url)
    next()
})



// mostrar todos os produtos
app.get('/produtos', (req, res) => {
    res.json(produtos)
})



// busca pelo maior preço
app.get('/produtos/caros/:valor', (req, res) => {
    const valor = Number(req.params.valor)

    const produtosCaros = produtos.filter(p => p.preco > valor)

    res.json(produtosCaros)
})



//busca pelo menor preço
app.get('/produtos/baratos/:valor', (req, res) => {
    const valor = Number(req.params.valor)

    const produtosBaratos = produtos.filter(p => p.preco < valor)

    res.json(produtosBaratos)
})



// busca pelo ID
app.get('/produtos/:id', (req, res) => {
    const id = Number(req.params.id)

    const produto = produtos.find(p => p.id === id)

    res.json(produto)
})




app.listen(3002, () => {
    console.log('servidor rodando em http://localhost:3002')
})