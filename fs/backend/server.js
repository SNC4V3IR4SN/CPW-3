const fs= require("node:fs/promises")

//CRIA UM ARQUIVO
//fs.writeFileSync("texto.txt", "ola mundo")
//console.log("arquivo criado ")


//LEITURA DE ARQUIVO
async function lerMeuArquivo() {
     try {
        const data = await fs.readFile('texto.txt', "utf8")
        console.log("conteudo do arquivo", data)
     }catch (erro) {
        console.error('deu errado', erro.message)
     }
}
lerMeuArquivo() 