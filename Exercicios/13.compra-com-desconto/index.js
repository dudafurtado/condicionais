//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento == "credito") {
    valorCredito = valorDoProduto * 5 / 100
    descontoCredito = valorDoProduto - valorCredito
    console.log(descontoCredito)
} else if (tipoDePagamento == "cheque") {
    valorCheque = valorDoProduto * 3 / 100
    descontoCheque = valorDoProduto - valorCheque
    console.log(descontoCheque)
} else {
 // if (tipoDePagamento == "debito" || tipoDepagamento == "dinheiro")
 valorDebitoEDinheiro = valorDoProduto * 10 / 100
 descontoDebitoEDinheiro = valorDoProduto - valorDebitoEDinheiro
 console.log(descontoDebitoEDinheiro)
}