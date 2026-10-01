const fs = require('fs/promises')

async function converterJsonParaTxt() {
    try {
        const textoBruto = await fs.readFile('json.json', 'utf8')

        // Converte o JSON para objeto JavaScript
        const disciplinaObjeto = JSON.parse(textoBruto)

        const texto = disciplinaObjeto.map(disciplina => {
            return `
            Disciplina: ${disciplina.disciplina}
            Código: ${disciplina["código"]}`
        }).join('\n\n')

        await fs.writeFile('disciplinas_convertidas_JSON.txt', texto)

        console.log("Sucesso! Arquivo 'disciplinas_convertidas_JSON.txt' criado com sucesso.")

    } catch (erro) {
        console.log('Erro de conversão:', erro)
    }
}

converterJsonParaTxt()