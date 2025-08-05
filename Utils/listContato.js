const contatos = require('../data/contacts');

function listContato() {
    //     {nome: 'Carol', telefone: '5678-1234', email: 'carol@example.com' }
    console.clear();
    console.log("\n==== Lista de Contatos ====");
    
    contatos.forEach((contato, index) => {
        console.log(`${index + 1}. Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
    })    
}

module.exports = listContato;
