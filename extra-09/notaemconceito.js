// Transformar nota em conceito

const nota = 8.5;

if (nota < 4) {
    console.log("O estudando obteve conceito E")
} else if (nota >= 4 && nota <= 5.9) {
    console.log("O estudando obteve conceito D")
} else if (nota >= 6 && nota <= 7.9) {
    console.log("O estudando obteve conceito C")
} else if (nota >= 8 && nota <= 8.9) {
    console.log("O estudando obteve conceito B")
} else {
    console.log("O estudando obteve conceito A")
} 