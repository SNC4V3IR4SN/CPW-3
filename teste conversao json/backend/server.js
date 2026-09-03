const fs = require('fs/promises')
async function converterTxtParaJson() {
    try {
        const textoBruto = await fs.readFile('dados_brutos.txt', 'utf8')
        //quebra o textoao em um array de linhas 
        //trim() e o filter ajudam a ignorar linhas vazias 
        const linhas = textoBruto.split ('\n').filter(linhas => linhas.trim() !== '')
        //para cada linha e transforma num objeto js 
        const alunosObjeto = linhas.map(linha => {
            //divide os dados pela virgula 
            const [nome, nota, curso] = linha.split(',')
            return {
                nome:nome.trim(),
                nota:nota.trim(),
                curso:curso.trim()
            }
        })
        //transforma o array/objeto js em uma string formato json 
        //o (dado,null,2) serve para deixar o json formatado bonitinho com recuo de 2 espaços
        const textoJson = JSON.stringify(alunosObjeto, null, 2)
        //salva no disco rigido como arquivo.json 
        await fs.writeFile('alunos_convertidos.json', textoJson)
        console.log ("sucesso! arquivo 'alunos_convertidos.json'  criado com estrutura de dados")
    }catch (erro) {
        console.log('erro de conversao' ,erro )

    }
    }
    console.log(converterTxtParaJson())
