let sumapar = 0;
let sumaimpar = 0;
for (let i = 1; i <= 10; i++) {
    let numero = parseFloat(prompt("digite los numeros " + i + ":"));

    if (numero % 2 === 0) {
        sumapar += numero;
    } else {
        sumaimpar += numero;
    }
}

alert("pares: " + sumapar);
alert("impares: " + sumaimpar);