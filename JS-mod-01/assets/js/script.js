// Pego id´s e/ou classes do HTML. Quando usar ID, chame pela NomeCOSNT.textContent
const mais = document.querySelector("#mais");
const menos = document.querySelector("#menos");
const number = document.querySelector("#number");
const btn_id = document.querySelector("#id_btn");

// Pego a CONST e add evento click e atribuo junto com a  função
mais.addEventListener("click", adicionar);
menos.addEventListener("click", subtrair);

// Criando funções. Dentro, crio uma variável, transformando em número o que é vindo do html em texto, e faço a soma e a subtração 
function adicionar() {
    let add = Number(number.textContent) +1;
    number.innerText = add;
    identidade(add);
}

function subtrair() {
    let sub = Number(number.textContent) -1;
    number.innerText = sub;
    identidade(sub);
}

function identidade(x) {
    if (x % 2 == 0) {
        btn_id.textContent = "Número par!"
    } else {
        btn_id.textContent = "Número impar!"
    }
}
