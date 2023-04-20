let valorDaCompra = 300
let quantidadeDeParcelas = 1

if (quantidadeDeParcelas == 1) {
    let desconto = valorDaCompra * 10 /100
    let valoraPagar = valorDaCompra - desconto
    console.log(`O valor a ser pago é de ${valoraPagar} reais`)
} else {
    let valorDaParcela = valorDaCompra / quantidadeDeParcelas
    console.log(`O valor da sua parcela é ${valorDaParcela.toFixed(2)} reais por ${quantidadeDeParcelas} meses`)
}

let valorDaCompra2 = 1500
let quantidadeDeParcelas2 = 3

if (quantidadeDeParcelas2 == 1) {
    let desconto = valorDaCompra2 * 10 /100
    let valoraPagar = valorDaCompra2 - desconto
    console.log(`O valor a ser pago é de ${valoraPagar} reais`)
} else {
    let valorDaParcela = valorDaCompra / quantidadeDeParcelas2
    console.log(`O valor da sua parcela é ${valorDaParcela.toFixed(2)} reais por ${quantidadeDeParcelas2} meses`)
}