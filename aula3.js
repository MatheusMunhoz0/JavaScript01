//Laços de Repetição
//for()
const carros = ["Porsche","Mercedes","Fiat","BMW","lamborguini","Audi"];
let texto = "";
for(let i=0;i<carros.length;i++){
    texto += carros[i]+" ";
}
console.log(texto);


//while()
let texto2 ="";
let i=0;
while(i < 10){
    texto2 += "O número é: "+i+"\n";
    i++;
}
console.log(texto2)

//do while()
let = texto3 = "";
let i1=0;
do{
    texto3 += "\nO número é: "+i1;
}while(i1<10);

console.log(texto3);

let texto4 = "";
for(let x=0;x<10;x++){
    if(x==3)
        {break;}
    texto4 += "\nO número é: "+x;
}
console.log(texto4);

let texto5 = "Olá Mundo";
let length = texto5.length;//pegar o comprimento da string
let char = texto5.charAt(0);//retomar o indice em uma string
let char1 = texto5.charCodeAt(0);//retorna um código do caracter em um indice especificado