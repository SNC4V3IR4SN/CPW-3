const express = require('express')
const fs = require('fs/promises')
const path = require('path')

const app = express()

app.use(express.json())

const caminhoJogos = path.join(__dirname, 'dados', 'jogos.json')
const caminhoHistorico = path.join(__dirname, 'dados', 'historico.txt')


app.get('/', (req, res) => {
    return res.status(200).send('API está funcionando!')
})


app.get('/jogos', async (req, res) => {
    try {
        const texto = await fs.readFile(caminhoJogos, 'utf8')
        const jogos = JSON.parse(texto)

        return res.status(200).json(jogos)

    } catch (erro) {
        return res.status(500).json({
            erro: 'Erro ao ler os jogos'
        })
    }
})


app.get('/jogos/melhores', async (req, res) => {
    try {
        const texto = await fs.readFile(caminhoJogos, 'utf8')
        const jogos = JSON.parse(texto)

        const melhoresJogos = jogos.filter(jogo => jogo.nota >= 8)

        return res.status(200).json(melhoresJogos)

    } catch (erro) {
        return res.status(500).json({
            erro: 'Erro ao ler os jogos'
        })
    }
})


app.get('/jogos/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)

        const texto = await fs.readFile(caminhoJogos, 'utf8')
        const jogos = JSON.parse(texto)

        const jogo = jogos.find(jogo => jogo.id === id)

        if (!jogo) {
            return res.status(404).json({
                mensagem: 'Jogo não encontrado'
            })
        }

        return res.status(200).json(jogo)

    } catch (erro) {
        return res.status(500).json({
            erro: 'Erro ao buscar o jogo'
        })
    }
})


app.post('/jogos', async (req, res) => {
    try {
        const { titulo, ano, genero, nota } = req.body

        if (!titulo || !genero || !ano || nota === undefined) {
            return res.status(400).json({
                erro: 'Todos os campos obrigatórios devem ser enviados'
            })
        }

        const texto = await fs.readFile(caminhoJogos, 'utf8')
        const jogos = JSON.parse(texto)

        const novoId = jogos.length > 0
            ? Math.max(...jogos.map(jogo => jogo.id)) + 1
            : 1

        const novoJogo = {
            id: novoId,
            titulo,
            genero,
            ano,
            nota
        }

        jogos.push(novoJogo)

        await fs.writeFile(
            caminhoJogos,
            JSON.stringify(jogos, null, 2)
        )

        await fs.appendFile(
            caminhoHistorico,
            `JOGO CADASTRADO: ${titulo}\n`
        )

        return res.status(201).json(novoJogo)

    } catch (erro) {
        return res.status(500).json({
            erro: 'Erro ao cadastrar o jogo'
        })
    }
})


app.put('/jogos/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)

        const texto = await fs.readFile(caminhoJogos, 'utf8')
        const jogos = JSON.parse(texto)

        const jogo = jogos.find(jogo => jogo.id === id)

        if (!jogo) {
            return res.status(404).json({
                mensagem: 'Jogo não encontrado'
            })
        }

        const { titulo, genero, ano, nota } = req.body

        if (!titulo || !genero || !ano || nota === undefined) {
            return res.status(400).json({
                erro: 'Todos os campos obrigatórios devem ser enviados'
            })
        }

        jogo.titulo = titulo
        jogo.genero = genero
        jogo.ano = ano
        jogo.nota = nota

        await fs.writeFile(
            caminhoJogos,
            JSON.stringify(jogos, null, 2)
        )

        await fs.appendFile(
            caminhoHistorico,
            `JOGO ATUALIZADO: ${jogo.titulo}\n`
        )

        return res.status(200).json(jogo)

    } catch (erro) {
        return res.status(500).json({
            erro: 'Erro ao atualizar o jogo'
        })
    }
})


app.delete('/jogos/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)

        const texto = await fs.readFile(caminhoJogos, 'utf8')
        const jogos = JSON.parse(texto)

        const indice = jogos.findIndex(jogo => jogo.id === id)

        if (indice === -1) {
            return res.status(404).json({
                mensagem: 'Jogo não encontrado'
            })
        }

        const jogoRemovido = jogos[indice]

        jogos.splice(indice, 1)

        await fs.writeFile(
            caminhoJogos,
            JSON.stringify(jogos, null, 2)
        )

        await fs.appendFile(
            caminhoHistorico,
            `JOGO REMOVIDO: ${jogoRemovido.titulo}\n`
        )

        return res.status(200).json({
            mensagem: 'Jogo removido com sucesso'
        })

    } catch (erro) {
        return res.status(500).json({
            erro: 'Erro ao remover o jogo'
        })
    }
})


app.get('/historico', async (req, res) => {
    try {
        const historico = await fs.readFile(
            caminhoHistorico,
            'utf8'
        )

        return res.status(200).send(historico)

    } catch (erro) {
        return res.status(500).json({
            erro: 'Erro ao ler o histórico'
        })
    }
})


app.listen(3000, () => {
    console.log('servidor rodando em http://localhost:3000')
})