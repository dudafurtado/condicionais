// Os candidatos aprovados são separados em grupos diferentes, de acordo com suas alturas, para serem testados para posições específicas

const alturaCandidato = 199;

if (alturaCandidato >= 180) {
    if (alturaCandidato >= 180 && alturaCandidato <= 185) {
        console.log("LÍBERO")
    } else if (alturaCandidato >= 186 && alturaCandidato <= 195) {
        console.log("PONTEIRO") 
    } else if (alturaCandidato >= 196 && alturaCandidato <= 205) {
        console.log("OPOSTO")
    } else {
        console.log("CENTRAL")
    }
} else {
    console.log("REPROVADO")
}