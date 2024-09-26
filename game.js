const questions = [
    {
        question: "Em que ano estreou 'Breaking Bad'?",
        answers: [
            { text: '2008', correct: true },
            { text: '2010', correct: false },
            { text: '2006', correct: false },
            { text: '2009', correct: false }
        ]
    },
    {
        question: "Quem interpretou Jon Snow em 'Game of Thrones'?",
        answers: [
            { text: 'Kit Harington', correct: true },
            { text: 'Peter Dinklage', correct: false },
            { text: 'Emilia Clarke', correct: false },
            { text: 'Nikolaj Coster-Waldau', correct: false }
        ]
    },
    {
        question: "Qual é o nome do café em 'Friends'?",
        answers: [
            { text: 'Central Park', correct: false },
            { text: 'Central Perk', correct: true },
            { text: 'Coffee House', correct: false },
            { text: 'The Perk', correct: false }
        ]
    },
    {
        question: "Qual é a especialidade médica do Dr. Gregory House?",
        answers: [
            { text: "Cardiologia", correct: false },
            { text: "Neurologia", correct: false },
            { text: "Infectologia", correct: false },
            { text: "Diagnóstico", correct: true }
        ]
    },
    {
        question: "No filme 'Efeito Borboleta', qual é a habilidade especial do personagem principal, Evan?",
        answers: [
            { text: "Ele pode ler mentes.", correct: false },
            { text: "Ele pode viajar no tempo através de suas memórias.", correct: true },
            { text: "Ele tem super força.", correct: false },
            { text: "Ele pode prever o futuro.", correct: false }
        ]
    },
    {
        question: "No Brooklyn 99, qual é o apelido do bandido que sempre escapa de Jake?",
        answers: [
            { text: "Pontiac Bandit", correct: true },
            { text: "Ford Fraudster", correct: false },
            { text: "Camaro Criminal", correct: false },
            { text: "Mustang Thief", correct: false }
        ]
    },
    {
        question: "Qual é o nome da montaria do Príncipe Daemon Targaryen, conhecido por ser um dos dragões mais temidos de Westeros?",
        answers: [
            { text: "Caraxes", correct: true },
            { text: "Vhagar", correct: false },
            { text: "Balerion", correct: false },
            { text: "Syrax", correct: false }
        ]
    },
    {
        question: "Quantos ex-namorados Ramona Flowers tem, que Scott precisa enfrentar?",
        answers: [
            { text: "5", correct: false },
            { text: "7", correct: true },
            { text: "6", correct: false },
            { text: "8", correct: false }
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultElement = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    nextButton.removeEventListener('click', startQuiz); // Remove o ouvinte 'Reiniciar' para evitar múltiplos ouvintes
    nextButton.addEventListener('click', handleNextButtonClick); // Reanexar ouvinte para 'Próxima'
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    resultElement.innerHTML = '';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(answer) {
    // Desabilita todos os botões de resposta
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
    });

    if (answer.correct) {
        score++;
        resultElement.innerHTML = "Correto!";
    } else {
        resultElement.innerHTML = "Errado!";
    }

    resultElement.classList.add('show');
    nextButton.style.display = 'block';
}

function handleNextButtonClick() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    resetState();
    questionElement.innerText = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Reiniciar";
    nextButton.style.display = 'block';
    
    // Remover o ouvinte anterior para evitar múltiplos eventos
    nextButton.removeEventListener('click', handleNextButtonClick); 
    nextButton.addEventListener('click', startQuiz); // Adicionar o ouvinte de reiniciar
}

nextButton.addEventListener('click', handleNextButtonClick);

startQuiz();

