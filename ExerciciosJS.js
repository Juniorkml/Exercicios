var clientes = [
    {
        id: 1,
        nome: 'Luis Santos Silveira',
        idade: 18
    },
    {
        id: 2,
        nome: 'Ricardo Lopes Alves',
        idade: 30
    },
    {
        id: 3,
        nome: 'Gustavo Silva Junior',
        idade: 26
    }
];

clientes.forEach(cliente => {
    const aNome = cliente.nome.split(' ')
    const primeiroNome = aNome[0]
    const sobrenome = aNome[aNome.length-1]
    console.log(primeiroNome, sobrenome)
});

/* exercicio 2*/

var numero = '5(1)9-876-543-21';

// Remove todos os caracteres não numéricos     01234567890
var numeroLimpo = numero.replace(/\D/g, ''); //'51987654321'; numero.match(/[()-]/g)

// Aplica a máscara desejada
var numeroFormatado = `(${numeroLimpo.slice(0, 2)})_${numeroLimpo[2]}_${numeroLimpo.slice(3, 7)}-${numeroLimpo.slice(7)}`;

console.log(numeroFormatado);

// Bônus

async function a () {
    b();
    await c();
    await d();
    alertUser("a")
}

a();

function b() {
    return;
    alertUser('b');
}

function c () {
    return new Promise((resolve) => {
        resolve();
        alertUser('c');
    })
}

function d () {
    return new Promise((resolve) => {
        alertUser('d');
    })
}

function alertUser (message) {
    console.log('A função é: ' +message);
}

// Imprime a função é c, a função é d;
// Promise fica pendente 

/* Possiveis erros de código: Promise não está retornando o que devia, 
   pois o resolve(), deveria ser chamado após os comandos de execução
   Cada promisse poderia haver um timeout, ademais os comandos alertUser(); 
   devem  ser chamado antes do (return;)  diferente função b e c. 
*/