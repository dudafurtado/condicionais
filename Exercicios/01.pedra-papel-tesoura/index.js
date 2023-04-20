// joga de pedra, papel ou tesoura
// imprimir o nome da jogada vencedora, ou "empate"

// const jogada1 = "pedra"
// const jogada2 = "tesoura"

const jogada1 = "papel"
const jogada2 = "papel"

if (jogada1 == "pedra" && jogada2 == "pedra") {
    console.log("empate")
} else if (jogada1 == "pedra" && jogada2 == "papel") {
    console.log(jogada2)
} else if (jogada1 == "pedra" && jogada2 == "tesoura") {
    console.log(jogada1)
} else if (jogada1 == "papel" && jogada2 == "pedra") {
    console.log(jogada1)
} else if (jogada1 == "papel" && jogada2 == "tesoura") {
    console.log(jogada2)
} else if (jogada1 == "papel" && jogada2 == "papel") {
    console.log("empate")
} else if (jogada1 == "tesoura" && jogada2 == "pedra") {
    console.log(jogada2)
} else if (jogada1 == "tesoura" && jogada2 == "papel") {
    console.log(jogada1)
} else {
    console.log("empate")
}