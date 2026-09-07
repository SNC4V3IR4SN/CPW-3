const fs = require('fs/promises')
async function converterJsonParaTxt() {
    try {
        const textoBruto = await fs.readFile('json.json', 'utf8')

         //converte o json para objeto javascript
        const alunosObjeto = JSON.parse(textoBruto)

         const texto = alunosObjeto.map(aluno => {
            return `
            Nome: ${aluno.nome}
            Email: ${aluno.email}
            Telefone: ${aluno.telefone}`
        }).join('\n\n')
        
        await fs.writeFile('alunos_convertidos_JSON.txt', texto)
        console.log ("sucesso! arquivo 'alunos_convertidos_JSON.txt'  criado com estrutura de dados")

    }catch (erro) {
        console.log('erro de conversao' ,erro )

    }
    }
    console.log(converterJsonParaTxt())