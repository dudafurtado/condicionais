const caractere = "E";


if (caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
    console.log("VOGAL MAIÚSCULA")
} else if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
    console.log("VOGAL minúscula")
} else if (caractere >= 0 || caractere <= 9) {
    console.log("Número")
} else {
    console.log("Consoante")
}