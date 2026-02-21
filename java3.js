let suma = 0;
for (let i = 1; i <= 5; i++) {
    let numero = parseFloat(prompt("digite los numeros " + i + ":"));
    if (isNaN(numero)) {
      suma += numero
    } else {
        i --;
    }
}
 let promedio = suma / 5;
 alert ("promedio: " + promedio);