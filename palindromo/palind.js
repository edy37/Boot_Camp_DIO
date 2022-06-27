// function verificarPalindromo(string) {
//     if (!string) return "string inexistente!";
    
//     return string.split("").reverse().join("") === string;
// }

// // let myVar = false;

// console.log(verificarPalindromo('ama'));

// Solução 2

// function verificarPalindromo2(string) {
//     if (!string) return "string inexistente!";

//     for (let i = 0; i < string.length / 2; i++) {
//         if(string[i] !== string[string.length -1 -i]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(verificarPalindromo2("edi"));

// Atividade 2 arrays_pares

function subsPares(array) {
    if (!array.length) return "Aqui";
    if (!array) return -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("Você é zero");
        } else if (array[i] % 2 === 0) {
            console.log(`sustituindo ${array[i]} por 0 ...`);
            array[i] = 0;
        }
    }
    return array;
}

let arr = [1, 2, 3, 5, 7, 9, 12, 28, 33, 100]
subsPares(arr);
console.log(subsPares(arr));

