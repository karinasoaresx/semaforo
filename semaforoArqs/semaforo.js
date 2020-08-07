var verde = document.getElementById ('verde');
var amarelo = document.getElementById ('amarelo');
var vermelho = document.getElementById ('vermelho');
var auto = document.getElementById ('auto');
var semaforo = document.getElementById ('semaforo');

function semaforoVerde () {
    semaforo.src = './img/verde.png';
}

function semaforoAmarelo () {
    semaforo.src = './img/amarelo.png';
}

function semaforoVermelho () {
    semaforo.src = './img/vermelho.png';
}

let imagem = 0;

function semaforoAuto () {
    setInterval (function() {
        if (imagem == 0){
            semaforo.src = './img/verde.png';
            imagem = 1
        }else if (imagem == 1){
            semaforo.src = './img/amarelo.png';
            imagem = 2
        }else if(imagem == 2){
            semaforo.src = './img/vermelho.png';
            imagem = 0
        }    

    }, 500);
}


verde.addEventListener ('click', semaforoVerde);
amarelo.addEventListener ('click', semaforoAmarelo);
vermelho.addEventListener ('click', semaforoVermelho);
auto.addEventListener ('click', semaforoAuto);
