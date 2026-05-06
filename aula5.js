//Criando uma data com o momento atual
const dataAtual = new Date();

//Exibe a data completa do console
console.log(dataAtual);

//Mostrar a data manipulada
console.log(dataAtual.getDate());

//Visualizar somente o mês
console.log(dataAtual.getMonth()+1);  //sem o +1 , janeiro é 0.

//Pegando o ano completo
console.log(dataAtual.getFullYear());

//Pegando horas, minutos e segundos
console.log(dataAtual.getHours());
console.log(dataAtual.getMinutes());
console.log(dataAtual.getSeconds());

const data = new Date();

//Criando uma varíavel formatada 
const dataFormatada = data.getDate()+" / "+(data.getMonth()+1)+" / "+data.getFullYear();
console.log("data formatada",dataFormatada);









//ARRAYS
let cores = ["azul","rosa"];
cores.push("vermelho");
console.log(cores);

cores.pop();     //remover último elemento do array
console.log(cores);

//=> arrow function
//forEach ("repetição")

let numeros = [1,2,3,4];
numeros.forEach(numero => {
    console.log(numero);
});

//MAP -- Percorre o array e retorna um novo array com valores transformados
let dobrados = numeros.map(numero => numero * 2);
console.log(dobrados);

//Filter -- filtrar um array
let numeros1 = [1,2,3,4,5,10,20,30,40,50];
let maioresQueDez = numeros1.filter(numero => numero > 10);
console.log(maioresQueDez);

const numeros2 = [1,2,3];
//Criando uma cópia usando o spread
const copia = [...numeros2];  //"..." para cópia 100% fiel
console.log("ORIGINAL:",numeros2);
console.log("CÒPIA:",copia);

const lista1 = [1,2]
const lista2 = [3,4]

//Unindo as arrays com spread
const ListaCompleta = [...lista1,...lista2];
console.log(ListaCompleta);




//FUNÇÂO
/*
Sintaxe de criação das funções

function nome(argumento1,argumento2,...,argumentoN) {
//Corpo da função 
}
*/

/* Criar as varíaveis */

let numero3=10,numero4=2;

/*Executa as 4 operacões matemáticas */
console.log(`Soma: ${somar(numero3,numero4)}`);
console.log(`Subtração: ${subtrair(numero3,numero4)}`);
console.log(`Multiplicação: ${multiplicar(numero3,numero4)}`);

const divisao = dividir(numero3,numero4);

/*Valida o resultado da divisão */
if(divisao == Infinity)
    console.log("Não existe divisão por ZERO");
else
    console.log(`Divisão: ${divisao}`);

/*Funções de Cálculo */
function somar(numero3,numero4){
    return numero3+numero4;
}

function subtrair(numero3,numero4){
    return numero3-numero4;
}

function multiplicar(numero3,numero4){
    return numero3*numero4;
}

function dividir(numero3,numero4){
    return numero3/numero4;
}
