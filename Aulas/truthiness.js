const x = 18 

if (x) {
    console.log("Aparece caso x = 18 de true")
} else {
    console.log("Aparece caso x = 18 de false")
}


const y = "Duda"

if (y) {
    console.log('Caso "Duda" seja true')
} else {
    console.log('Caso "Duda" seja false')
}

const z = ""

if (z) {
    console.log('Caso "" seja true')
} else {
    console.log('Caso "" seja false')
}

// 0 é o único número que da falso
// Esse valor é truthy ou falsy

// TRUTHY
if (true) {}
if ({}) {}
if ([]) {}
if (42) {}
if ("foo") {}
if (new Date()) {}
if (-42) {}
if (3.14) {}
if (-3.14) {}
if (Infinity) {}
if (-Infinity) {}

// FALSY
if (false) {}
if (null) {}
if (undefined) {}
if (0) {}
if (NaN) {}
if ('') {}
