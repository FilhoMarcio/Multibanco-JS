let saldo = 0;
let levantar;
let deposito = 0;
let min = 0;
let max = 400;
let opcao;

do {
    opcao = parseInt(prompt('Escolha uma opção:\n 1- Levantar\n 2- Depositar\n 3- Ver Saldo\n 0- Sair')); // MENU INICIAL

    switch (opcao) {
        case 1: levantar = parseFloat(prompt('Digite o valor que deseja levantar:'))
        if (levantar > saldo) {
            alert('Saldo insuficiente!');
        }else if (levantar > max){
            alert('O valor máximo diário permitido é de '+ max + '€.');
        }else{
            saldo -= levantar;
            alert('Aguarde um momento...');
            alert('Retire o seu dinheiro!');
        }
             break;
        
        case 2: deposito = parseFloat(prompt('Digite o valor que deseja depositar:'));
        if(deposito < min){
            alert('Depósito inválido!');
        }else{
        saldo += deposito;
        alert('Deposito efetuado com sucesso!');
        }
            break;

        case 3: 
        alert('O seu saldo é de: '+ saldo.toFixed(2) + '€');
            break;
    
        // default:
        //     break;
    }
} while (opcao != 0);

