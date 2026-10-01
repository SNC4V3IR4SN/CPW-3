const express = require('express')
const app = express()   
app.use(express.json());

const jogos = [
    {
        id: 1,
        titulo: 'Tibia',
        genero: 'Rpg',
        ano: 1997,
        nota: 10
    },
    {
        id: 2,
        titulo: 'Minecraft',
        genero: 'Sandbox',
        ano: 2011,
        nota: 9.0
    },
    {
        id: 3,
        titulo: 'Counter Strike',
        genero: 'Fps',
        ano: 2000,
        nota: 10
    }
]

app.get('/jogos', (req, res) => {
    res.json(jogos)
})