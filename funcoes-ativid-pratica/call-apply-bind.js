const myObj = {
    nome1: "Édipo",
    nome2: "Moreira",
    nome3: "Rodrigues"
};

function soma(a, b) {
    console.log(this.nome1 + " " + this.nome3 + " " + a + b);
}

soma.call(myObj, "Janeiro", "Fevereiro");
console.log(soma);