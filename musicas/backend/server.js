const express = require("express")
const app = express()

const musicas = [
    { id: 1, titulo: "Dark Red", artista: "Steve Lacy", nota: 10 },
    { id: 2, titulo: "Instant Crush", artista: "Daft Punk", nota: 9 },
    { id: 3, titulo: "Chop Suey!", artista: "System of a Down", nota: 8 },
    { id: 4, titulo: "Backstage", artista: "Matuê", nota: 7 }
]

app.use((req, res, next) => {
    console.log("acesso:", req.method, req.url)
    next()
})

// mostrar todas as músicas
app.get('/musicas', (req, res) => {
    res.json(musicas)
})

// busca por nota
app.get('/musicas/nota/:nota', (req, res) => {
    const nota = Number(req.params.nota)

    const musicasNota = musicas.filter(m => m.nota === nota)

    res.json(musicasNota)
})

// busca por título
app.get('/musicas/titulo/:titulo', (req, res) => {
    const titulo = req.params.titulo

    const musicasTitulo = musicas.filter(m => m.titulo === titulo)

    res.json(musicasTitulo)
})

// busca por artista
app.get('/musicas/artista/:artista', (req, res) => {
    const artista = req.params.artista

    const musicasArtista = musicas.filter(m => m.artista === artista)

    res.json(musicasArtista)
})

// busca pelo ID
app.get('/musicas/:id', (req, res) => {
    const id = Number(req.params.id)

    const musica = musicas.find(m => m.id === id)

    res.json(musica)
})

app.listen(3001, () => {
    console.log('servidor rodando em http://localhost:3001')
})