const askQuestion = require("./askQuestion")
const listContato = require("./listContato")
const contatos = require("../data/contacts")

async function editarContato() {
    console.clear()
    listContato()
    let idContato = await askQuestion("Selecione o ID do Contato que você deseja editar: ")
    let nome = await askQuestion("Insira o Nome do Contato: ")
    let telefone = await askQuestion("Insira o Numero do Contato (1234-1234): ")
    let email = await askQuestion("Insira o Email do Contato: ")

    contatos[idContato-1] = {nome, telefone, email}
    console.log("Editado com Sucesso!");
}

module.exports = editarContato