const express = require("express")
const app = express()

app.use(express.json())

const musicas = [
    { id: 1, titulo: "Dark Red", artista: "Steve Lacy", nota: 10, ano: 2017 },
    { id: 2, titulo: "Instant Crush", artista: "Daft Punk", nota: 9, ano: 2013 },
    { id: 3, titulo: "Chop Suey!", artista: "System of a Down", nota: 8, ano: 2001 },
    { id: 4, titulo: "Backstage", artista: "Matuê", nota: 7, ano: 2019 }
]

app.use((req, res, next) => {
    console.log("acesso:", req.method, req.url)
    next()
})



app.get('/musicas', (req, res) => {
    res.json(musicas)
})


app.get('/musicas/:id', (req, res) => {
    const id = Number(req.params.id)

    const musica = musicas.find(m => m.id === id)

    if (!musica) {
        return res.status(404).json({
            erro: "Música não encontrada"
        })
    }

    res.json(musica)
})



app.get('/top', (req, res) => {
    const musicasTop = musicas.filter(m => m.nota >= 9)

    res.json(musicasTop)
})


app.post('/musicas', (req, res) => {
    const { titulo, artista, nota } = req.body

    if (!titulo || !artista || nota === undefined) {
        return res.status(400).json({
            erro: "Todos os campos obrigatórios devem ser enviados"
        })
    }

    const novoId = musicas.length > 0
        ? Math.max(...musicas.map(m => m.id)) + 1
        : 1

    const novaMusica = {
        id: novoId,
        titulo,
        artista,
        nota
    }

    musicas.push(novaMusica)

    res.status(201).json(novaMusica)
})

// Remove uma música pelo ID
app.delete('/musicas/:id', (req, res) => {
    const id = Number(req.params.id)

    const indice = musicas.findIndex(m => m.id === id)

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Música não encontrada"
        })
    }

    musicas.splice(indice, 1)

    res.status(200).json({
        mensagem: "Música removida com sucesso"
    })
})

app.listen(3001, () => {
    console.log('servidor rodando em http://localhost:3001')
})