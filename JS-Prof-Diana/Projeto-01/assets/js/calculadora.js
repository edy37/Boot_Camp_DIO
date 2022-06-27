function calculadora() {
    const operacao = Number(prompt('Escolha uma operação: \n 1 - Soma(+)\n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%) \n 6 - Potenciação (**)'));
    console.log(operacao);

    if (!operacao || operacao >= 7) {
        alert('Erro - Operação Inválida.');
        calculadora();
    } else {
        let n1 = Number(prompt('Insira o primeiro número: '));
        let n2 = Number(prompt('Insira o segundo número: '));
        var resultado;

        if (!n1 || !n2) {
            alert('Erro - Parâmetros Inválidos');
            calculadora();
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisão de ${n1} por ${n2} é = ${resultado}`);
                novaOperacao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`A potenciação de ${n1} por ${n2} é = ${resultado}`);
                novaOperacao();
            }

            // Verificar se deseja outra operação
            function novaOperacao() {
                let opcao = prompt("Deseja realizar outra operação?\n 1 - Sim\n 2 - Não");

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até Logo!');
                } else {
                    alert('Digite um número para sair.')
                    calculadora();
                }
            }
        }
        //  Condição
        // if (operacao == 1) {
        //     soma();
        // } else if (operacao == 2) {
        //     subtracao();
        // } else if (operacao == 3) {
        //     multiplicacao();
        // } else if (operacao == 4) {
        //     divReal();
        // } else if (operacao == 5) {
        //     divInteira();
        // } else if (operacao == 6) {
        //     potenciacao();
        // }

        switch (operacao) {
            case 1:
                soma();
                break;

            case 2:
                subtracao();
                break;

            case 3:
                multiplicacao();
                break;

            case 4:
                divReal();
                break;

            case 5:
                divInteira();
                break;

            case 6:
                potenciacao();
                break;

            default:
                break;
        }
    }
}
calculadora();