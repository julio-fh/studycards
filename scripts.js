let cardNumber = 1; // número do card atual
let cardFlipped = false;

const flashcards = [
    {
        question: "O que é JavaScript?",
        answer: "JavaScript é uma linguagem de programação interpretada e orientada a objetos, usada principalmente para adicionar interatividade e dinamismo a páginas web."
    },
    {
        question: "O que são funções de callback em JavaScript?",
        answer: "São funções passadas como argumento para outra função, que serão executadas após um determinado evento ou operação."
    },
    {
        question: "O que é o this em JavaScript?",
        answer: "this se refere ao contexto de execução atual. Seu valor varia dependendo de como a função é chamada."
    },
    {
        question: "O que é hoisting em JavaScript?",
        answer: 'Hoisting é o comportamento em que declarações de variáveis e funções são "movidas" para o topo do escopo durante a fase de compilação. Isso faz com que seja possível usar uma função antes de sua definição no código.'
    },
    {
        question: "O que são tipos primitivos em JavaScript?",
        answer: "Os tipos primitivos em JavaScript são: String, Number, Boolean, Null, Undefined, BigInt e Symbol. Eles representam valores imutáveis e não são objetos."
    },
];

const cardElement = document.querySelector('.card');
const nextButton = document.getElementById('next');
const positionElement = document.getElementById('stats');

function renderCard() {
    cardFlipped = false;
    cardElement.textContent = flashcards[cardNumber - 1].question;
    cardElement.classList.remove('answer'); // garante que a classe da resposta não fique ativa
    positionElement.textContent = `Card ${cardNumber} de ${flashcards.length}`;

    // desativa o botão se for o último card
    if (cardNumber === flashcards.length) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

cardElement.addEventListener('click', () => {
    if (!cardFlipped) {
        cardElement.textContent = flashcards[cardNumber - 1].answer;
        cardElement.classList.add('answer');   // aplica o estilo da resposta
        cardFlipped = true;
    } else {
        cardElement.textContent = flashcards[cardNumber - 1].question;
        cardElement.classList.remove('answer'); // volta ao estilo da pergunta
        cardFlipped = false;
    }
});

nextButton.addEventListener('click', () => {
    if (cardNumber < flashcards.length) {
        cardNumber++;
        renderCard();
    }
});

renderCard();

const restartButton = document.getElementById('restart');

restartButton.addEventListener('click', () => {
    cardNumber = 1;           // volta para o primeiro card
    renderCard();             // mostra novamente a primeira pergunta
});