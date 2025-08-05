const askQuestion = require("./askQuestion")
const listContato = require("./listContato")
const contatos = require("../data/contacts")

async function editarContato() {
    console.clear()
    listContato()
    let telefone = " "
    let nome = " "
    let email = " "

    let idContato = await askQuestion("Selecione o ID do Contato que você deseja editar: ")

    let editNome = await askQuestion("Deseja Alterar o Nome? (S/N) ")
    if (editNome.toUpperCase() == "S") {
        nome = await askQuestion("Insira o Nome do Contato: ")
    } else {
        nome = contatos[idContato-1].nome
    }

    let editTelefone = await askQuestion("Deseja Alterar o Telefone? (S/N) ")
    if (editTelefone.toUpperCase() == "S") {
        telefone = await askQuestion("Insira o Numero do Contato (1234-1234): ")
    } else {
        telefone = contatos[idContato-1].telefone
    }

    let editEmail = await askQuestion("Deseja Alterar o Email? (S/N) ")
    if (editEmail.toUpperCase() == "S") {
        email = await askQuestion("Insira o Email do Contato: ")
    } else {
        email = contatos[idContato-1].email
    }


    contatos[idContato-1] = {nome, telefone, email}
    console.log("Editado com Sucesso!");
}

module.exports = editarContato