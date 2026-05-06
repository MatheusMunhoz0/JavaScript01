//Criamos uma variável para armazenar o valor do contador
let contador = 0;

//Selecionamos os elementos do HTML que queremos manipular usamos o ID que definimos lá no HTML
const display = document.getElementById("display");
const botao = document.getElementById("btnIncrementar");

//Criamos uma função que será executada no clique
function incrementar() {
    //Aumenta o valor da variável contador em 1
    contador = contador + 1;
    //Atualiza o texto que aparece na tela (o parágrafo #display)
    display.innerText = contador;
    //Exibe no console do navegador para fins de depuração
    console.log("o valor atual é " + contador);
}

//adicionando um "escutador de eventos" ao botão, ele fica "ouvindo" quando o usúario clica e chama a função incrementar
botao.addEventListener("click", incrementar);
