

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
]

let indiceatual = 0;
function trocadetela(){
        indiceatual = (indiceatual+1) % imagens.length;
        document.body.style.backgroundImage = imagens[indiceatual];
        
}

setInterval (trocadetela, 3000);



// Pega os elementos do modal e do botão
const playGameButton = document.getElementById('play-game');
const nameModal = document.getElementById('name-modal');
const startGameButton = document.getElementById('start-game');
const playerNameInput = document.getElementById('player-name');

// Mostra o modal quando o botão de jogar for clicado
playGameButton.addEventListener('click', function(event) {
    event.preventDefault(); // Impede a navegação
    nameModal.style.display = 'block'; // Exibe o modal
});

// Inicia o jogo quando o nome for inserido e o botão for clicado
startGameButton.addEventListener('click', function() {
    const playerName = playerNameInput.value;
    if (playerName) {
        // Salva o nome do jogador no localStorage ou sessionStorage para usar em outras páginas
        sessionStorage.setItem('playerName', playerName);
        
        // Redireciona para a página game.html
        window.location.href = 'game.html';
    } else {
        alert('Por favor, insira um nome para começar o jogo.');
    }
});

