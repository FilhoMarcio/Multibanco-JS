const inputValor = document.getElementById("inputValor");
const depositarBtn = document.getElementById("depositar");
const levantarBtn = document.getElementById("levantar");
const saldoBtn = document.getElementById("saldo");
const menuBtn = document.getElementById("menu");
const confirmarDepositoBtn = document.getElementById("confirmarDeposito"); 
const confirmarLevantamentoBtn = document.getElementById("confirmarLevantamento"); 


inputValor.style.display = 'none';
menuBtn.style.display = 'none';
confirmarDepositoBtn.style.display = 'none';
confirmarLevantamentoBtn.style.display = 'none';


let saldo = 0;
let min = 0;
let deposito;
let levantamento;
let opcao;


function depositarValor(){
    inputValor.style.display = 'block';
    menuBtn.style.display = 'block';
    levantarBtn.style.display = 'none';
    saldoBtn.style.display = 'none';
    depositarBtn.style.display = 'none';
    confirmarDepositoBtn.style.display = 'block';
    confirmarLevantamentoBtn.style.display = 'none';


    deposito = parseFloat(inputValor.value);
    if (deposito > min) {
        saldo += deposito;
        document.getElementById("msg").innerHTML = 'Depósito realizado com sucesso!';
        confirmarDepositoBtn.style.display = 'none';
    }else if (deposito <= min){
        document.getElementById("msg").innerHTML = 'Valor inválido.';
    }
    inputValor.value = "";
    console.log(saldo);
};


function levantarValor(){
    inputValor.style.display = 'block';
    levantarBtn.style.display = 'none';
    saldoBtn.style.display = 'none';
    depositarBtn.style.display = 'none';
    menuBtn.style.display = 'block';
    confirmarLevantamentoBtn.style.display = 'block';


    levantamento = parseFloat(inputValor.value);
    if (levantamento <= saldo) {
        saldo -= levantamento;
        document.getElementById("msg").innerHTML = 'Retire o seu dinheiro!';
        confirmarLevantamentoBtn.style.display = 'none';
    }else if (levantamento > saldo){
        document.getElementById("msg").innerHTML = 'Saldo insuficiente.';
    }

    inputValor.value = "";
    console.log(saldo);
};
function verSaldo(){
    document.getElementById("msg").innerHTML = 'Seu saldo é de '+ saldo.toFixed(2) +' €.';

    inputValor.style.display = 'none';
    levantarBtn.style.display = 'none';
    saldoBtn.style.display = 'none';
    depositarBtn.style.display = 'none';
    menuBtn.style.display = 'block';
};
function voltarMenu(){
    depositarBtn.style.display = 'block';
    levantarBtn.style.display = 'block';
    saldoBtn.style.display = 'block';
    inputValor.style.display = 'none';
    menuBtn.style.display = 'none';
    confirmarDepositoBtn.style.display = 'none';
    confirmarLevantamentoBtn.style.display = 'none';

    inputValor.value = "";
    document.getElementById("msg").innerHTML = "";
};

const transacoes = [];

function verTransacoes(date, type, value){
    transacoes.push({
        data: date,
        tipo: type,
        valor: value 
    });
}

function confirmarDeposito(){
    depositarValor();

};

function confirmarLevantamento(){
    levantarValor();

};

// inputValor.addEventListener("keyup", function(event){
//     //Se teclar pressionar Enter
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         confirmarLevantamentoBtn.click();
//     }
// });






    