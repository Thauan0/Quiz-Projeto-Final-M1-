

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultElement = document.getElementById('result');
const backgroundElement = document.querySelector('.background');
const imagens = [  
        "url('./img/Princess.jfif')",    
        "url('./img/HOUSE.jpg')", 
]

let indiceatual = 0;
function trocadetela(){
        indiceatual = (indiceatual+1) % imagens.length;
        document.body.style.backgroundImage = imagens[indiceatual];
        
}

setInterval (trocadetela, 3000);



