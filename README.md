# Sistema de Gerenciamento de Contatos
Nome: Lucas Renan Stroka


INDEX.JS

index.js possui a função principal( mainMenu() ) a qual solicita o serviço das funções que fazem parte do esqueleto do codigo.

Dentro da função mainMenu() possui um let cond = true para startar o loop de forma 
"infinita" assim toda vez que o codigo cumprir uma função o codigo retorna ao mainMenu().

let menu | é uma variavel que é definido o tipo da variavel com um parseInt além de solicitar o input de seleção do menu.

        ====MENU====
        1. Adicionar Contato
        2. Listar Contato
        3. Editar Contato
        4. Remover Contato
        5. Sair

Switch/case é a função que utilizei para selecionar qual função devera ser executada, cada case possui um await para esperar a função ser comprida para proceguir no loop do while caso retire o await o codigo não irar esperar a função ser executada.

No (case 5:) possui a saida do loop alterando o valor da cond para false.


./DATA/CONTACTS.JS

O array [const contatos] que foi declarado no arquivo esta com algumas informações dentro de contatos como nome, telefone, email

./Utils/addContato.js

É instanciado as seguintes function`s askQuestion e o array contratos.

console.clear() para limpar o console, apos uma serie de input para obter as informações do contato para inserir em objeto e logo apos inserir em no array de contatos com um contatos.push() - ira inserir no final da fila.

E tambem é exportado para o mainMenu().


./Utils/askQuestion.js

É uma uma função que recebe uma string query, com um return com um promise rl.question para fazer um input 

Cria a Função askQuestion() Esta função recebe uma string (query) que será a pergunta exibida ao usuário. Ela retorna uma Promise, com um rl.question que uma forma de input no console.

Exporta a Função para os demais arquivos.

./Utils/editarContato.js //TODO/ Refazer

É instanciado as seguintes function`s askQuestion, listContato e o array contratos.

É uma função asincrona, que primeiramente limpa o console e exibe a lista de contato
apos isso é solitado o id do contato que

./Utils/listContato.js
É instanciado o array contatos

Uma função que começa limpando o console e que printa o array contatos por meio de
forEach

./Utils/removerContato

É instanciado o array contatos, listContato e askQuestion

Uma função assincrona que começa limpando e chamando a função listContato() 
apos chama um input para selecionar o indice para apagar no array, é utilizado um  
.splice()

Exporta a Função para os demais arquivos.
