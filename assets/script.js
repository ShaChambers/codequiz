var time = 120;
var startSection = document.getElementById("start-section");
var startButton = document.getElementById("start-button");
var questionSection = document.getElementById("question-section");
var question ;
//this question index will help us keep track of question you're on

var questionIndex = 0

//Question array
var questionArray = [
    {
        question: "this is question 1", 
        choices: ["a","b","c","d"],
        answer: "b"
    },
    {
        question: "this is question 2", 
        choices: ["a","b","c","d"],
        answer: "b"
    },
    {
        question: "this is question 3", 
        choices: ["a","b","c","d"],
        answer: "b"
    },
    //fill out more questions beneath 
]
//game start
startButton.addEventListener("click",function(event){
    event.preventDefault();
    console.log("selected start");
    console.log(startSection.style.display);
    //hide start section
    startSection.style.display="none";
    console.log(startSection.style.display);
    //reveal question section
    renderFirstQuestion()
})

function renderFirstQuestion(){
    //call on question element
    //change inner text of question <p> element
    //render new question
    //render new choices

}
function renderNextQuestion(){
    //before we incriment, we need to check to see if the choice was right or wrong
    questionIndex ++
    //render new question
    //render new choices
}