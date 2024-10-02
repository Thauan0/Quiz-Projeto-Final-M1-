
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
    let numTrocas = 0; // Contador para o número de trocas
    const limiteTrocas = 5; // Limite de trocas desejadas

    while (numTrocas < limiteTrocas) { // Loop enquanto o número de trocas for menor que o limite
        indiceatual = (indiceatual + 1) % imagens.length; // Atualiza o índice da imagem
        document.body.style.backgroundImage = imagens[indiceatual]; // Aplica a nova imagem de fundo
        numTrocas++; // Incrementa o contador de trocas
    }
}

// Executa a troca de imagem continuamente a cada 3 segundos
setInterval(trocadetela, 2000);

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

// Função para perguntar a série favorita do usuário
function selecionarSerieFavorita() {
    const resposta = prompt("Qual a sua série favorita?");
    
    // Se o usuário fechar o prompt
    if (resposta === null) {
        alert("Você fechou o prompt. O site será recarregado.");
        location.reload(); // Recarrega a página
        return;
    }

    // Validação da resposta
    if (resposta.trim() === '') {
        alert('Por favor, digite sua série favorita!');
        return selecionarSerieFavorita(); // Repete a pergunta se não houver resposta
    }

    // Salva a série favorita no localStorage ou sessionStorage
    sessionStorage.setItem('favoriteShow', resposta);
    alert(`Sua série favorita é: ${resposta}`);
}

// Executa ao carregar a página
window.onload = function() {
    selecionarSerieFavorita(); // Pergunta a série favorita
};
