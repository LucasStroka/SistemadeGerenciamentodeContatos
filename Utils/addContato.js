const askQuestion = require("./askQuestion")
const contatos = require("../data/contacts")

// {nome: 'Carol', telefone: '5678-1234', email: 'carol@example.com' }
async function addContato() {
    console.clear();
    console.log("Insira as Informações do Novo Contato: \n");
    let nome = await askQuestion("Insira o Nome do Contato: ")
    let telefone = await askQuestion("Insira o Numero do Contato (1234-1234): ")
    let email = await askQuestion("Insira o Email do Contato: ")
    let objContato = {nome, telefone, email}
    contatos.push(objContato)
}

module.exports = addContato