function clicar(){
    alert("obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "Obrigado por Clicar";
    console.log(document.getElementById("agradecimento"));
};

function redirecionar(){
    window.open("https://www.google.com.br/");
    //window.location.href = "https://www.google.com.br/";
}

function trocar(elemento){
    //alert("trocar texto");
    //document.getElementById("mousemove").innerHTML = "<b>Obrigado por Passar o Mouse</b>";
    elemento.innerHTML = "<b>Obrigado por Passar o Mouse</b>";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "passe o mouse aqui";
    elemento.innerHTML = "passe o mouse aqui";
}

function load(){
    alert("Pagina Carregada");
}

function f_alterou(elemento){
    console.log(elemento.value);
}
/*
var nome = "Jorge Luiz";
var idade = 39;
var num = 100;
var frase = "Japao e o melhor time de Mundo";
var lista = ["macao","pera","uva"];
var fruta = {nome:"maca", cor:"vermelha"};
var d = new Date();
function soma (n1,n2){
    return n1 + n2;
}

function maiordeidade(idade){
    if (idade >= 18){
        return true;
    } else{
        return false;
    }
}

idade = prompt("Qual sua idade?");
console.log(maiordeidade(idade));

alert(soma(6,6));
alert(d);
alert(d.getMonth()+1);
alert(d.getMinutes());


nome = prompt("Qual seu nome?");
var cont = 0;

while (cont < 5){
    console.log(cont);
    cont = cont + 1;
};

for (cont = 0; cont <= 5; cont++){
    alert(cont);
};

lista.push("laranja")
lista.pop();

alert("meu primeiro js - Arquivo Separado");
alert("Nome: " + nome + " idade: " + idade + " anos");
alert(idade + num);

console.log(nome);
console.log(idade + num);
console.log(frase);
console.log(frase.replace("Japao","Brasil"));
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));
console.log(fruta.nome);
console.log(fruta.cor);

alert(frase.replace("Japao","Brasil"));
alert(lista[1]);
*/