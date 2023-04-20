// mostrando na prática como se usa o if depois de else, quando são mais de 2 condições

const mesmoTipoMesmoConteudo0 = 25 === "25"
const mesmoTipoMesmoConteudo1 = 46 === 46
const  naoEhOMesmo = 27 !== 27

if (mesmoTipoMesmoConteudo0 == true || mesmoTipoMesmoConteudo1 == true) {
console.log("Já saiu")
} else if (naoEhOMesmo != true) {
console.log("Chegou a 2a etapa")
} else {
console.log("Parabéns! Deu tudo certo")
}

if (mesmoTipoMesmoConteudo0 != true && mesmoTipoMesmoConteudo1 != true) {
    console.log("Já saiu")
    } else if (naoEhOMesmo == true) {
    console.log("Chegou a 2a etapa")
    } else {
    console.log("Parabéns! Deu tudo certo")
    }


    if (mesmoTipoMesmoConteudo0 == true || mesmoTipoMesmoConteudo1 != false) {
        console.log("Já saiu")
        } else if (naoEhOMesmo === false) {
        console.log("Chegou a 2a etapa")
        } else {
        console.log("Parabéns! Deu tudo certo")
        }