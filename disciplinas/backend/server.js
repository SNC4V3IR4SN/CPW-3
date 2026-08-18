const express = require("express")
const app = express()

app.use(express.json())


const disciplinas = []

app.use((req, res, next) => {
    console.log("acesso:", req.method, req.url)
    next()
})



app.get('/disciplinas', (req, res) => {
    res.json(disciplinas)
})




app.get('/disciplinas/:id', (req, res) => {
    const id = Number(req.params.id)

    const disciplina = disciplinas.find(d => d.id === id)

    res.json(disciplina)
})



app.post('/disciplinas', (req, res) => {
    const disciplina = req.body

    disciplinas.push(disciplina)

    res.json(disciplina)
})



app.put('/disciplinas/:id', (req, res) => {
    const id = Number(req.params.id)

    const disciplina = disciplinas.find(d => d.id === id)

    if (!disciplina) {
        return res.status(404).json({
            mensagem: "Disciplina não encontrada"
        })
    }

    disciplina.nome = req.body.nome
    disciplina.professor = req.body.professor
    disciplina.cargaHoraria = req.body.cargaHoraria

    res.json(disciplina)
})



app.delete('/disciplinas/:id', (req, res) => {
    const id = Number(req.params.id)

    const indice = disciplinas.findIndex(d => d.id === id)

    disciplinas.splice(indice, 1)

    res.json({ mensagem: "Disciplina excluída" })
})



app.listen(3004, () => {
    console.log('servidor rodando em http://localhost:3004')
})