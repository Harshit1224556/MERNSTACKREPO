const questions = [

{

question:"Which is the largest animal in the world",
ans:[
    {text:"whale",correct:true},
    {text:"Lion",correct:false},
    {text:"rat",correct:false},
    {text:"Cow",correct:false},
]

},
{

question:"What is my name",
ans:[
    {text:"Harshit",correct:true},
    {text:"Deeap",correct:false},
    {text:"Jula",correct:false},
    {text:"Siaya",correct:false},
]

},{

question:"Which is the best programming langauge of the world",
ans:[
    {text:"C++",correct:false},
    {text:"Java",correct:false},
    {text:"PHP",correct:false},
    {text:"Javascript",correct:true},
]

},{

question:"what is the capital of India",
ans:[
    {text:"Delhi",correct:true},
    {text:"Goa",correct:false},
    {text:"Bihar",correct:false},
    {text:"UP",correct:false},
]

}


];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML= "Next";
    showQuestion();
}

function showQuestion(){
   
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " ." + currentQuestion.question;

    currentQuestion.ans.forEach(answer =>{

        const button = document.createElement("button")
        button.innerHTML= answer.text
        button.classList.add("btn")
        answerButton.appendChild(button)
        
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectAnswer)
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}


function selectAnswer(e){
 
const selectedBtn = e.target;
const isCorrect = selectedBtn.dataset.correct === "true";
if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
}
else{
    selectedBtn.classList.add("incorrect");
}

Array.from(answerButton.children).forEach(button =>{
    if(button.dataset.correct === "true"){
        button.classList.add("correct")
    }
    button.disabled = true;
})
nextButton.style.display = "block"

}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}`
    nextButton.innerHTML="Play Again"
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }
    else{
        showScore()
    }
}


nextButton.addEventListener("click",()=>{

    if(currentQuestionIndex < questions.length)
    {
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz()
