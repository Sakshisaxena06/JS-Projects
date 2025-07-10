
const questions = [
   {
    question : "who is me?",
    answers: [
        {text:"vansh" , correct:false},
        {text:" sakshi" , correct:true},
        {text:"Anu" , correct:false},
        {text:"aryan" , correct:false},
    ]
   },

   {
    question : "who is my sister?",
    answers: [
        {text:" anjali" , correct:true},
        {text:"vansh" , correct:false},
        {text:"harsh" , correct:false},
        {text:"Anu" , correct:false},
    ]
   },

   {
    question : "who is ur brother?",
    answers: [
        {text:"vansh" , correct:true},
        {text:"Anjali" , correct:false},
        {text:"Ani" , correct:false},
        {text:"Anj" , correct:false},
    ]
   }

];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score= 0;
    nextButton.innerHTML ="Next";
    showQuestion();
}
 function showQuestion(){
    resetState() ;
    let currentQuestion = questions[currentQuestionIndex] ;
    let questionNo = currentQuestionIndex + 1 ;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question ;

    currentQuestion.answers.forEach( answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text ;
        button.classList.add('btn');
        answerButton.appendChild(button) ;
        if(answer.correct){
            button.dataset.correct = answer.correct ;
        }
        button.addEventListener("click",selectAnswer) ;
    });
 }

 function resetState(){
    nextButton.style.display ="none" ;
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
 }
 function selectAnswer(e){
const selectedbtn=  e.target ;
const isCorrect =selectedbtn.dataset.correct ==="true" ;
if(isCorrect){
    selectedbtn.classList.add("correct") ;
    score++ ;
} else{
    selectedbtn.classList.add("incorrect")
}
Array.from(answerButton.children).forEach(button =>{
    if(button.dataset.correct === "true"){
        button.classList.add("correct")
    }
    button.disabled ="true"
});
nextButton.style.display = "block"
 }
 
 function showScore(){
    resetState() ;
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}` ;
    nextButton.innerHTML = "play again" ;
    nextButton.style.display = "block" ;
 }

 function handleNextButton(){
    currentQuestionIndex++ ;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore() ;
    }
 }

 nextButton.addEventListener("click" ,() =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz()
    }
 })
 startQuiz();