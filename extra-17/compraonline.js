//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;


let quantoFaltaParaPagar = valorDoProduto - valorPago

let valorParcelas = quantoFaltaParaPagar / quantidadeDoParcelamento

console.log(`Restam ${quantidadeDoParcelamento} parcelas de R$${valorParcelas}`)