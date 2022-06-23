// let valorDaCompra = 1500
// let quantidadeDeParcelas = 4

 let valorDaCompra = 3000
 let quantidadeDeParcelas = 11

// let valorDaCompra = 654
// let quantidadeDeParcelas = 7

// let valorDaCompra = 390
// let quantidadeDeParcelas = 20


if (quantidadeDeParcelas == 1) {
    // à vista possui 10% de desconto 
    let desconto = valorDaCompra * 10 /100
    let valoraPagar = valorDaCompra - desconto
    console.log(`O valor a ser pago é de ${valoraPagar.toFixed(2)} reais`)
} else if (quantidadeDeParcelas >= 7 && quantidadeDeParcelas <= 12) {
    // entre 7 e 12 parcelas existe um juros a ser calculado por 1%, ultilizando a fórmula de montante 
    let taxaDeJuros = 1 / 100 
    let montante = valorDaCompra * Math.pow((1 + taxaDeJuros), quantidadeDeParcelas)
    let valoraPagar = montante / quantidadeDeParcelas
    console.log(`O valor da sua parcela é ${valoraPagar.toFixed(2)} reais por ${quantidadeDeParcelas} meses junto com a taxa de juros de 1%`)
} else if (quantidadeDeParcelas < 7) {
    // menos de 7 parcelas o calculo é normal
    let valorDaParcela = valorDaCompra / quantidadeDeParcelas
    console.log(`O valor da sua parcela é ${valorDaParcela.toFixed(2)} reais por ${quantidadeDeParcelas} meses`)
} else {
    // existe o limite de 12 parcelas, passou disso está proibido
    console.log("O maxímo de parcelas é 12.")
}

