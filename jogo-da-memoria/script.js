const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return; // Para não acontecer nada quando clicar duas vezes na msm carta

    this.classList.add('flip'); /* Pegando elemento toggle(ativa/desativa) e função embutida flip, já a propriedade add ativa apenas uma vez*/
    // console.log("Ativo");

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

function checkForMatch() {
    if (firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }

    unFlipCards();
}

// Remover cliques
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

// Recebendo uma função e um tempo
function unFlipCards() {
    lockBoard = true; // Ativando, para não poder clicar em outra carta
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

// Resetando
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false]; // segundo array esta pegando a propridade do primeiro array
    [firstCard, secondCard] = [null, null];
}

// Embaralhando as cartas
(function shuffle() {
    cards.forEach(card => {
        // Math função matematica. Floor arredonda para cima. Random sortear numeros aleatorios
        let randomPosition = Math.floor(Math.random() * 12);
        // Propriedade Order faz a ordenação 
        card.style.order = randomPosition;
    })
})();

/* Para cada clique no card, add a função flipcard */
cards.forEach((card) => {
    card.addEventListener('click', flipCard)
});

