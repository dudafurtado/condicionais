// Isenção de impostos

// Segundo a receita federal, algumas pessoas são isentas do pagamento de imposto de renda. 

// Pessoas portadores de alguma doença grave
// Pessoas que já estão aposentadas
// Caso a pessoa não esteja isenta, avalia-se seus rendimentos tributáveis ao longo do ano. Caso esses total de rendimentos seja superior a R$ 28.559,70, a pessoa deve pagar imposto de renda, caso contrário, não.

const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

if (portadoraDeDoenca == true || aposentada == true) {
    console.log("ISENTA")
} else if (totalDeRendimentos <= 2855970) {
console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE")
} else {
   console.log("PEGA LEAO") 
}



