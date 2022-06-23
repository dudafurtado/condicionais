// const jogada1 = 5;
// const jogada2 = 3;

// o ganhador é quem escolheu o "par" ou "impar" que esteja de acordo com o cálculo de numeros das jogadas 

let jogada1 = 10 
let jogada2 = 5

let calculoJogadas = jogada1 + jogada2 
let jogadasSaoPar = calculoJogadas % 2 
let jogadaSaoImpar = calculoJogadas % 3 

if (jogadasSaoPar == 0 || calculoJogadas == 0) {
    console.log("par")
} else if (jogadaSaoImpar == 0 || calculoJogadas == 1) {
    console.log("impar")
} else {

}