// function compararNumero(num1, num2) {
//     const primeiraFrase = criarPrimeiraFrase(num1, num2);
//     const segundaFrase = criarSegundaFrase(num1, num2);

//     return`${primeiraFrase} ${segundaFrase}`
// }

// function criarPrimeiraFrase(num1, num2) {
//     let saoIgauis = "";
//     if (num1 !== num2) {
//         saoIgauis = "não";
//     }

//     return `Os números ${num1} e ${num2} ${saoIgauis} são íguais. `
// }

// function criarSegundaFrase(num1, num2) {
//     const soma = num1 + num2;

//     let res10 = "menor";
//     let res20 = "menor";

//     const compara10 = soma > 10;
//     const compara20 = soma > 20;

//     if (compara10) {
//         res10 = "maior";
//     }

//     if (compara20) {
//         res20 = "maior";
//     }

//     return `Sua soma é ${soma}, que é ${res10} que 10 ${res20} que 20`;
// }

// console.log(compararNumero(12, 12));

let conta = 0;
console.log(conta++);