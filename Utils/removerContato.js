const contatos = require("../data/contacts")
const listContato = require("./listContato")
const askQuestion = require("./askQuestion")

async function removerContato() {
    console.clear();
    listContato();

    let idRem = await askQuestion("Qual Contato Você Deseja Remover? ")
    contatos.splice((idRem-1), 1)
}

module.exports = removerContato