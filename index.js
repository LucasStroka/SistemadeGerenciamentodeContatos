const addContato = require("./Utils/addContato")
const editarContato = require("./Utils/editarContato")
const removerContato = require("./Utils/removerContato")
const askQuestion = require("./Utils/askQuestion")
const listContato = require("./Utils/listContato")

async function mainMenu() {
    let cond = true

    while (cond) {
        let menu = parseInt(await askQuestion(` 
            ====MENU====
            1. Adicionar Contato
            2. Listar Contato
            3. Editar Contato
            4. Remover Contato
            5. Sair
        `));
        

        switch (menu) {
            case 1: await addContato(); break;
            case 2: await listContato(); break;
            case 3: await editarContato(); break;
            case 4: await removerContato(); break;
            case 5: 
                cond = false;
                console.log("Saindo...");
                break;
            default:
                console.log("Numero Invalido, Tente Outro Numero! ");
                break;
        }

    }
}
mainMenu()