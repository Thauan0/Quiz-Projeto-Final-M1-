const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultElement = document.getElementById('result');
const backgroundElement = document.querySelector('.background');
const imagens = [
    "url('./img/Princess.jfif')",
    "url('./img/HOUSE.jpg')",
    "url('./img/Friends.jfif')",
    "url('./img/Efeito.jfif')",
    "url('./img/Breakingbad.jfif')",
    "url('./img/GOT2.jpeg')",
    "url('./img/Ramona.jfif')",
];

let indiceatual = 0;

function trocadetela() {
    let numTrocas = 0;
    const limiteTrocas = 5;

    while (numTrocas < limiteTrocas) {
        indiceatual = (indiceatual + 1) % imagens.length;
        document.body.style.backgroundImage = imagens[indiceatual];
        numTrocas++;
    }
}

setInterval(trocadetela, 2000);

const playGameButton = document.getElementById('play-game');
const nameModal = document.getElementById('name-modal');
const startGameButton = document.getElementById('start-game');
const playerNameInput = document.getElementById('player-name');

playGameButton.addEventListener('click', function(event) {
    event.preventDefault();
    nameModal.style.display = 'block';
});

startGameButton.addEventListener('click', function() {
    const playerName = playerNameInput.value;
    if (playerName) {
        sessionStorage.setItem('playerName', playerName);
        window.location.href = 'game.html';
    } else {
        alert('Por favor, insira um nome para começar o jogo.');
    }
});

function selecionarSerieFavorita() {
    const resposta = prompt("Qual a sua série favorita?");
    
    if (resposta === null) {
        alert("Você fechou o prompt. O site será recarregado.");
        location.reload();
        return;
    }

    if (resposta.trim() === '') {
        alert('Por favor, digite sua série favorita!');
        return selecionarSerieFavorita();
    }

    sessionStorage.setItem('favoriteShow', resposta);
    alert(`Sua série favorita é: ${resposta}`);
}

window.onload = function() {
    selecionarSerieFavorita();
};
