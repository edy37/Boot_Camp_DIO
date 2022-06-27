const alunos = [
    {
        nome: 'Edipo',
        idade: 6,
    },
    {
        nome: "Joyce",
        idade: 7,
    },
    {
        nome: "Maria",
        idade: 10,
    },
    {
        nome: "Luis",
        idade: 5,
    },
    {
        carro: "Golf",
        ano: 2015,
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];
    
    for (let i = 0; i < arr.length; i++) {
        const { nota, nome } = arr[i];

        if (nota >= media) {
            aprovados.push(nome);
            return aprovados;
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));